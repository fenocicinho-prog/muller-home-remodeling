import Link from "next/link";
import { site } from "@/data/site";

const icon = "h-5 w-5 shrink-0 text-accent";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
function SmsIcon() {
  return (
    <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={icon} fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4v2.5H7.3v3.3h2.8V22h3.4Z" />
    </svg>
  );
}

export default function Footer() {
  const digits = site.phone.replace(/\s/g, "");
  const link =
    "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition duration-200 hover:bg-white/20 hover:text-white";

  return (
    <footer className="mt-16 bg-brand text-sm text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-serif text-xl font-semibold text-white">{site.name}</p>
          <p>Serving {site.areas.join(", ")} and nearby areas.</p>
        </div>

        <div>
          <p className="font-serif text-lg font-semibold text-accent">Menu</p>
          <ul className="mt-3 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-serif text-lg font-semibold text-accent">Contact</p>
          <ul className="mt-3 space-y-3">
            <li>
              <a href={`tel:${digits}`} className={link}>
                <PhoneIcon /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`sms:${digits}`} className={link}>
                <SmsIcon /> Text us
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={link}>
                <MailIcon /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={link}>
                <FacebookIcon /> Facebook page
              </a>
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <PinIcon /> {site.areas.join(", ")}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
