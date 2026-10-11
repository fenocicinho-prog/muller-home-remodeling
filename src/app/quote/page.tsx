import QuoteForm from "@/components/QuoteForm";
import { site } from "@/data/site";

export const metadata = { title: "Request a Quote" };

export default function Quote() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-serif text-4xl font-bold text-brand">Request a Quote</h1>
      <p className="mt-3 text-slate-600">
        Tell us about your project, or call {site.phone}.
      </p>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </section>
  );
}
