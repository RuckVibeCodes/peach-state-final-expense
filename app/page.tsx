import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Affordable Final Expense Insurance for Georgia Families",
  description: "Explore final expense coverage, costs, and existing insurance for Georgia families ages 50 to 85 in Gwinnett and nearby communities.",
  alternates: { canonical: SITE_URL },
};

const questions = [
  { q: "What is final expense insurance?", a: "Final expense describes life insurance intended to help with funeral expenses and other final bills, commonly smaller whole life coverage. Amounts such as $5,000 to $25,000 are illustrative, not product limits or availability promises. The actual policy determines benefits and payment requirements." },
  { q: "Will I need a medical exam?", a: "Many final expense policies use health questions instead of a medical exam. Eligibility, available coverage, and any waiting period depend on the insurer and policy." },
  { q: "What determines the monthly cost?", a: "Your age, health, tobacco use, coverage amount, and the insurer's rules affect the premium. A licensed agent can explain available options and the cost for your circumstances." },
  { q: "Can I apply if I have a health condition?", a: "A health condition does not automatically rule out every option. Some policies have different eligibility rules or a graded benefit period. Review exclusions and waiting periods before making a decision." },
];

export default function Home() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, description: "Educational final expense insurance information for Georgia families." }} />
    <section className="modern-hero" aria-labelledby="home-title">
      <Image className="hero-photo" src="/images/family-veranda.webp" alt="A grandmother enjoying time with her daughter and grandchild on a sunny porch" fill sizes="100vw" preload />
      <div className="hero-wash" />
      <div className="modern-container hero-inner"><div className="hero-copy">
        <p className="eyebrow"><span className="small-line" /> Georgia roots. Family first.</p>
        <h1 id="home-title">Affordable Final Expense Insurance for Georgia Families</h1>
        <p className="hero-description">A little planning today. More peace of mind for the people you love.</p>
        <p className="hero-detail">Consider funeral expenses, other final bills, and the resources your family already has.</p>
        <div className="hero-actions"><Link href="/start" className="premium-button">Find your starting point <span aria-hidden="true">&#8599;</span></Link><Link href="#how-it-works" className="text-link">How it works <span aria-hidden="true">&#8594;</span></Link></div>
        <p className="hero-location"><span className="desktop-location">For ages 50–85 · Gwinnett &amp; surrounding Georgia communities</span><span className="mobile-location">Ages 50–85 · Northeast Georgia</span></p>
      </div></div>
    </section>
    <section className="principles" aria-label="Our approach"><div className="modern-container principles-grid">
      <p><span className="principle-symbol" aria-hidden="true">01</span> Consider existing coverage</p><p><span className="principle-symbol" aria-hidden="true">02</span> Compare ongoing payments</p><p><span className="principle-symbol" aria-hidden="true">03</span> Decide at your own pace</p>
    </div></section>
    <section className="modern-section modern-container coverage-section" aria-labelledby="coverage-title">
      <div className="section-intro"><p className="eyebrow">A thoughtful way to plan ahead</p><h2 id="coverage-title">Small coverage.<br />A meaningful difference.</h2><p>Final expense insurance is designed to help your loved ones with the expenses that remain. The right amount starts with your needs and a monthly payment you can comfortably keep.</p><Link href="/guides/how-final-expense-works" className="text-link">Understand the coverage <span aria-hidden="true">&#8594;</span></Link></div>
      <div className="coverage-list">{[
        { amount: "$5,000", title: "A starting point", body: "A contribution toward cremation, a memorial, or other final expenses." },
        { amount: "$10,000", title: "Room for more", body: "More room for a farewell and the bills your family may need to manage." },
        { amount: "$25,000", title: "A larger cushion", body: "Additional funds for funeral costs, final bills, or other needs." },
      ].map(item => <div className="coverage-row" key={item.amount}><p className="coverage-number">{item.amount}</p><div><h3>{item.title}</h3><p>{item.body}</p></div></div>)}<p className="fine-print">Illustrative coverage amounts, not prices or recommendations. Availability, premiums, benefits, and waiting periods vary by policy and eligibility.</p></div>
    </section>
    <section className="steps-band" aria-labelledby="how-it-works"><div className="modern-container modern-section">
      <div className="section-heading"><div><p className="eyebrow">Clarity from the very beginning</p><h2 id="how-it-works">A simpler way forward.</h2></div><Link href="/guides/how-final-expense-works" className="text-link">See the full guide <span aria-hidden="true">&#8594;</span></Link></div>
      <div className="steps-grid">{[
        { n: "01", title: "Start with what matters", body: "Think about the expenses you want to help cover and what feels comfortable for your budget." },
        { n: "02", title: "Understand your options", body: "Learn how coverage, health questions, premiums, and waiting periods can differ." },
        { n: "03", title: "Make an informed choice", body: "Review policy details with a licensed agent before deciding what fits your family." },
      ].map(step => <div className="step" key={step.n}><span className="step-number">{step.n}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
    </div></section>
    <section className="modern-section modern-container faq-section" aria-labelledby="questions-title">
      <div className="section-intro"><h2 id="questions-title">Questions about coverage.</h2><p>A premium keeps coverage in force. The policy sets the benefit, payment requirements and limits.</p><Link href="/guides/faq" className="text-link">All frequently asked questions <span aria-hidden="true">&#8594;</span></Link></div>
      <div className="premium-faq">{questions.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true" className="faq-plus">+</span></summary><p>{item.a}</p></details>)}</div>
    </section>
    <section className="learn-band" aria-labelledby="learn-title"><div className="modern-container modern-section">
      <div className="section-heading"><div><p className="eyebrow">Make room for an informed decision</p><h2 id="learn-title">A little knowledge goes a long way.</h2></div></div>
      <div className="guide-grid">{[
        { label: "Planning ahead", title: "Does Medicare cover funeral costs?", href: "/guides/does-medicare-cover-funeral-costs", description: "Health coverage, survivor benefits, and funeral funding are different." },
        { label: "The essentials", title: "How final expense insurance works", href: "/guides/how-final-expense-works", description: "Coverage, applications, and benefits explained." },
        { label: "Your budget", title: "Understanding costs in Georgia", href: "/guides/final-expense-costs-georgia", description: "What affects premiums and how to compare." },
        { label: "Your choices", title: "Term life or final expense?", href: "/guides/term-vs-final-expense", description: "Two kinds of protection. Different purposes." },
      ].map(guide => <Link href={guide.href} className="guide-item" key={guide.href}><span className="eyebrow">{guide.label}</span><h3>{guide.title}</h3><p>{guide.description}</p><span className="guide-arrow" aria-hidden="true">&#8599;</span></Link>)}</div>
    </div></section>
    <section className="modern-section modern-container communities" aria-labelledby="communities-title"><p className="eyebrow">Close to home</p><h2 id="communities-title">For families across our corner of Georgia.</h2><p>Local information for Gwinnett County and nearby communities.</p><div className="city-links">{cities.map(city => <Link href={`/cities/${city.slug}`} key={city.slug}>{city.name}<span aria-hidden="true">&#8599;</span></Link>)}</div></section>
    <section className="closing-band"><div className="modern-container closing-inner"><div><p className="eyebrow">For the people who matter most</p><h2>Plan with care.<br />Choose with confidence.</h2></div><div><p>Start by learning what final expense coverage could mean for your family.</p><Link href="/start" className="premium-button">Find your starting point <span aria-hidden="true">&#8599;</span></Link></div></div></section>
  </>;
}
