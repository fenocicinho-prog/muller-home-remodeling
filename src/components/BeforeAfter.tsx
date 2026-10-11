import Image from "next/image";

type Props = { before: string; after: string; alt: string };

export default function BeforeAfter({ before, after, alt }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[{ src: before, label: "Before" }, { src: after, label: "After" }].map((p) => (
        <div key={p.label} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={p.src} alt={`${alt} - ${p.label}`} fill className="object-cover" />
          <span className="absolute left-2 top-2 rounded-full bg-brand/80 px-3 py-1 text-xs text-white">
            {p.label}
          </span>
        </div>
      ))}
    </div>
  );
}
