import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r, i) => (
        <figure key={i} className="rounded-lg bg-white p-6 shadow-sm">
          <div className="text-accent" aria-label="5 stars">★★★★★</div>
          <blockquote className="mt-3 text-sm text-slate-700">“{r.text}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-brand">
            {r.name} <span className="font-normal text-slate-500">· {r.city}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
