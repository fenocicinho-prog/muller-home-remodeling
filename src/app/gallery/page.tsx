import Link from "next/link";
import Gallery from "@/components/Gallery";
import { services } from "@/data/services";
import { getAllPhotos } from "@/lib/gallery";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand">Our Work</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/gallery/${s.slug}`}
            className="chip"
          >
            {s.title}
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Gallery photos={getAllPhotos()} />
      </div>
    </section>
  );
}
