/**
 * L'équipe de la SCEA Ô MIEL.
 *
 * Source : document fourni par l'entreprise.
 * TODO : les portraits n'ont pas été transmis. Tant qu'`image` vaut `undefined`,
 * la page affiche les initiales du membre dans un médaillon aux couleurs du site.
 */

export type Membre = {
  slug: string;
  /** Prénom et nom, tels qu'ils doivent apparaître. */
  name: string;
  /** Initiales affichées en l'absence de portrait. */
  initials: string;
  role: string;
  /** Diplôme ou qualification mise en avant. */
  diplome: string;
  bio: string;
  image?: { src: string; alt: string };
};

export const equipe: Membre[] = [
  {
    slug: "benoit-foucan-perafide",
    name: "Benoît FOUCAN-PÉRAFIDE",
    initials: "BF",
    role: "Gérant & Ingénieur conseil apicole",
    diplome: "Docteur en caractérisation des miels de Guadeloupe",
    bio: "Passionné par l’apiculture et la richesse de la biodiversité guadeloupéenne, Benoît dirige la SCEA Ô MIEL avec une double expertise, scientifique et de terrain. Docteur en caractérisation des miels, il met ses compétences d’ingénieur conseil au service du développement apicole territorial. Également apiculteur actif, il veille quotidiennement sur ses propres ruches, conjuguant savoir-faire artisanal, rigueur scientifique et engagement pour la qualité des produits de la ruche.",
  },
  {
    slug: "sabine-caniquitte",
    name: "Sabine CANIQUITTE",
    initials: "SC",
    role: "Ingénieure apicole",
    diplome: "Docteur en sciences naturelles",
    bio: "Fortement ancrée dans la recherche et l’étude du milieu naturel, Sabine apporte à la SCEA Ô MIEL une expertise scientifique approfondie en sciences naturelles. En tant qu’ingénieure apicole, elle veille à la santé des colonies, à l’analyse des ressources mellifères et au développement de pratiques apicoles durables, garantissant un accompagnement technique d’excellence au sein de la structure.",
  },
  {
    slug: "marine-pajamandy",
    name: "Marine PAJAMANDY",
    initials: "MP",
    role: "Technicienne apicole et de biosurveillance",
    diplome: "Licence en agronomie & Master en management des affaires",
    bio: "À la croisée de la technique et de la gestion, Marine assure le suivi opérationnel et technique des activités apicoles. Grâce à sa formation solide en agronomie et à ses compétences en management des affaires, elle contribue à la bonne organisation de la SCEA Ô MIEL, à la conduite des projets sur le terrain et à la valorisation commerciale des produits apicoles.",
  },
];
