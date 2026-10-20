import type { Metadata } from "next";

import { Card, CtaBand, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Biosurveillance",
  description:
    "La biosurveillance environnementale par l’abeille en Guadeloupe : matrices analysables, déroulé d’une campagne et publics concernés.",
};

const matrices = [
  {
    title: "Le miel",
    text: "Intègre les floraisons du rayon de butinage sur toute une période de récolte. Une mémoire du territoire.",
  },
  {
    title: "Le pollen",
    text: "Identifie les espèces visitées et les éventuels résidus rapportés depuis les zones cultivées.",
  },
  {
    title: "La cire",
    text: "Accumule les composés lipophiles au fil des saisons. Révélatrice des expositions chroniques.",
  },
  {
    title: "Les abeilles",
    text: "Le comportement et la mortalité de la colonie signalent une anomalie avant qu’elle ne soit mesurable ailleurs.",
  },
];

const etapes = [
  {
    title: "Cadrage",
    text: "Définition de la zone d’étude, des paramètres recherchés et du nombre de stations nécessaires.",
  },
  {
    title: "Installation",
    text: "Mise en place des ruches sentinelles sur les sites retenus, avec l’accord des gestionnaires.",
  },
  {
    title: "Suivi",
    text: "Visites régulières, relevés d’activité de la colonie et prélèvements calendaires des matrices.",
  },
  {
    title: "Analyses",
    text: "Envoi des échantillons à un laboratoire accrédité, selon les paramètres définis au cadrage.",
  },
  {
    title: "Restitution",
    text: "Rapport commenté, comparaison entre stations et recommandations de suivi pour la campagne suivante.",
  },
];

const axes = [
  {
    title: "Biodiversité florale",
    text: "L’analyse pollinique des récoltes dresse l’inventaire des espèces réellement butinées autour du site, et suit son évolution d’une campagne à l’autre.",
  },
  {
    title: "Polluants",
    text: "La recherche de résidus dans les matrices de la ruche documente l’exposition du site : produits phytosanitaires, métaux, composés persistants.",
  },
];

const criteresDevis = [
  "Les analyses retenues en laboratoire : biodiversité florale, polluants, ou les deux",
  "Le nombre de ruches sentinelles installées",
  "Le nombre d’analyses réalisées dans l’année",
  "L’organisation éventuelle d’un séminaire de restitution",
  "La zone et la localisation du site à surveiller",
];

const benefices = [
  {
    title: "Un suivi de pollution tangible",
    text: "Des mesures régulières, issues d’un laboratoire, qui documentent dans la durée l’exposition réelle de votre site.",
  },
  {
    title: "Une marque employeur renforcée",
    text: "Un rucher sentinelle se visite, se raconte et se partage. C’est un engagement environnemental que vos équipes voient et comprennent.",
  },
  {
    title: "Un dialogue facilité",
    text: "Là où un tableau de mesures reste abstrait, l’abeille parle immédiatement aux riverains, aux collectivités et aux partenaires.",
  },
];

const publics = [
  "Collectivités et gestionnaires d’espaces naturels",
  "Sites industriels et installations classées",
  "Exploitations agricoles et coopératives",
  "Entreprises engagées dans une démarche environnementale",
];

export default function BiosurveillancePage() {
  return (
    <>
      <PageHero
        eyebrow="Biosurveillance"
        title="L’abeille, sentinelle de l’environnement."
        intro="Une colonie explore chaque jour plusieurs kilomètres carrés et rapporte à la ruche un échantillon de tout ce qu’elle traverse : air, eau, pollens, poussières. C’est ce qui en fait un capteur biologique d’une finesse difficile à égaler."
      />

      <Section
        title="Le principe"
        description="Là où une station de mesure donne un point, un rucher sentinelle donne une intégration : ce que la colonie ramène représente l’ensemble de sa zone de butinage, sur toute la durée du suivi."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-8 text-nuit/75">
            Concrètement, une ou plusieurs ruches sont installées sur le site à surveiller. Elles
            sont conduites comme des colonies de production, mais leurs matrices &mdash; miel,
            pollen, cire, abeilles &mdash; sont prélevées selon un calendrier défini, puis analysées
            en laboratoire.
          </p>
          <p className="text-base leading-8 text-nuit/75">
            Le résultat n&rsquo;est pas seulement une liste de mesures : c&rsquo;est un indicateur
            vivant, compréhensible par des non-spécialistes, et qui parle immédiatement aux
            riverains comme aux équipes. C&rsquo;est souvent ce qui fait la différence dans le
            dialogue autour d&rsquo;un site.
          </p>
        </div>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Matrices"
        title="Ce que l’on analyse"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {matrices.map((matrice) => (
            <Card key={matrice.title}>
              <h3 className="font-title text-lg font-semibold text-nuit">{matrice.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{matrice.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Déroulé" title="Une campagne, étape par étape">
        <ol className="space-y-4">
          {etapes.map((etape, index) => (
            <li
              key={etape.title}
              className="flex gap-5 rounded-2xl border border-miel-200/70 bg-white p-6 shadow-sm"
            >
              <span className="font-title text-2xl font-semibold text-miel-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-title text-lg font-semibold text-nuit">{etape.title}</h3>
                <p className="mt-1 text-sm leading-7 text-nuit/70">{etape.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-nuit/60">
          {/* TODO : préciser les laboratoires partenaires, les normes d'analyse appliquées et les
              références de campagnes déjà menées. */}
          La durée d&rsquo;une campagne, le nombre de stations et les paramètres analysés sont
          définis au cas par cas, en fonction de vos objectifs et de vos obligations
          réglementaires.
        </p>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Analyses"
        title="Deux axes de mesure"
        description="Selon vos objectifs, les prélèvements sont orientés vers l’un de ces axes ou vers les deux."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {axes.map((axe) => (
            <Card key={axe.title}>
              <h3 className="font-title text-xl font-semibold text-nuit">{axe.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{axe.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Bénéfices" title="Ce que le dispositif vous apporte">
        <div className="grid gap-6 md:grid-cols-3">
          {benefices.map((benefice) => (
            <Card key={benefice.title}>
              <h3 className="font-title text-lg font-semibold text-nuit">{benefice.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{benefice.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-y border-miel-100 bg-white/70" eyebrow="Tarification" title="Chaque dispositif fait l’objet d’un devis">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-base leading-8 text-nuit/75">
            Aucun forfait ne pourrait couvrir des situations aussi différentes qu&rsquo;un site
            industriel urbain et une exploitation agricole isolée. Le montant est donc construit à
            partir de votre cahier des charges, et vous est remis avant tout engagement.
          </p>
          <div className="rounded-3xl border border-miel-200/70 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-miel-600">
              Le devis dépend de
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-nuit/75">
              {criteresDevis.map((critere) => (
                <li key={critere} className="flex gap-3">
                  <span aria-hidden className="text-miel-400">
                    •
                  </span>
                  <span>{critere}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="À qui cela s’adresse">
        <ul className="grid gap-3 sm:grid-cols-2">
          {publics.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-feuille-400/50 bg-feuille-200/30 px-5 py-4 text-sm font-medium text-nuit/80"
            >
              <span aria-hidden className="text-feuille-600">
                ●
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Un projet de suivi environnemental ?"
        text="Décrivez-nous votre site et vos objectifs : nous vous proposerons un dispositif adapté."
        primary={{ href: "/contact?sujet=biosurveillance", label: "Nous exposer votre projet" }}
      />
    </>
  );
}
