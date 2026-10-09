import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import QuoteCta from "@/components/QuoteCta";
import Faq from "@/components/Faq";
import ContentSources from "@/components/ContentSources";
import { cities, getCity, citySlugs } from "@/lib/cities";
import { SITE_NAME, canonical } from "@/lib/site";

export function generateStaticParams() {
  return citySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle.replace(` | ${SITE_NAME}`, ""),
    description: city.metaDescription,
    alternates: { canonical: canonical(`/cities/${city.slug}`) },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical(`/cities/${city.slug}`),
      type: "article",
    },
  };
}

function citySchema(city: (typeof cities)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Final Expense Insurance in ${city.name}, GA`,
    url: canonical(`/cities/${city.slug}`),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: ["final expense insurance", "burial insurance", `${city.name}, GA`],
    description: city.metaDescription,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      <JsonLd data={citySchema(city)} />

      <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-lg text-ink-500">
          <Link href="/" className="underline hover:text-brand-700">Home</Link>
          {" / "}
          <span aria-current="page">{city.name}, GA</span>
        </nav>

        <p className="mt-6 text-xl font-bold uppercase tracking-wide text-gold-600">
          Georgia families
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-ink-900 md:text-5xl">
          Final Expense Insurance in {city.name}, GA
        </h1>
        <p className="mt-4 text-2xl leading-relaxed text-ink-700">{city.tagline}</p>

        <div className="prose-senior mt-8 text-xl text-ink-700">
          {city.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {city.sections.map((s) => (
            <section key={s.heading} aria-label={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12">
          <QuoteCta
            title={`Explore coverage for ${city.name} families`}
            body="Learn about final expense coverage and the questions to ask before choosing a policy."
          />
        </div>

        <section aria-labelledby="city-faq" className="mt-14">
          <h2 id="city-faq" className="text-3xl font-bold text-ink-900">
            {city.name} final expense questions
          </h2>
          <div className="mt-8">
            <Faq items={city.faqs} />
          </div>
        </section>

        <ContentSources sources={city.sources} />

        <section aria-labelledby="more-cities" className="mt-14">
          <h2 id="more-cities" className="text-2xl font-bold text-ink-900">
            Also serving nearby communities
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cities/${c.slug}`}
                  className="inline-block rounded-lg border border-cream-200 bg-white px-5 py-3 text-lg font-semibold text-brand-800 hover:border-brand-700"
                >
                  {c.name}, GA
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
