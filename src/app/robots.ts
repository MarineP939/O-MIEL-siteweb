import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Les mentions légales ne sont pas bloquées ici : elles portent déjà un `noindex`,
    // que les robots ne pourraient pas lire si l'URL leur était interdite.
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
