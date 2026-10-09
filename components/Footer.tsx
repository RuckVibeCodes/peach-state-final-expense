import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { FOOTER_DISCLOSURE, SITE_NAME, CURRENT_YEAR } from "@/lib/site";

export default function Footer() {
  return <footer className="premium-footer"><div className="modern-container">
    <div className="footer-top"><div><BrandMark /><p>Thoughtful planning.<br />For Georgia families.</p></div><nav aria-label="Footer"><Link href="/guides/how-final-expense-works">How it works</Link><Link href="/guides/final-expense-costs-georgia">Coverage &amp; costs</Link><Link href="/guides/faq">Questions</Link><Link href="/about">About us</Link><Link href="/quote">Contact &amp; privacy notice</Link></nav></div>
    <div className="footer-bottom"><p>{FOOTER_DISCLOSURE}</p><p>&copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.</p></div>
  </div></footer>;
}
