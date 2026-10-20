/**
 * Briques SEO partagées : URL canoniques et données structurées schema.org.
 *
 * Tout dérive de `site.url` : le jour où le domaine définitif est connu, une
 * seule ligne de `site.ts` suffit à corriger canoniques, sitemap et Open Graph.
 */

import { site } from "@/lib/site";

/** URL absolue d'un chemin interne, pour les canoniques et le balisage. */
export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

/** Identifiant stable de l'entreprise, réutilisé pour relier les entités entre elles. */
const ORGANISATION_ID = absoluteUrl("/#organisation");

/**
 * Fiche d'entreprise locale, injectée sur toutes les pages via le layout.
 *
 * Les coordonnées géographiques ne sont pas renseignées : elles n'ont pas été
 * communiquées et une approximation nuirait au référencement local.
 * TODO : ajouter `geo` (latitude / longitude du siège) une fois relevées.
 */
export const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORGANISATION_ID,
  name: site.name,
  legalName: site.legal.companyName,
  description: site.description,
  url: site.url,
  logo: absoluteUrl("/Logo-o-miel.png"),
  image: absoluteUrl("/produits/coffret-caramiel-miel.jpg"),
  email: site.contact.email,
  telephone: site.contact.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    postalCode: site.contact.address.postalCode,
    addressLocality: site.contact.address.city,
    addressRegion: "Guadeloupe",
    addressCountry: "GP",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Guadeloupe",
  },
  founder: {
    "@type": "Person",
    name: "Benoît FOUCAN-PÉRAFIDE",
    jobTitle: "Gérant et ingénieur conseil apicole",
  },
  award: [
    "Médaille d’or au Concours Général Agricole de Paris 2013",
    "Médaille d’or au Concours Général Agricole de Paris 2014",
    "Médaille d’or au Concours Général Agricole de Paris 2015",
    "Prix d’excellence 2016",
  ],
  sameAs: [site.social.instagram],
  knowsAbout: [
    "Apiculture",
    "Miel de Guadeloupe",
    "Biosurveillance environnementale",
    "Pollinisation",
  ],
};

/** Site web, pour relier le nom de marque aux résultats de recherche. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#site"),
  name: site.name,
  url: site.url,
  inLanguage: "fr-FR",
  publisher: { "@id": ORGANISATION_ID },
};

export type Fil = { name: string; path: string };

/** Fil d'Ariane structuré, qui enrichit l'affichage de l'URL dans les résultats. */
export function breadcrumbJsonLd(items: Fil[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Déclare un produit et son offre.
 *
 * `LimitedAvailability` est retenu plutôt que `InStock` : les récoltes sont
 * limitées et les produits transformés fabriqués sur commande. Sur-déclarer une
 * disponibilité expose à une action manuelle de Google.
 */
export function produitJsonLd(produit: {
  name: string;
  description: string;
  image?: string;
  prices: number[];
}) {
  const { name, description, image, prices } = produit;
  const low = Math.min(...prices);
  const high = Math.max(...prices);

  return {
    "@type": "Product",
    name,
    description,
    ...(image ? { image: absoluteUrl(image) } : {}),
    brand: { "@type": "Brand", name: site.name },
    offers:
      low === high
        ? {
            "@type": "Offer",
            price: low,
            priceCurrency: "EUR",
            availability: "https://schema.org/LimitedAvailability",
            seller: { "@id": ORGANISATION_ID },
          }
        : {
            "@type": "AggregateOffer",
            lowPrice: low,
            highPrice: high,
            offerCount: prices.length,
            priceCurrency: "EUR",
            availability: "https://schema.org/LimitedAvailability",
            seller: { "@id": ORGANISATION_ID },
          },
  };
}
