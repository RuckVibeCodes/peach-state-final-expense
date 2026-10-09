import Link from "next/link";

export default function QuoteCta({
  title = "Explore what fits your family",
  body = "Understand your choices and take the next step at your own pace.",
  label = "Request information",
  href = "/quote",
}: {
  title?: string;
  body?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="article-cta">
      <h2 className="text-3xl font-bold leading-snug">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-brand-50">
        {body}
      </p>
      <Link
        href={href}
        className="premium-button mt-8"
      >
        {label}
      </Link>
    </section>
  );
}
