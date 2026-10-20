/**
 * Données du catalogue, des prestations et des formations.
 *
 * Volontairement séparées des composants : le jour où la boutique passe en vente
 * en ligne, ces objets deviennent la source d'un CMS ou d'une base sans toucher aux pages.
 *
 * Sources :
 * - « Site internet Orlane info a fournir » (variétés de miel, Kassav', tarifs, prestations) ;
 * - « Support commercial O'MIEL 2026 » (gammes, usages recommandés, remise, coffrets,
 *   et les formulations commerciales reprises ici).
 */

/* ------------------------------------------------------------------ */
/* Arguments de marque                                                 */
/* ------------------------------------------------------------------ */

/** Encart d'ouverture de la boutique, repris du support commercial. */
export const excellence = {
  distinction: "3 × or",
  distinctionDetail: "Concours Général de Paris",
  distinctionAnnee: "Prix d’Excellence 2016",
  title: "L’excellence de l’apiculture guadeloupéenne",
  text: "Fondée par Benoît FOUCAN-PÉRAFIDE, ingénieur conseiller apicole fort de plus de vingt ans d’expérience, la SCEA Ô MIEL allie la passion du terroir, l’exigence scientifique et le respect des abeilles. Nos produits incarnent la richesse florale unique de la Guadeloupe.",
} as const;

/** Remise quantitative annoncée sur le support commercial. */
export const remise = {
  taux: 10,
  condition: "dès 10 produits achetés dans la même gamme",
  mention: "Remise unique, appliquée automatiquement à la commande.",
} as const;

/** Encart de clôture de la boutique. */
export const engagement = {
  title: "Notre engagement pour le terroir guadeloupéen",
  text: "Chaque pot soutient une apiculture locale rigoureuse, la biosurveillance de nos écosystèmes et l’accompagnement des apiculteurs de demain.",
} as const;

/* ------------------------------------------------------------------ */
/* Gammes de miel de Guadeloupe                                        */
/* ------------------------------------------------------------------ */

export type FormatMiel = {
  key: string;
  label: string;
  /** Usage recommandé, repris du tableau du support commercial. */
  usage: string;
  /** Prix en euros, identique quelle que soit la variété. */
  price: number;
};

/** Grille tarifaire commune à tous les miels, du plus petit format au plus grand. */
export const formatsMiel: FormatMiel[] = [
  { key: "125g", label: "Bocal de miel 125 g", usage: "Découverte", price: 7 },
  { key: "250g", label: "Bocal de miel 250 g", usage: "Format individuel standard", price: 10 },
  { key: "500g", label: "Bocal de miel 500 g", usage: "Format familial gourmand", price: 14 },
  { key: "50cl", label: "Flacon de miel ½ litre", usage: "Consommation régulière", price: 18 },
  { key: "1l", label: "Flacon de miel 1 litre", usage: "Grand format éco-responsable", price: 30 },
];

export type Miel = {
  slug: string;
  name: string;
  /** Dénomination portée sur l'étiquette. */
  denomination: string;
  description: string;
  /** Notes de dégustation, 2 à 4 mots-clés. */
  tastingNotes: string[];
  /** Clés de `formatsMiel` proposées pour cette variété. */
  formats: string[];
};

/**
 * ⚠️ Les descriptions et notes de dégustation ci-dessous sont rédactionnelles :
 * ni le document initial ni le support commercial ne détaillaient les variétés.
 * TODO : les faire valider ou réécrire par l'équipe avant publication.
 */
