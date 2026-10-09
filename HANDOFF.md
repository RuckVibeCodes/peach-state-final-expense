# Project Handoff

Peach State Final Expense is an insurance lead-service concept with educational content for Georgia families ages 50–85. The current milestone is a local design demo, not an active insurance agency or functioning public intake service.

## Included

Next.js 16.4.0, React 19.3.0, TypeScript, and Tailwind v4. Routes include the homepage, request-information form, about page, ten distinct city pages, and four educational guides. The latest homepage direction uses an original illustrative family image, a custom peach mark, restrained peach accents, and white and sage sections. The original image is illustrative, not a customer testimonial or founder photograph.

The hosted form uses fixed sample contact details and client-side validation only. It never POSTs, stores, or sends contact information. The API returns 403 before parsing request bodies by default. Local synthetic persistence requires explicit `ALLOW_SYNTHETIC_LEADS=true` and is disabled when the Vercel environment flag is present. Local test records go to a gitignored JSONL file outside public assets. No notifications are sent.

## Safeguards

Noindex/nofollow metadata and disallow-all robots remain enabled. Every page contains the required lead-service disclosure. Structured data uses WebSite and Article, with no InsuranceAgency, LocalBusiness, ratings, address, or license claims. Consent copy is a draft requiring review, not a legal compliance certification. No rich-result or ranking outcomes are promised.

## Remaining Gates

Real intake requires approved operational details, production storage appropriate to serverless hosting, validation and consent review, and a direct-to-owner delivery configuration. Local filesystem storage is not suitable for durable serverless production. Founder story, license details, phone, and address policy are pending supplied facts. Public launch and indexing require confirmation of Georgia licensing and explicit launch approval. A demo does not satisfy these gates.

No archive, original inspection copy, lead data, credentials, local build artifacts, or caches belong in a public source repository. Use the README for local reproduction. Preserve the stable source manifest and build ID when requesting independent QA.
