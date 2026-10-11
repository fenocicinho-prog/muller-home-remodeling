import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      {/* Image de fond floutée (remplaçable par une vraie photo : public/images/hero-bg.jpg) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-110 bg-cover bg-center blur-[3px]"
        style={{ backgroundImage: "url(/images/hero-bg.svg)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand/75" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight md:text-5xl">
          Quality home remodeling in {site.areas[0]} and nearby areas
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Kitchens, bathrooms, flooring and small additions. More than 20 years of experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/quote" className="btn btn-accent btn-lg">
            Request a Quote
            <ArrowRight />
          </Link>
          <Link href="/gallery" className="btn btn-outline-light btn-lg">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