export const miels: Miel[] = [
  {
    slug: "miel-de-foret",
    name: "Miel de forêt",
    denomination: "Miel de forêt",
    description:
      "Récolté sur les floraisons spontanées des zones boisées de l’île. Un miel de caractère, qui porte la diversité du couvert forestier guadeloupéen plutôt que la signature d’une seule fleur.",
    tastingNotes: ["Ambré", "Boisé", "Corsé"],
    formats: ["125g", "250g", "50cl", "1l"],
  },
  {
    slug: "miel-tandakayou",
    name: "Tandakayou",
    denomination: "Miel à dominance tandakayou",
    description:
      "Issu de l’une des floraisons les plus recherchées du territoire. Un miel typé, à la personnalité affirmée, que les amateurs reconnaissent dès la première cuillère.",
    tastingNotes: ["Typé", "Ambré", "Longueur en bouche"],
    formats: ["125g", "250g", "500g", "50cl", "1l"],
  },
  {
    slug: "miel-surette",
    name: "Surette",
    denomination: "Miel à dominance surette",
    description:
      "Un miel franc et vif, dont la pointe acidulée tranche avec la douceur attendue. Il accompagne aussi bien les fromages que les préparations salées.",
    tastingNotes: ["Fruité", "Acidulé", "Franc"],
    formats: ["125g", "250g", "500g", "50cl", "1l"],
  },
  {
    slug: "miel-campeche",
    name: "Campêche",
    denomination: "Miel à dominance campêche",
    description:
      "Le miel emblématique des Antilles. Sa robe claire et son parfum délicat en font la porte d’entrée idéale dans les miels guadeloupéens.",
    tastingNotes: ["Clair", "Floral", "Doux"],
    formats: ["125g", "250g", "500g", "50cl", "1l"],
  },
];

/* ------------------------------------------------------------------ */
/* Produits                                                            */
/* ------------------------------------------------------------------ */

export type Tarif = {
  label: string;
  /** Prix en euros. `null` = « sur devis ». */
  price: number | null;
};

export type Produit = {
  slug: string;
  name: string;
  /** Sous-titre repris de l'étiquette, le cas échéant. */
  subtitle?: string;
  description: string;
  tarifs: Tarif[];
  /** Photo du produit, absente pour les préparations non photographiées. */
  image?: { src: string; alt: string };
};

/** Préparations traditionnelles vendues aux côtés des miels de récolte. */
export const autourDuMiel: Produit[] = [
  {
    slug: "kassav-miel",
    name: "Kassav’ & miel",
    description:
      "La rencontre de deux savoir-faire du terroir : la galette de manioc traditionnelle et le miel du rucher, réunis dans un même bocal.",
    tarifs: [{ label: "Bocal 250 g", price: 10 }],
  },
  {
    slug: "kassav-de-miel",
    name: "Kassav’ de miel",
    description:
      "Préparée selon la période de l’année, uniquement sur commande. Une spécialité à réserver à l’avance, en quantité limitée.",
    tarifs: [{ label: "Sur commande uniquement", price: 8 }],
  },
];

/** Gamme « Nos spécialités gourmandes » du support commercial. */
export const specialitesGourmandes: Produit[] = [
  {
    slug: "caramiel",
    name: "Caramiel",
    subtitle: "Caramel au beurre salé et au miel",
    description:
      "Un caramel au beurre salé onctueux, préparé au miel local. Une gourmandise artisanale à tartiner, à napper ou à déguster à la petite cuillère.",
    tarifs: [
      { label: "Bocal 125 g", price: 7 },
      { label: "Bocal 250 g", price: 10 },
    ],
    image: {
      src: "/produits/caramiel.jpg",
      alt: "Bocal de Caramiel, caramel au beurre salé au miel de Guadeloupe de la SCEA Ô MIEL",
    },
  },
  {
    slug: "miel-de-gingembre",
    name: "Miel gingembre",
    subtitle: "Miel de gingembre candi",
    description:
      "L’alliance du miel de Guadeloupe et des éclats de gingembre confit : le piquant de la racine, adouci par la rondeur du miel. Un régal pour les papilles.",
    tarifs: [{ label: "Bocal 250 g", price: 12 }],
    image: {
      src: "/produits/miel-gingembre.jpg",
      alt: "Bocal de miel de gingembre candi de Guadeloupe O’MIEL, 250 g",
    },
  },
  {
    slug: "pain-d-epices",
    name: "Pain d’épices artisanal",
    subtitle: "Pain d’épices au miel",
    description:
      "Une recette traditionnelle, riche en miel et parfumée aux épices locales. Moelleux, cuit par petites fournées, en format individuel ou familial.",
    tarifs: [
      { label: "Format individuel 100 g", price: 3 },
      { label: "Format familial 300 g", price: 8 },
    ],
    image: {
      src: "/produits/pain-d-epices.jpg",
      alt: "Pains d’épices artisanaux au miel de Guadeloupe, formats individuel et familial",
    },
  },
];

