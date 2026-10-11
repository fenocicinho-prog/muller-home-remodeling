import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/gallery";

export default function Gallery({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) {
    return (
      <div className="card p-10 text-center">
        <p className="text-slate-600">Photos coming soon.</p>
        <Link
          href="/quote"
          className="btn btn-accent btn-md mt-5"
        >
          Request a Quote
        </Link>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {photos.map((item) => (
        <div key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
