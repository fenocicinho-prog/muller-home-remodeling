import Link from "next/link";
import Logo from "@/components/Logo";
import { Phone } from "@/components/Icons";
import { site } from "@/data/site";

export default function Header() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-soft/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-brand lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="btn btn-accent btn-sm"
          >
            <Phone />
            Call now
          </a>
          <Link
            href="/quote"
            className="btn btn-brand btn-sm hidden sm:inline-flex"
          >
            Request a Quote
          </Link>

          {/* Menu mobile (sans JavaScript) */}
          <details className="group relative lg:hidden">
            <summary className="btn btn-outline btn-icon list-none [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <span className="sr-only">Menu</span>
            </summary>
            <nav className="absolute right-0 mt-2 w-52 rounded-2xl bg-white p-2 text-sm font-medium text-brand shadow-lg">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-full px-4 py-2 hover:bg-soft">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
