import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${site.name} | Kitchen, Bathroom & Flooring Remodels`,
  description: `Licensed general contractor serving ${site.areas.join(", ")}. Home remodels, kitchens, bathrooms, flooring and additions.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${bodyFont.variable}`}>
      <body className="bg-white font-sans text-slate-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
