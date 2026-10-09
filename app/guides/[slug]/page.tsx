import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import QuoteCta from "@/components/QuoteCta";
import Faq from "@/components/Faq";
import ContentSources from "@/components/ContentSources";
import { guides, getGuide, guideSlugs } from "@/lib/guides";
import { SITE_NAME, canonical } from "@/lib/site";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle.replace(` | ${SITE_NAME}`, ""),
    description: guide.metaDescription,
    alternates: { canonical: canonical(`/guides/${guide.slug}`) },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: canonical(`/guides/${guide.slug}`),
      type: "article",
    },
  };
}

function articleSchema(guide: (typeof guides)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: canonical(`/guides/${guide.slug}`),
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <JsonLd data={articleSchema(guide)} />

      <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-lg text-ink-500">
          <Link href="/" className="underline hover:text-brand-700">Home</Link>
          {" / "}
          <span aria-current="page">{guide.title}</span>
        </nav>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-ink-500">{guide.description}</p>

        <div className="prose-senior mt-8 text-xl text-ink-700">
          {guide.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {guide.sections.map((s) => (
            <section key={s.heading} aria-label={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12">
          <QuoteCta />
        </div>

        {guide.faqs.length > 0 && (
          <section aria-labelledby="guide-faq" className="mt-14">
            <h2 id="guide-faq" className="text-3xl font-bold text-ink-900">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              <Faq items={guide.faqs} />
            </div>
          </section>
        )}

        <ContentSources sources={guide.sources} />

        <section aria-labelledby="related-guides" className="mt-14">
          <h2 id="related-guides" className="text-2xl font-bold text-ink-900">
            Keep learning
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="text-xl font-semibold text-brand-700 underline hover:text-brand-800"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
