import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const links = [{ href: "/guides/how-final-expense-works", label: "How it works" }, { href: "/guides/faq", label: "Questions" }, { href: "/about", label: "About us" }];

export default function Header() {
  return <header className="premium-header"><div className="modern-container header-inner">
    <Link href="/" className="brand-home" aria-label="Peach State Final Expense home"><BrandMark /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/start" className="header-cta">Start here <span aria-hidden="true">&#8599;</span></Link></nav>
    <details className="mobile-menu"><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/start">Start here</Link></nav></details>
  </div></header>;
}
