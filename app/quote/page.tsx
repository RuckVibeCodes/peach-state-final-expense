import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { SITE_NAME } from "@/lib/site";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Information About Final Expense Coverage",
  description:
    "Public demo quote request form for Peach State Final Expense. Real lead collection remains off until licensing and launch details are approved.",
  alternates: { canonical: canonical("/quote") },
};

export default function QuotePage() {
  return (
    <div className="modern-container quote-page">
      <p className="eyebrow">Start with a little clarity</p>
      <h1>
        Request information about final expense coverage
      </h1>
      <p className="quote-intro">
        Understand your choices, ask good questions, and plan at your own pace.
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-ink-500">
        {SITE_NAME} is an insurance lead service; insurance products are sold
        by licensed agents. This form is not an application for insurance and
        no coverage or approval is promised.
      </p>
    </div>
  );
}
