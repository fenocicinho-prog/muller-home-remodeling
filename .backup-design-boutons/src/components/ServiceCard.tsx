import Link from "next/link";

type Props = { slug: string; image: string; title: string; description: string };

export default function ServiceCard({ slug, image, title, description }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-soft shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col items-center p-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-accent-dark">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-700">{description}</p>
        <Link
          href={`/gallery/${slug}`}
          className="mt-5 rounded-full bg-accent px-5 py-1.5 text-xs font-semibold text-brand hover:bg-accent-dark"
        >
          View gallery
        </Link>
      </div>
    </div>
  );
}
