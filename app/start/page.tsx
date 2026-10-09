import type { Metadata } from "next";
import Link from "next/link";
import StartingPoint from "@/components/StartingPoint";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Your Starting Point",
  description: "Explore final expense costs, coverage and existing insurance. Get a useful starting point without providing contact details.",
  alternates: { canonical: canonical("/start") },
  openGraph: { title: "Find Your Starting Point", description: "Consider your priorities and current coverage before deciding what to do next.", url: canonical("/start"), type: "website" },
};

export default function StartPage() {
  return <div className="modern-container start-page">
    <p className="eyebrow">Before you choose coverage</p>
    <h1>Find your starting point.</h1>
    <p className="start-intro">Life insurance can help with final bills. First, consider what matters to you and what you already have.</p>
    <StartingPoint />
    <noscript><p className="start-intro">Read the <Link href="/guides/how-final-expense-works" className="text-link">coverage guide</Link> or <Link href="/guides/final-expense-costs-georgia" className="text-link">Georgia costs guide</Link>.</p></noscript>
  </div>;
}
