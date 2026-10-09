# Peach State Final Expense

Local rebuild of the Peach State Final Expense lead-site concept for Matt's review.

## Current Milestone

- Warm peach/apricot visual rebuild with a custom SVG peach mark and readable wordmark.
- Public-viewable demo mode is allowed, but real lead collection remains off.
- Pages included: `/`, `/quote`, `/about`, 10 city pages, and 4 guide pages.
- SEO basics included: unique metadata, canonicals, sitemap, robots, one `h1` per page, Article/WebSite structured data.
- Default indexing is blocked until Matt approves launch.
- The request-information form uses fixed sample contact details and validates entirely in the browser. Nothing is transmitted or stored. The API rejects hosted intake before parsing contact information.

## Run Locally

```bash
npm ci
npm run build
npm run start -- --port 3001
```

Open `http://localhost:3001`.

For local-only durable synthetic lead testing:

```bash
ALLOW_SYNTHETIC_LEADS=true npm run start -- --port 3002
```

The browser form never sends requests, even in local test mode. Use an explicit synthetic API request with the `x-synthetic-lead: true` header and `syntheticPreview: true` to test persistence. Records append to gitignored `data/leads.jsonl`, or `LEAD_STORAGE_DIR` when supplied. This local test path is disabled on Vercel.

## Launch Gates

- Matt confirms Georgia licensing and approves launch.
- Real business phone, address policy, founder story, and license details are supplied.
- Matt approves final consent/privacy language with qualified compliance review.
- Real intake storage, alerting, and lead handling process are implemented and tested.
- Indexing is intentionally enabled only after launch approval.
- Domain and real-intake release settings require approval. The current build remains local pending independent retest.

## Production Notes

- No carrier partnership, active agency status, ratings, address, license number, guaranteed approval, or exact pricing is claimed.
- Footer disclosure appears on every page.
- Twilio/Resend alert integration points are marked in `app/api/quote/route.ts`, but no messages are sent.
- Google FAQ rich-result promises are not made.
- Local JSONL storage must be replaced with durable production storage before enabling intake on serverless hosting.
- The family image is an original AI-generated illustration of a family moment, not real customers. Generated with the built-in imagegen tool: a bright Georgia veranda scene, grandmother, adult daughter, and child at right, quiet pale wall at left, natural daylight, no text or logos. Asset: `public/images/family-veranda.webp`.

## Stable Source Identity

Run `node scripts/source-manifest.mjs`. It emits a sorted per-file SHA-256 manifest and a SHA-256 of the exact manifest bytes under `artifacts/`. The script documents exclusions; generated artifacts and lead data are excluded. Build ID is available in `.next/BUILD_ID` after `npm run build`.
