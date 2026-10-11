import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight } from "@/components/Icons";
import ServiceCard from "@/components/ServiceCard";
import Reviews from "@/components/Reviews";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-brand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-white">What we do</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-soft py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-brand">What our clients say</h2>
          <div className="mt-8">
            <Reviews />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="card px-6 py-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand">Ready to start your project?</h2>
          <Link href="/quote" className="btn btn-accent btn-lg mt-6">
            Request a Quote
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
