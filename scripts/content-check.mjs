import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const cache = new Map();
function loadData(file) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute);
  const exports = {};
  cache.set(absolute, exports);
  const code = ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  vm.runInThisContext(`(function(exports, require) { ${code}\n})`)(exports,
    relative => loadData(path.join(path.dirname(absolute), `${relative}.ts`)));
  return exports;
}

const { guides } = loadData("lib/guides.ts");
const { cities } = loadData("lib/cities.ts");
const { FOOTER_DISCLOSURE } = loadData("lib/site.ts");
const report = { wordCounts: {}, routes: [], unknownRoutes: [], safeguards: [], contextReviewRequired: true };
for (const guide of guides) {
  const parts = [guide.description, ...guide.intro,
    ...guide.sections.flatMap(section => [section.heading, ...section.paragraphs, ...(section.list || [])]),
    ...guide.faqs.flatMap(faq => [faq.q, faq.a])];
  const count = parts.join(" ").trim().split(/\s+/).length;
  assert(count >= 800 && count <= 1500, `${guide.slug}: ${count} words`);
  if (guide.slug === "does-medicare-cover-funeral-costs") assert(count >= 900 && count <= 1200, `${guide.slug}: ${count} words`);
  report.wordCounts[guide.slug] = count;
  assert(guide.sources.length > 0);
}
assert.equal(cities.length, 10);
assert.equal(guides.length, 5);
const prose = JSON.stringify([...guides, ...cities]);
for (const pattern of [/approval is automatic/i, /most of our .*clients/i,
  /families we talk to/i, /pays regardless of cause/i, /locks your money/i,
  /paid within (?:24|1)[-\u2013 ]/i, /\$\d+[\u2013-]\$?\d+\/month/i,
  /guarantees the money is there/i]) assert(!pattern.test(prose), `Claim regression: ${pattern}`);
// This scan catches specific regressions; it does not replace an editorial read.
const origin = process.env.PREVIEW_URL || "http://127.0.0.1:3004";
const routes = ["/", "/about", "/quote", ...cities.map(city => `/cities/${city.slug}`),
  ...guides.map(guide => `/guides/${guide.slug}`)];
const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();
for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
  assert(html.includes('name="robots" content="noindex'), route);
  assert(html.includes(FOOTER_DISCLOSURE), route);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/ )?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  assert(title && description && canonical, route);
  assert(!titles.has(title) && !descriptions.has(description) && !canonicals.has(canonical), route);
  titles.add(title); descriptions.add(description); canonicals.add(canonical);
  if (route.startsWith("/guides/") || route.startsWith("/cities/")) {
    assert(html.includes("Sources and references") && html.includes("Sources accessed October 8, 2026"), route);
    assert(html.includes('"@type":"Article"'), route);
  }
  report.routes.push({ route, status: response.status, title, description, canonical });
}
for (const route of ["/cities/not-a-city", "/guides/not-a-guide"]) {
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  assert([200, 404].includes(response.status), route);
  assert(html.includes("This page could not be found") && html.includes("noindex"), route);
  report.unknownRoutes.push({ route, status: response.status,
    note: "Next.js can stream the not-found UI with HTTP 200; strict HTTP-404 acceptance remains separate." });
}
assert((await (await fetch(`${origin}/robots.txt`)).text()).includes("Disallow: /"));
assert.equal((await fetch(`${origin}/sitemap.xml`)).status, 200);
assert.equal((await fetch(`${origin}/api/quote`, {
  method: "POST", headers: { "Content-Type": "application/json" }, body: "{",
})).status, 403);
const newRoute = "/guides/does-medicare-cover-funeral-costs";
const article = await (await fetch(`${origin}${newRoute}`)).text();
for (const href of ["/guides/how-final-expense-works", "/guides/final-expense-costs-georgia", "/quote"]) assert(article.includes(`href="${href}"`));
assert(article.includes("View demo information form") && article.includes("fictional people"));
assert(article.includes("family-planning-medicare.webp") && article.includes('width="1600"') && article.includes('height="800"'));
assert((await (await fetch(origin)).text()).includes(`href="${newRoute}"`));
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
assert(sitemap.includes(newRoute));
for (const future of ["cremation-costs-georgia", "final-expense-waiting-period", "dying-without-life-insurance-georgia", "no-medical-exam-life-insurance-georgia"]) assert(!sitemap.includes(future));
report.safeguards = ["18 routes, unique metadata/canonicals, one H1, exact footer, noindex",
  "15 city/guide source sections and Article schema", "unknown city/guide not-found UI and noindex; see actual statuses",
  "new guide contextual links, demo CTA, image dimensions, homepage discovery and sitemap; future articles absent",
  "robots Disallow /", "sitemap 200", "malformed synthetic API request 403 before parsing"];
fs.mkdirSync("artifacts", { recursive: true });
fs.writeFileSync("artifacts/CONTENT_CHECK_RESULTS.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
