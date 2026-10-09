import type { Metadata } from "next";
import QuoteCta from "@/components/QuoteCta";
import { SITE_NAME, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Peach State Final Expense is an insurance lead service with educational resources for Georgia families considering funeral costs and life insurance.",
  alternates: { canonical: canonical("/about") },
};

export default function AboutPage() {
  return <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
    <h1 className="text-4xl font-bold leading-tight text-ink-900 md:text-5xl">About {SITE_NAME}</h1>
    <div className="prose-senior mt-8 text-xl text-ink-700">
      <p>{SITE_NAME} is an insurance lead service with educational resources for Georgia families, including Gwinnett and nearby communities.</p>
      <h2>Before choosing coverage</h2>
      <ul><li>Write down the expenses you want help with.</li><li>Compare savings and insurance you already have.</li><li>Ask providers for current, itemized funeral prices.</li><li>Review policy benefits, limits and ongoing payments before deciding.</li></ul>
      <h2>Insurance sales</h2>
      <p>Insurance products are sold by licensed agents. {SITE_NAME} is not an insurer. A licensed agent can explain available products and their terms; the insurer makes coverage decisions.</p>
    </div>
    <div className="mt-12"><QuoteCta title="Consider your next step" body="Start with your priorities and current coverage." label="Find your starting point" href="/start" /></div>
  </article>;
}
