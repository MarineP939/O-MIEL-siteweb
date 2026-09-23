/**
 * Configuration centrale du site vitrine O'MIEL.
 *
 * ⚠️ À COMPLÉTER : toutes les valeurs marquées `TODO` sont des placeholders.
 * Remplace-les par les informations réelles de l'entreprise avant la mise en ligne.
 */

export const site = {
  name: "O’MIEL",
  baseline: "Miel artisanal de Guadeloupe",
  description:
    "O’MIEL, apiculture artisanale en Guadeloupe : miels de terroir, formations à l’apiculture et biosurveillance environnementale par l’abeille.",
  // TODO : remplacer par le domaine définitif (sert au sitemap et aux balises Open Graph).
  url: "https://www.o-miel.fr",
  locale: "fr_FR",
  contact: {
    email: "contact@o-miel.fr", // TODO : adresse e-mail réelle
    phone: "+590 690 00 00 00", // TODO : numéro réel
    phoneHref: "+590690000000", // TODO : même numéro, format lien tel:
    address: {
      street: "Adresse du rucher", // TODO
      postalCode: "97100", // TODO
      city: "Guadeloupe", // TODO
      country: "France",
    },
    hours: "Du lundi au vendredi, 8h – 17h", // TODO
  },
  social: {
    // TODO : renseigner ou supprimer les réseaux non utilisés.
    facebook: "",
    instagram: "",
  },
  /** Mentions légales — TODO : à compléter avec les informations officielles. */
  legal: {
    companyName: "O’MIEL",
    legalForm: "Entreprise individuelle", // TODO
    siret: "000 000 000 00000", // TODO
    publicationDirector: "Nom du responsable de publication", // TODO
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
  { label: "Boutique", href: "/boutique" },
  { label: "Biosurveillance", href: "/biosurveillance" },
  { label: "Contact", href: "/contact" },
];

/** Liens secondaires, affichés uniquement dans le pied de page. */
export const footerNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
];