/**
 * Gamme « Élixirs & bien-être de la ruche » du support commercial.
 *
 * ⚠️ Le support décrivait la propolis comme un « élixir aux vertus protectrices et
 * purifiantes ». Ces allégations de santé sont encadrées par le règlement (CE) 1924/2006
 * et ne figurent pas sur la liste des allégations autorisées : elles ont été retirées.
 */
export const elixirs: Produit[] = [
  {
    slug: "hydromel",
    name: "Hydromel",
    subtitle: "Boisson fermentée au miel",
    description:
      "La plus ancienne des boissons au miel, issue de la fermentation naturelle de notre miel pur. Douce et délicate, produite en très petite quantité.",
    tarifs: [{ label: "Bouteille ½ litre", price: 14 }],
    image: {
      src: "/produits/hydromel.jpg",
      alt: "Bouteille d’hydromel O’MIEL de ½ litre, élaborée en Guadeloupe",
    },
  },
  {
    slug: "propolis",
    name: "Extrait de propolis",
    subtitle: "Extrait alcoolique de propolis",
    description:
      "L’élixir naturel de la ruche : la propolis récoltée au rucher, mise en extrait alcoolique. Proposée en flacon compte-gouttes ou en spray.",
    tarifs: [{ label: "Flacon 30 ml", price: 14 }],
    image: {
      src: "/produits/propolis.jpg",
      alt: "Flacons d’extrait alcoolique de propolis O’MIEL, en compte-gouttes et en spray",
    },
  },
];

