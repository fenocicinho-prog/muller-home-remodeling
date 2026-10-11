import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

type Props = { slug: string; image: string; title: string; description: string };

export default function ServiceCard({ slug, image, title, description }: Props) {
  return (
    <div className="card flex flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand"
        >
          <ArrowUpRight />
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center p-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-accent-dark">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-700">{description}</p>
        <Link
          href={`/gallery/${slug}`}
          className="btn btn-brand btn-sm mt-5 w-full justify-between"
        >
          View gallery
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
