export interface FaqItem {
  q: string;
  a: string;
}

// Simple always-visible Q&A list — best for a senior audience (no hidden accordions).
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((f) => (
        <div key={f.q} className="border-b border-cream-200 bg-white py-6">
          <h3 className="text-xl font-bold text-ink-900">{f.q}</h3>
          <p className="mt-2 text-lg leading-relaxed text-ink-700">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
