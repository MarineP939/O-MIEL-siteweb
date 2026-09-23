import type { MetadataRoute } from "next";

import { mainNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // `footerNav` est volontairement exclu : les mentions légales sont en `noindex`.
  return mainNav.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified,
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
