import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { services } from "@/data/services";
import { getCategoryPhotos } from "@/lib/gallery";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ category: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const service = services.find((s) => s.slug === category);
  return { title: service ? `${service.title} Gallery` : "Gallery" };
}

export default async function CategoryGalleryPage({ params }: Props) {
  const { category } = await params;
  const service = services.find((s) => s.slug === category);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Link href="/gallery" className="text-sm font-medium text-brand hover:text-accent-dark">
        ← All projects
      </Link>
      <h1 className="mt-3 font-serif text-4xl font-bold text-brand">{service.title}</h1>
      <p className="mt-3 max-w-2xl text-slate-600">{service.description}</p>
      <div className="mt-8">
        <Gallery photos={getCategoryPhotos(category)} />
      </div>
    </section>
  );
}
