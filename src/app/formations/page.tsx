import type { Metadata } from "next";

import { ButtonLink, Card, CtaBand, PageHero, Section } from "@/components/ui";
import { formations } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Formations à l’apiculture en Guadeloupe : découverte, conduite de rucher en milieu tropical, santé de la colonie et interventions sur mesure.",
};

const modalites = [
  {
    title: "En petit groupe",
    text: "Six participants maximum au rucher, pour que chacun manipule réellement plutôt que de regarder.",
  },
  {
    title: "Matériel fourni",
    text: "Vareuse, gants et outils sont prêtés pendant la session. Prévoyez des chaussures fermées et des vêtements clairs.",
  },
  {
    title: "Sur le terrain",
    text: "La théorie sert à préparer l’ouverture des ruches, pas à remplir une journée de salle.",
  },
];

export default function FormationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Formations"
        title="Apprendre l’apiculture, les mains dans la ruche."
        intro="Des sessions construites pour le contexte guadeloupéen : floraisons locales, saison cyclonique, pression sanitaire spécifique. On y vient pour repartir capable de conduire un rucher."
      />

      <Section title="Le catalogue">
        <div className="grid gap-6 lg:grid-cols-2">
          {formations.map((formation) => (
            <Card key={formation.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-title text-2xl font-semibold text-nuit">{formation.title}</h2>
                <p className="rounded-full bg-miel-100 px-3 py-1 text-sm font-semibold text-miel-700">
                  {formation.price !== null ? `${formation.price} €` : "Sur devis"}
                </p>
              </div>

              <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm text-nuit/70 sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-nuit/50">Durée</dt>
                  <dd>{formation.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-nuit/50">Format</dt>
                  <dd>{formation.format}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-nuit/50">Public</dt>
                  <dd>{formation.audience}</dd>
                </div>
              </dl>

              <p className="mt-4 text-sm leading-7 text-nuit/70">{formation.description}</p>

              <div className="mt-5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-feuille-600">
                  Objectifs
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-nuit/70">
                  {formation.objectives.map((objective) => (
                    <li key={objective} className="flex gap-2">
                      <span aria-hidden className="text-miel-400">
                        •
                      </span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <ButtonLink
                  href={`/contact?sujet=formation&formation=${formation.slug}`}
                  variant="secondary"
                >
                  Demander une date
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Modalités"
        title="Comment ça se passe"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {modalites.map((item) => (
            <Card key={item.title}>
              <h3 className="font-title text-lg font-semibold text-nuit">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{item.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-nuit/60">
          {/* TODO : préciser le calendrier réel, les conditions d'annulation et, le cas échéant,
              le statut de la structure vis-à-vis de la formation professionnelle (Qualiopi, NDA). */}
          Les dates sont ouvertes au fil des saisons et communiquées sur demande. Pour les groupes
          constitués, une session dédiée peut être organisée à la date qui vous arrange.
        </p>
      </Section>

      <CtaBand
        title="Une question avant de vous inscrire ?"
        text="Dites-nous votre niveau et ce que vous cherchez : nous vous orienterons vers la bonne session."
        primary={{ href: "/contact", label: "Poser une question" }}
      />
    </>
  );
}
