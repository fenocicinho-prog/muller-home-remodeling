import { site } from "@/data/site";

type Props = { className?: string; light?: boolean };

/** Logo : icône (maison M) + nom de l'entreprise en texte. */
export default function Logo({ className = "", light = false }: Props) {
  const [first, ...rest] = site.name.split(" ");
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-icon.svg"
        alt=""
        width={44}
        height={44}
        className={`h-11 w-11 shrink-0 rounded-full ${light ? "bg-white p-0.5" : ""}`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-bold ${light ? "text-white" : "text-brand"}`}>
          {first}
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-accent" : "text-accent-dark"
          }`}
        >
          {rest.join(" ")}
        </span>
      </span>
    </span>
  );
}
