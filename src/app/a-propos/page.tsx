import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, Card, CtaBand, PageHero, Section } from "@/components/ui";
import { equipe } from "@/lib/equipe";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L’histoire de la SCEA Ô MIEL en Guadeloupe : vingt ans de conseil apicole, trois médailles d’or au Concours Général de Paris et une équipe au croisement de la science et du terrain.",
};

const distinctions = [
  {
    annee: "2013 · 2014 · 2015",
    titre: "Trois médailles d’or",
    detail: "au Concours Général Agricole de Paris, trois années consécutives.",
  },
  {
    annee: "2016",
    titre: "Prix d’excellence",
    detail: "et la reconnaissance de Meilleur apiculteur de France.",
  },
  {
    annee: "2022 – 2025",
    titre: "Thèse de doctorat",
    detail: "sur la caractérisation des miels, menée en parallèle de l’activité.",
  },
];

const missions = [
  {
    title: "Former et accompagner",
    text: "Transmettre le métier aux apiculteurs d’hier et de demain, et les suivre dans la durée, du premier essaim au développement de leur exploitation.",
  },
  {
    title: "Sensibiliser les professionnels",
    text: "Donner aux agriculteurs et aux entreprises des outils concrets pour mesurer leur impact, à commencer par la biosurveillance apicole.",
  },
  {
    title: "Éveiller les consciences",
    text: "Porter un regard neuf sur l’apiculture, le rôle crucial de la pollinisation, la protection de l’environnement et l’importance d’une alimentation saine issue de notre terroir.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="L’histoire d’une passion devenue vocation."
        intro="Tout a commencé en 2004, par un stage de DESS à l’Association des apiculteurs de Guadeloupe. Ce qui ne devait être qu’une étape estudiantine est devenu une vocation de vie."
      />

      <Section title="Le parcours">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-8 text-nuit/75">
            <p>
              Cette année-là, Benoît FOUCAN-PÉRAFIDE pousse les portes de l&rsquo;APIGUA,
              l&rsquo;Association des apiculteurs de Guadeloupe. Il n&rsquo;a, depuis, jamais quitté
              cet univers. Pendant plus de vingt ans, il y exerce comme ingénieur conseiller, au
              contact quotidien des exploitations de l&rsquo;île.
            </p>
            <p>
              Fort de cette expérience, il s&rsquo;entoure de trois collaborateurs &mdash; Maurice
              CLAIRY, Jean MULARD et Mathilde PRINTEMPS &mdash; pour fonder la SCEA Ô MIEL.
            </p>
          </div>
          <div className="space-y-6 text-base leading-8 text-nuit/75">
            <p>
              Porté par un amour indéfectible pour les abeilles et un profond respect de
              l&rsquo;environnement, il développe l&rsquo;entreprise avec un moteur constant : allier
              la science, la nature et le terrain.
            </p>
            <p>
              C&rsquo;est dans cette logique qu&rsquo;il mène, entre 2022 et 2025, une thèse sur la
              caractérisation des miels, guidé par une ambition qui ne l&rsquo;a jamais quitté :
              contribuer au développement durable de son île, la Guadeloupe.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {distinctions.map((item) => (
            <li
              key={item.titre}
              className="rounded-2xl border border-miel-200/70 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-feuille-600">
                {item.annee}
              </p>
              <h3 className="mt-3 font-title text-xl font-semibold text-nuit">{item.titre}</h3>
              <p className="mt-2 text-sm leading-7 text-nuit/70">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="L’équipe"
        title="Celles et ceux qui font O’MIEL"
        description="Une équipe au croisement de la recherche scientifique, de la technique apicole et du terrain."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {equipe.map((membre) => (
            <Card key={membre.slug}>
              {membre.image ? (
                <Image
                  src={membre.image.src}
                  alt={membre.image.alt}
                  width={400}
                  height={400}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <span
                  aria-hidden
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-miel-200 to-feuille-200 font-title text-2xl font-semibold text-miel-700"
                >
                  {membre.initials}
                </span>
              )}

              <h3 className="mt-5 font-title text-xl font-semibold text-nuit">{membre.name}</h3>
              <p className="mt-1 text-sm font-semibold text-miel-700">{membre.role}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-nuit/40">
                {membre.diplome}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-nuit/70">{membre.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Nos valeurs"
        title="Bien plus qu’une production de miel"
        description="Aujourd’hui, O’MIEL est le reflet fidèle des valeurs de son dirigeant. L’entreprise s’engage sur tous les fronts pour l’avenir de la filière et de l’écosystème guadeloupéen."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {missions.map((mission) => (
            <Card key={mission.title}>
              <h3 className="font-title text-xl font-semibold text-nuit">{mission.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{mission.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-y border-miel-100 bg-white/70">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-miel-600">
              La boutique
            </p>
            <h2 className="mt-3 font-title text-3xl font-semibold text-nuit sm:text-4xl">
              Du savoir-faire à votre assiette
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-nuit/75">
              <p>
                Parce que notre travail de recherche et notre amour de la terre ont un goût unique,
                O&rsquo;MIEL vous invite à prolonger l&rsquo;expérience à travers sa boutique.
              </p>
              <p>
                Vous y trouverez une sélection authentique de produits du terroir, issus de notre
                récolte et de notre savoir-faire. Chaque pot de miel reflète la richesse florale de
                la Guadeloupe et garantit qualité, traçabilité et respect de la nature. En achetant
                nos produits, vous soutenez une apiculture locale, rigoureuse et engagée.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/boutique">Découvrir la boutique</ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-miel-200/70 bg-white shadow-[0_20px_60px_-24px_rgba(116,85,47,0.45)]">
            <Image
              src="/produits/coffret-caramiel-miel.jpg"
              alt="Coffret cadeau O’MIEL réunissant un bocal de miel et un bocal de Caramiel"
              width={1196}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Engagement" title="Acteur engagé pour l’avenir">
        <p className="max-w-3xl text-base leading-8 text-nuit/75">
          Parce que les défis d&rsquo;aujourd&rsquo;hui demandent une action collective, O&rsquo;MIEL
          reste prestataire et pleinement actif au sein de l&rsquo;APIGUA, l&rsquo;Association des
          apiculteurs de Guadeloupe. Notre objectif permanent : faire évoluer et adapter
          l&rsquo;apiculture aux enjeux écologiques et économiques contemporains, pour protéger nos
          abeilles, valoriser notre patrimoine naturel et régaler vos papilles.
        </p>
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
