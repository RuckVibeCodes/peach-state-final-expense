import { SOURCE_ACCESS_DATE, type ContentSource } from "@/lib/content-sources";

export default function ContentSources({ sources }: { sources: ContentSource[] }) {
  return <section aria-label="Sources and references" className="mt-14 border-t border-cream-200 pt-8">
    <h2 className="text-2xl font-bold text-ink-900">Sources and references</h2>
    <p className="mt-4 text-lg text-ink-500">Sources accessed October 8, 2026 ({SOURCE_ACCESS_DATE}). Educational references, not an individualized policy recommendation or a claim of licensed review.</p>
    <ul className="mt-4 space-y-3 text-lg">
      {sources.map(source => <li key={source.url}><a className="underline text-brand-700 break-words" href={source.url}>{source.title}</a></li>)}
    </ul>
  </section>;
}
