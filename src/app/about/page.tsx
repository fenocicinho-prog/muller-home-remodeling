import { site } from "@/data/site";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand">About {site.name}</h1>
      <p className="mt-6 text-slate-700">
        With more than 20 years of experience in home remodeling, we have built a reputation for
        honest work, clear communication and clean results. We started in Phoenix and now serve{" "}
        {site.areas.join(", ")} and nearby areas.
      </p>
      <p className="mt-4 text-slate-700">
        Licensed California contractor, {site.license}.
      </p>
    </section>
  );
}
