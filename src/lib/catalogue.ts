/**
 * Données du catalogue et des formations.
 *
 * Volontairement séparées des composants : le jour où la boutique passe en vente
 * en ligne, ces objets deviennent la source d'un CMS ou d'une base sans toucher aux pages.
 *
 * ⚠️ Descriptions et tarifs sont des exemples — TODO : remplacer par l'offre réelle.
 */

export type Product = {
  slug: string;
  name: string;
  /** Format du contenant, ex. « Pot 250 g ». */
  format: string;
  /** Prix indicatif en euros. `null` = « sur demande ». */
  price: number | null;
  /** Période de récolte, affichée comme repère de disponibilité. */
  season: string;
  description: string;
  /** Notes de dégustation, 2 à 4 mots-clés. */
  tastingNotes: string[];
};

export const products: Product[] = [
  {
    slug: "miel-de-campeche",
    name: "Miel de campêche",
    format: "Pot 250 g",
    price: 12,
    season: "Février à mai",
    description:
      "Le miel emblématique des Antilles, récolté sur les floraisons de campêche. Sa robe claire et son parfum délicat en font une porte d’entrée idéale dans les miels guadeloupéens.",
    tastingNotes: ["Floral", "Doux", "Notes de vanille"],
  },
  {
    slug: "miel-de-mangrove",
    name: "Miel de mangrove",
    format: "Pot 250 g",
    price: 14,
    season: "Juin à septembre",
    description:
      "Récolté au plus près des palétuviers, ce miel ambré porte la signature saline et boisée du littoral. Un caractère franc, apprécié des amateurs de miels typés.",
    tastingNotes: ["Ambré", "Boisé", "Longueur en bouche"],
  },
  {
    slug: "miel-toutes-fleurs",
    name: "Miel toutes fleurs",
    format: "Pot 500 g",
    price: 20,
    season: "Toute l’année",
    description:
      "L’assemblage des floraisons successives du rucher. Un miel de tous les jours, généreux, à la douceur constante d’une récolte à l’autre.",
    tastingNotes: ["Équilibré", "Fruité", "Gourmand"],
  },
  {
    slug: "coffret-decouverte",
    name: "Coffret découverte",
    format: "3 pots de 125 g",
    price: 28,
    season: "Selon disponibilité",
    description:
      "Trois miels du rucher réunis dans un coffret prêt à offrir. La façon la plus simple de faire voyager le terroir guadeloupéen.",
    tastingNotes: ["Idée cadeau", "Dégustation comparée"],
  },
  {
    slug: "pollen-frais",
    name: "Pollen frais",
    format: "Pot 200 g",
    price: null,
    season: "Sur demande",
    description:
      "Récolté puis conservé au froid pour préserver ses qualités. Disponible en quantité limitée, selon les récoltes de la saison.",
    tastingNotes: ["Floral", "Texture fondante"],
  },
  {
    slug: "cire-brute",
    name: "Cire d’abeille brute",
    format: "Pain de 100 g",
    price: null,
    season: "Sur demande",
    description:
      "Cire filtrée issue des opercules du rucher, pour la cosmétique artisanale, les bougies ou l’entretien du bois.",
    tastingNotes: ["Naturelle", "Non blanchie"],
  },
];

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
