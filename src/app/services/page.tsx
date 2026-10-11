import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="font-serif text-4xl font-bold text-white">Our Services</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <p className="mt-10 text-white/80">Areas served: {site.areas.join(", ")} and nearby.</p>
      </div>
    </section>
  );
}