/** Service de coffrets sur-mesure, mis en avant sur le support commercial. */
export const coffrets = {
  title: "Service coffrets personnalisés",
  text: "Créez votre assortiment sur-mesure pour vos cadeaux d’entreprise, vos mariages et vos événements spéciaux. Miels, Caramiel, spécialités : composez selon vos envies.",
  tarif: "Sur devis",
  image: {
    src: "/produits/coffret-caramiel-miel.jpg",
    alt: "Coffret cadeau réunissant un bocal de miel de Guadeloupe et un bocal de Caramiel",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Formations                                                          */
/* ------------------------------------------------------------------ */

export type Formation = {
  slug: string;
  title: string;
  /** Public visé, en une ligne. */
  audience: string;
  duration: string;
  /** Format pédagogique, ex. « Journée au rucher ». */
  format: string;
  /** Prix indicatif en euros. `null` = « sur devis ». */
  price: number | null;
  description: string;
  /** Objectifs pédagogiques, affichés en liste. */
  objectives: string[];
};

/**
 * ⚠️ Le document fourni renvoyait le détail des formations à « un document à part »,
 * qui n'a pas encore été transmis.
 * TODO : remplacer intitulés, durées et tarifs ci-dessous par le catalogue réel.
 */
export const formations: Formation[] = [
  {
    slug: "decouverte-apiculture",
    title: "Découverte de l’apiculture",
    audience: "Curieux et futurs apiculteurs, sans prérequis",
    duration: "1 journée",
    format: "Théorie le matin, rucher l’après-midi",
    price: 120,
    description:
      "Une première immersion complète : comprendre la colonie, manipuler en sécurité, et repartir avec une idée claire de ce qu’implique la conduite d’un rucher sous climat tropical.",
    objectives: [
      "Identifier les castes et le cycle de la colonie",
      "Ouvrir une ruche et lire un cadre",
      "Connaître le matériel indispensable et son coût réel",
    ],
  },
  {
    slug: "conduite-de-rucher",
    title: "Conduite de rucher en milieu tropical",
    audience: "Apiculteurs débutants ayant déjà une ou deux ruches",
    duration: "3 jours",
    format: "Sessions au rucher, en petit groupe",
    price: 480,
    description:
      "Le cycle annuel appliqué à la Guadeloupe : gérer les floraisons, anticiper l’essaimage, conduire les récoltes et traverser la saison cyclonique sans perdre ses colonies.",
    objectives: [
      "Construire un calendrier de conduite adapté aux floraisons locales",
      "Prévenir et gérer l’essaimage",
      "Sécuriser le rucher avant la saison cyclonique",
    ],
  },
  {
    slug: "sante-de-la-colonie",
    title: "Santé de la colonie et bonnes pratiques",
    audience: "Apiculteurs en activité",
    duration: "2 jours",
    format: "Rucher et travaux pratiques",
    price: 320,
    description:
      "Reconnaître les signes d’alerte avant qu’ils ne coûtent une colonie : maladies, prédateurs, carences. Une approche préventive, fondée sur l’observation régulière.",
    objectives: [
      "Diagnostiquer l’état sanitaire d’une colonie",
      "Mettre en place un suivi écrit du rucher",
      "Appliquer les bonnes pratiques d’hygiène du matériel",
    ],
  },
  {
    slug: "formation-sur-mesure",
    title: "Intervention sur mesure",
    audience: "Écoles, associations, collectivités, entreprises",
    duration: "De 2 heures à plusieurs jours",
    format: "Sur votre site ou au rucher",
    price: null,
    description:
      "Sensibilisation au rôle des pollinisateurs, animation autour d’une ruche pédagogique ou accompagnement d’un projet de rucher. Le contenu est construit avec vous.",
    objectives: [
      "Adapter le propos au public et à la durée disponible",
      "Prévoir le matériel et les conditions de sécurité",
      "Laisser un support de suivi à l’équipe",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Conseil et montage de dossiers de financement                       */
/* ------------------------------------------------------------------ */

/** Prestation d'accompagnement aux dispositifs de financement agricole. */
export const accompagnement = {
  title: "Conseil et montage de dossiers FEADER / FEDER",
  intro:
    "Monter un dossier de subvention européenne demande du temps, de la méthode et une bonne connaissance des dispositifs. Fort de plus de vingt ans de conseil apicole, O’MIEL accompagne les porteurs de projet de la définition du besoin jusqu’au versement de l’aide.",
  dispositifs: [
    {
      sigle: "FEADER",
      nom: "Fonds européen agricole pour le développement rural",
      text: "Le fonds qui soutient les investissements des exploitations agricoles, la modernisation du matériel et l’installation des nouveaux exploitants.",
    },
    {
      sigle: "FEDER",
      nom: "Fonds européen de développement régional",
      text: "Le fonds orienté vers le développement économique des territoires : équipements, innovation, transition environnementale.",
    },
  ],
  publics: [
    "Apiculteurs en installation ou en développement",
    "Exploitations agricoles et coopératives",
    "Porteurs de projet en diversification",
    "Structures collectives de la filière",
  ],
  etapes: [
    {
      title: "Diagnostic du projet",
      text: "Analyse de votre situation, de vos investissements envisagés et des dispositifs auxquels vous êtes réellement éligible.",
    },
    {
      title: "Constitution du dossier",
      text: "Rédaction, assemblage des pièces justificatives et dépôt auprès du guichet compétent, dans les délais des appels à projets.",
    },
    {
      title: "Suivi jusqu’au versement",
      text: "Réponses aux demandes complémentaires de l’instructeur et accompagnement sur les pièces de paiement.",
    },
  ],
  /** TODO : confirmer que le plafond de 10 000 € porte bien sur la commission de 5 %. */
  tarif: {
    fraisDossier: 150,
    commission: "5 % de la subvention effectivement perçue",
    plafond: 10000,
  },
} as const;
