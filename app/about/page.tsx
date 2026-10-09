import type { Metadata } from "next";
import QuoteCta from "@/components/QuoteCta";
import { SITE_NAME, canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Peach State Final Expense exists for one reason: helping Georgia families plan ahead with simple, honest final expense insurance guidance. Learn about our mission.",
  alternates: { canonical: canonical("/about") },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
        About {SITE_NAME}
      </h1>

      <div className="prose-senior mt-8 text-xl text-ink-700">
        <p>
          {SITE_NAME} started with a simple observation: too many Georgia
          families need clear information when planning final expenses.
          Itemized provider prices, existing resources, and actual policy
          terms are a better starting point than an unsupported statewide
          cost estimate.
        </p>
        <p>
          We believe planning ahead is one of the kindest things a person can
          do for the people they love. Our mission is to make final expense
          insurance easier to understand: plain-English explanations and
          clear questions to ask about actual costs and policy provisions.
        </p>

        <h2>What we believe</h2>
        <ul>
          <li>
            <strong>Clarity over jargon.</strong> If we can&apos;t explain it
            simply, we don&apos;t understand it well enough.
          </li>
          <li>
            <strong>The right size, not the biggest sale.</strong> Compare
            actual needs and existing resources with payments you can maintain.
          </li>
          <li>
            <strong>No pressure, ever.</strong> We give you the numbers and the
          educational information. The decision and timing remain yours.
          </li>
          <li>
            <strong>Georgia first.</strong> Our educational pages focus on
            Gwinnett and nearby Georgia communities. No local office or active
            licensed service footprint is claimed.
          </li>
        </ul>

        <h2>How we work</h2>
        <p>
          Start with educational information about coverage amounts, monthly
          costs, and policy details. A licensed agent can help you review
          available options and understand any health questions, exclusions,
          or waiting periods before you apply.
        </p>
        <p>
          {SITE_NAME} is an insurance lead service. Insurance products are sold
          by licensed agents. Coverage decisions should be grounded in each
          family&apos;s actual needs and budget.
        </p>
      </div>

      {/* ================================================================
          TODO (Matt): Replace this placeholder with your real story once
          you are licensed — who you are, why you do this work, and your
          Georgia license number. Do NOT publish a biography or license
          claim before the license is in hand.
      ================================================================ */}
      <section
        aria-label="About the founder"
        className="mt-10 rounded-2xl border-2 border-dashed border-gold-500 bg-gold-100 p-8"
      >
        <h2 className="text-2xl font-bold text-ink-900">Meet the founder</h2>
        <p className="mt-3 text-xl leading-relaxed text-ink-700">
          <em>
            Founder biography and license details are pending. No active
            license or agency status is claimed.
          </em>
        </p>
      </section>

      <div className="mt-12">
        <QuoteCta
          title="Let's start the conversation"
          body="Understand your choices and the questions to ask before you decide."
        />
      </div>
    </article>
  );
}
