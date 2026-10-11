import { site } from "@/data/site";

export default function Logo() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.svg" alt={site.name} width={220} height={38} />;
}
