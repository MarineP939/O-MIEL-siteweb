/**
 * Configuration centrale du site vitrine O'MIEL.
 *
 * Les coordonnées, l'identité légale et les réseaux proviennent du document
 * fourni par la SCEA Ô MIEL. Les valeurs encore marquées `TODO` n'y figuraient
 * pas et doivent être complétées avant la mise en ligne.
 */

export const site = {
  name: "O’MIEL",
  baseline: "Miel artisanal de Guadeloupe",
  description:
    "SCEA Ô MIEL, apiculture artisanale en Guadeloupe : miels de terroir, produits agro-transformés, formations à l’apiculture et biosurveillance environnementale par l’abeille.",
  // TODO : remplacer par le domaine définitif (sert au sitemap et aux balises Open Graph).
  url: "https://www.o-miel.fr",
  locale: "fr_FR",
  contact: {
    email: "sceaomiel2@gmail.com",
    phone: "0690 38 22 32",
    phoneHref: "+590690382232",
    address: {
      street: "Démérée",
      postalCode: "97131",
      city: "Petit-Canal",
      country: "Guadeloupe",
    },
  },
  social: {
    instagram: "https://www.instagram.com/_omiel_/",
    instagramHandle: "@_omiel_",
  },
  /** Interlocuteurs joignables directement, repris du support commercial. */
  contactsDirects: [
    { name: "Benoît FOUCAN-PÉRAFIDE", phone: "0690 38 22 32", phoneHref: "+590690382232" },
    { name: "Marine PAJAMANDY", phone: "0690 00 60 23", phoneHref: "+590690006023" },
  ],
  /** Mentions légales. */
  legal: {
    companyName: "SCEA Ô MIEL",
    legalForm: "Société civile d’exploitation agricole (SCEA)",
    siret: "000 000 000 00000", // TODO : SIRET réel, non fourni dans le document
    publicationDirector: "Benoît FOUCAN-PÉRAFIDE, gérant",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      url: "https://vercel.com",
    },
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Navigation principale, dans l'ordre d'affichage. */
export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Formations", href: "/formations" },
  { label: "Accompagnement", href: "/accompagnement" },
  { label: "Boutique", href: "/boutique" },
  { label: "Biosurveillance", href: "/biosurveillance" },
  { label: "Contact", href: "/contact" },
];

/** Liens secondaires, affichés uniquement dans le pied de page. */
export const footerNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
];
