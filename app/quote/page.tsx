import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Information About Final Expense Coverage",
  description:
    "Contact form for Peach State Final Expense. Requests are not currently sent or saved, and no follow-up is arranged.",
  alternates: { canonical: canonical("/quote") },
};

export default function QuotePage() {
  return (
    <div className="modern-container quote-page">
      <h1>
        Request information
      </h1>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </div>
  );
}
