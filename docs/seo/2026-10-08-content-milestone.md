# Content Candidate: October 8, 2026

Baseline: `5dadfd1e8139f1660e598af67ea624800be264f8`. This is a local, unpushed candidate for independent editorial and runtime QA, not launch acceptance.

## What Changed

The ten existing city pages retain distinct planning topics: Dacula provider research, Lawrenceville household budgets and claim timing, Buford age eligibility and family records, Duluth selected traditions, Suwanee written wishes, Snellville older coverage, Winder sustainable payments, Auburn separate planning tasks, Braselton benefit limits and estate questions, and Hoschton family conversations and underwriting. Dacula/Lawrenceville have deeper explanations. Unsupported local prices, premium ranges, client stories, demographic/ranking assertions, payout deadlines, blanket approval and benefit promises, and absolute prepaid-plan claims were removed. Unverified county/ZIP badges and decorative landmark claims were removed rather than replaced with fictional local evidence. These pages do not establish an office or actual licensed service footprint.

All four guides were expanded to the new 800-1500-word target, with policy-specific qualifications, replacement cautions, and readable primary-source lists. Counts include description, introduction, section headings/body/list items, FAQ questions and answers; they exclude navigation, H1, CTAs, references and footer. Current counts: costs 953; how it works 985; term comparison 1024; FAQ 1059. Minor beneficiaries are not described as receiving direct payments; no universal custodial method is prescribed. Graded benefits and contestability are distinguished. Tax information is qualified and linked to the IRS.

The shared source section lists an honest October 8, 2026 America/New_York access date (UTC verification occurred October 9). Publisher attribution remains organizational, not a claim of licensed review. Historical simplified-issue research is labeled 2017, and the LIC/LOMA glossary is category evidence, not an offered-product list. No reviewer, rate study, current local general price list, Census estimate, or exact postal/boundary study has been invented.

The guide breadcrumb no longer labels FAQ as a guide hub. About and the homepage FAQ received the same narrow claim corrections. The source-manifest utility now excludes generated Vercel linkage metadata. No layout styles, image assets, form behavior, intake API, indexing flags, notification integration, domain, or business settings changed.

## Decisions And Missing Evidence

Matt's future lead-recipient decision is settled: requests should go to Matt; he controls any later manual handoff to his upline. There is no automatic upline route or response-time promise. Intake stays disabled in this milestone. Live storage, notification configuration, approved privacy/consent, and separately authorized setup remain outstanding. See the [owner decision and Muse collaboration](../collab/codex-to-muse.md).

Verified local provider price lists, precise geography, and a qualified editorial reviewer remain pending. The corrected pages explain how to research costs without asserting local expertise unsupported by evidence. Independent QA should examine usefulness and tone as well as factual qualifications; more text alone is not SEO acceptance.

## Reproduction And QA

Install the locked dependencies, then run `npm run lint`, `npm run build`, and `npm run start -- --port 3004 --hostname 127.0.0.1`. Run `node scripts/content-check.mjs` against the local preview. `PREVIEW_URL` can select another local port. The test uses only a deliberately malformed synthetic API request; no lead data is sent. The generated report and source manifest are under ignored `artifacts/`.

The first build failed because a shared dependency directory contained duplicate type-package folders. That directory was left untouched. A fresh project-local `npm ci --ignore-scripts` restored the build environment without changing the lockfile. Initial corrected-content build, TypeScript, and lint then passed. Production dependency audit reported zero advisories; the full audit reported five high-severity development-tool dependency entries through the existing ESLint configuration and braces/micromatch chain. No forced dependency downgrade or unrelated update was applied. Dependency maintenance is a separate follow-up, not a content-review result.

The final frozen build ID, source digest, route/metadata results and real guide screenshots will be provided in the implementation handoff. An implementer's checks are not independent acceptance. Product changes must not be pushed until that independent check and follow-up authorization.

A strict unknown-city HTTP-404 assertion initially failed with HTTP 200. Subsequent inspection showed not-found UI and noindex; a warmed city request returned 404 while the guide still returned 200. Next.js documents that a response can keep HTTP 200 when not-found is reached after streaming begins. The regression report records actual statuses, not a claimed strict-404 pass. This routing behavior remains for separate review; no routing redesign was folded into the content milestone.

All 17 requested routes returned 200 with distinct titles/descriptions/canonicals, one H1, noindex and the exact disclosure footer. All city and guide pages display sources and Article schema. Robots remains Disallow /, sitemap returns 200, and a malformed synthetic API POST returns 403 before parsing. The four guides fit at both 320 and 390 pixels without text overflow. Real desktop/mobile screenshots were saved locally, including a full FAQ with its source list. The browser screenshot operation initially timed out; recovery succeeded with the same Chrome profile. The Mac reported locked during recovery, so no new full interactive form run is claimed here. The form, API, site flags, styles, images, package manifest and lockfile match the baseline; prior independent form QA is supporting history, not acceptance of this candidate.
