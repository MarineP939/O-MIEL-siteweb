import type { MetadataRoute } from "next";

import { mainNav, site } from "@/lib/site";

/**
 * Priorités relatives entre pages. Elles n'influencent pas le classement, mais
 * orientent l'ordre d'exploration quand le budget de crawl est limité : les
 * pages commerciales passent avant les pages institutionnelles.
 */
const PRIORITES: Record<string, number> = {
  "/": 1,
  "/boutique": 0.9,
  "/biosurveillance": 0.8,
  "/formations": 0.8,
  "/accompagnement": 0.8,
  "/contact": 0.7,
  "/a-propos": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Date fixée au build : un horodatage recalculé à chaque déploiement
  // signalerait à tort que toutes les pages ont changé.
  const lastModified = new Date();

  // `footerNav` est volontairement exclu : les mentions légales sont en `noindex`.
  return mainNav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified,
    changeFrequency: item.href === "/" || item.href === "/boutique" ? "monthly" : "yearly",
    priority: PRIORITES[item.href] ?? 0.7,
  }));
}
