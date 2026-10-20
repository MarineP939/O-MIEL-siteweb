import type { Metadata } from "next";

import { ButtonLink, Card, CtaBand, PageHero, Section } from "@/components/ui";
import { accompagnement } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Accompagnement",
  description:
    "Conseil et montage de dossiers FEADER / FEDER en Guadeloupe : un ingénieur conseil apicole vous accompagne de la définition du projet jusqu’au versement de la subvention.",
};

export default function AccompagnementPage() {
  const { tarif } = accompagnement;

  return (
    <>
      <PageHero
        eyebrow="Accompagnement"
        title="Monter votre dossier de financement, sans y laisser vos saisons."
        intro="Les aides européennes existent, mais leurs dossiers découragent souvent ceux à qui elles sont destinées. Nous les montons avec vous, de la définition du besoin jusqu’au versement."
      />

      <Section title={accompagnement.title} description={accompagnement.intro}>
        <div className="grid gap-6 md:grid-cols-2">
          {accompagnement.dispositifs.map((dispositif) => (
            <Card key={dispositif.sigle}>
              <p className="font-title text-3xl font-semibold text-miel-400">{dispositif.sigle}</p>
              <h3 className="mt-3 font-title text-lg font-semibold text-nuit">{dispositif.nom}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{dispositif.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Déroulé"
        title="Comment nous travaillons"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ol className="space-y-4">
            {accompagnement.etapes.map((etape, index) => (
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

          <aside className="flex flex-col rounded-3xl bg-gradient-to-br from-miel-100 via-creme to-feuille-200/50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-miel-700">
              Tarification
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-nuit/50">Frais de dossier</dt>
                <dd className="mt-1 font-title text-2xl font-semibold text-nuit">
                  {tarif.fraisDossier} €
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-nuit/50">Puis, en cas de succès</dt>
                <dd className="mt-1 leading-7 text-nuit/75">{tarif.commission}</dd>
              </div>
              <div>
                <dt className="font-semibold text-nuit/50">Plafond</dt>
                <dd className="mt-1 leading-7 text-nuit/75">
                  {tarif.plafond.toLocaleString("fr-FR")} €
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs leading-6 text-nuit/60">
              Les accompagnements exceptionnels, hors dispositifs FEADER et FEDER, font
              l&rsquo;objet d&rsquo;un tarif établi au cas par cas.
            </p>
            <div className="mt-auto pt-8">
              <ButtonLink href="/contact?sujet=accompagnement">Parler de votre projet</ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      <Section title="À qui cela s’adresse">
        <ul className="grid gap-3 sm:grid-cols-2">
          {accompagnement.publics.map((item) => (
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

        <p className="mt-8 max-w-3xl text-sm leading-7 text-nuit/60">
          {/* TODO : préciser les dispositifs réellement couverts, les guichets concernés et,
              si possible, quelques références de dossiers aboutis. */}
          Les dispositifs, les guichets et les calendriers d&rsquo;appels à projets évoluent
          régulièrement. Nous faisons le point avec vous sur ce qui est ouvert au moment de votre
          demande.
        </p>
      </Section>

      <CtaBand
        title="Un projet d’investissement en tête ?"
        text="Décrivez-nous votre situation : nous vous dirons rapidement si un dispositif peut le financer."
        primary={{ href: "/contact?sujet=accompagnement", label: "Nous exposer votre projet" }}
        secondary={{ href: "/formations", label: "Voir les formations" }}
      />
    </>
  );
}
