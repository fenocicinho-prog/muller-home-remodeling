import fs from "node:fs";
import path from "node:path";
import { services } from "@/data/services";

export type Photo = { src: string; alt: string };

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

// Lit automatiquement les photos déposées dans public/gallery/<slug>/
export function getCategoryPhotos(slug: string): Photo[] {
  const service = services.find((s) => s.slug === slug);
  if (!service) return [];
  const dir = path.join(process.cwd(), "public", "gallery", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/gallery/${slug}/${encodeURIComponent(file)}`,
      alt: `${service.title} project`,
    }));
}

export function getAllPhotos(): Photo[] {
  return services.flatMap((s) => getCategoryPhotos(s.slug));
}
