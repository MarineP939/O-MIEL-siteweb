import type { Metadata } from "next";

import { Card, CtaBand, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L’histoire du rucher O’MIEL en Guadeloupe : une apiculture artisanale, respectueuse des colonies et ancrée dans son territoire.",
};

const valeurs = [
  {
    title: "Respect de la colonie",
    text: "Pas de récolte au détriment de l’hivernage. Les réserves restent à la ruche, et la colonie passe la saison creuse avec ce qu’il lui faut.",
  },
  {
    title: "Transparence",
    text: "Chaque pot est rattaché à un site de rucher et à une période de récolte. Vous savez d’où vient ce que vous mangez.",
  },
  {
    title: "Ancrage local",
    text: "Les ruchers sont installés sur des sites guadeloupéens choisis pour leurs floraisons, en accord avec les propriétaires et les riverains.",
  },
  {
    title: "Transmission",
    text: "Former de nouveaux apiculteurs fait partie du métier. Un territoire qui compte plus de ruchers bien conduits se porte mieux.",
  },
];

const etapes = [
  {
    title: "Au rucher",
    text: "Visites régulières, suivi sanitaire, conduite adaptée au rythme des floraisons et à la saison cyclonique.",
  },
  {
    title: "À la récolte",
    text: "Les hausses sont prélevées à maturité, quand les cadres sont operculés. Rien n’est forcé.",
  },
  {
    title: "À la miellerie",
    text: "Extraction à froid, simple filtration, décantation. Aucun chauffage qui détruirait les arômes.",
  },
  {
    title: "En pot",
    text: "Mise en pot par petits lots, étiquetés par site et par récolte, au plus près de la disponibilité réelle.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une histoire de douceur, de nature et de passion."
        intro="O’MIEL est un rucher artisanal guadeloupéen. Produire un miel honnête, garder les colonies en bonne santé et transmettre ce savoir-faire : tout part de là."
      />

      <Section
        title="Le rucher"
        description="Le projet est né d’une conviction simple : un bon miel ne se fabrique pas, il se laisse faire. Le travail de l’apiculteur consiste surtout à offrir aux colonies les conditions d’un bon développement, puis à savoir s’effacer."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-8 text-nuit/75">
            En Guadeloupe, le rythme n&rsquo;est pas celui des saisons métropolitaines. Les
            floraisons se succèdent presque toute l&rsquo;année, la saison cyclonique impose ses
            contraintes, et la conduite d&rsquo;un rucher demande une attention constante. C&rsquo;est
            exigeant, et c&rsquo;est précisément ce qui donne aux miels de l&rsquo;île leur
            caractère.
          </p>
          <p className="text-base leading-8 text-nuit/75">
            {/* TODO : remplacer ce paragraphe par l'histoire réelle du rucher (année de création,
                parcours, nombre de colonies, sites d'implantation). */}
            Le rucher s&rsquo;est construit progressivement, colonie après colonie, en apprenant du
            terrain et des apiculteurs qui l&rsquo;ont précédé. Aujourd&rsquo;hui, il vit de trois
            activités complémentaires : la production de miel, la formation, et la biosurveillance
            environnementale.
          </p>
        </div>
      </Section>

      <Section className="border-y border-miel-100 bg-white/70" title="Nos valeurs">
        <div className="grid gap-6 md:grid-cols-2">
          {valeurs.map((valeur) => (
            <Card key={valeur.title}>
              <h3 className="font-title text-xl font-semibold text-nuit">{valeur.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{valeur.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Savoir-faire"
        title="De la ruche au pot"
        description="Quatre étapes, aucune raccourcie."
      >
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {etapes.map((etape, index) => (
            <li
              key={etape.title}
              className="rounded-2xl border border-miel-200/70 bg-white p-6 shadow-sm"
            >
              <span className="font-title text-3xl font-semibold text-miel-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-title text-lg font-semibold text-nuit">{etape.title}</h3>
              <p className="mt-2 text-sm leading-7 text-nuit/70">{etape.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Envie de pousser la porte du rucher ?"
        text="Les formations sont le meilleur moyen de voir concrètement comment tout cela fonctionne."
        primary={{ href: "/formations", label: "Voir les formations" }}
        secondary={{ href: "/contact", label: "Nous écrire" }}
      />
    </>
  );
}
