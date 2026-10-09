import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const exports = {};
const code = ts.transpileModule(fs.readFileSync("lib/starting-point.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
vm.runInThisContext(`(function(exports) { ${code}\n})`)(exports);
const { questions, startingPoint, initialAnswers } = exports;
assert.equal(questions.length, 3);
const allowedLinks = new Set(["/guides/how-final-expense-works", "/guides/final-expense-costs-georgia", "/guides/faq", "/guides/term-vs-final-expense", "/guides/does-medicare-cover-funeral-costs"]);
let checked = 0;
const results = new Set();
for (const person of questions[0].options) for (const topic of questions[1].options) for (const existing of questions[2].options) {
  const answers = { person: person.value, topic: topic.value, existing: existing.value };
  const before = JSON.stringify(answers);
  const result = startingPoint(answers);
  assert.equal(JSON.stringify(answers), before);
  assert(result.title && result.text && result.person && result.existing);
  assert(allowedLinks.has(result.href) && allowedLinks.has(result.secondLink.href));
  if (existing.value === "yes") assert(result.existing.includes("Do not cancel") && result.secondLink.href === "/guides/term-vs-final-expense");
  if (existing.value === "no") assert(result.existing.includes("does not automatically mean"));
  if (person.value === "other") assert(result.person.includes("include them in decisions"));
  if (topic.value === "costs") assert(result.href === "/guides/final-expense-costs-georgia");
  results.add(JSON.stringify(result)); checked++;
}
assert.equal(checked, 64);
assert.equal(results.size, 36);
assert.equal(startingPoint(initialAnswers).href, "/guides/faq");
assert.equal(startingPoint({ person: "invalid", topic: "invalid", existing: "invalid" }).href, "/guides/faq");
const component = fs.readFileSync("components/StartingPoint.tsx", "utf8");
assert(!/\bfetch\s*\(|localStorage|sessionStorage|sendBeacon|\/api\/quote|Formspree|formspree/.test(component));
assert(component.includes('href="/quote"'));
assert(fs.readFileSync("components/QuoteForm.tsx", "utf8").includes("Nothing is sent or saved"));
console.log(JSON.stringify({ checked, distinctEducationalResults: results.size, answerMutation: false, remoteSubmissionOrPersistence: false, note: "Pure branch/source tests; browser interaction QA is separate." }, null, 2));
