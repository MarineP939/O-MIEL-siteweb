import Image from "next/image";
import Link from "next/link";

import { ButtonLink, Card, Container, CtaBand, Section } from "@/components/ui";
import { formatsMiel, formations, miels, specialitesGourmandes } from "@/lib/catalogue";

const highlights = [
  {
    title: "Un savoir-faire primé",
    text: "Trois médailles d’or au Concours Général Agricole de Paris et un Prix d’excellence venu saluer la constance de nos récoltes.",
  },
  {
    title: "Terroir guadeloupéen",
    text: "Forêt, tandakayou, surette, campêche : chaque miel porte la signature florale de son site de butinage.",
  },
  {
    title: "Science et terrain",
    text: "Vingt ans de conseil apicole et une thèse sur la caractérisation des miels, mis au service des apiculteurs et des entreprises.",
  },
];

export default function HomePage() {
  const prixMini = Math.min(...formatsMiel.map((format) => format.price));

  return (
    <>
      <section className="bg-[radial-gradient(circle_at_top_left,var(--color-miel-100),transparent_55%)] py-10 sm:py-14">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-miel-200 bg-miel-100 px-4 py-2 text-sm font-medium text-miel-700">
                Apiculture artisanale en Guadeloupe
              </span>
              <div className="space-y-5">
                <h1 className="font-title text-4xl font-semibold tracking-tight text-nuit sm:text-5xl lg:text-6xl">
                  Le goût du terroir, dans un miel d&rsquo;exception.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-nuit/70">
                  La SCEA Ô MIEL met à l&rsquo;honneur un savoir-faire authentique, des fleurs
                  locales et un miel d&rsquo;une pureté remarquable. Nous produisons, nous formons,
                  et nous mettons l&rsquo;abeille au service de la surveillance de notre
                  environnement.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/boutique">Découvrir nos miels</ButtonLink>
                <ButtonLink href="/formations" variant="secondary">
                  Voir les formations
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-3xl border border-miel-200/70 bg-white/80 p-8 shadow-[0_20px_60px_-24px_rgba(116,85,47,0.45)] backdrop-blur">
              <div className="flex justify-center">
                <Image
                  src="/Logo-o-miel.png"
                  alt="Logo Ô Miel Guadeloupe"
                  width={305}
                  height={344}
                  priority
                  className="h-40 w-auto object-contain"
                />
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-miel-100 via-creme to-feuille-200/50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-miel-700">
                  Notre promesse
                </p>
                <h2 className="mt-3 font-title text-2xl font-semibold text-nuit">
                  Un miel pur, doux et généreux.
                </h2>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-nuit/75">
                  <li>• Récolte méticuleuse et traçabilité par site de rucher</li>
                  <li>• Médaillé d’or au Concours Général Agricole de Paris</li>
                  <li>• Présentation soignée pour vos cadeaux et vos tables</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-y border-miel-100 bg-white/70">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <h2 className="font-title text-xl font-semibold text-nuit">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Les miels"
        title="Quatre terroirs, cinq formats"
        description={`Du bocal de 125 g à la bouteille d’un litre, le tarif dépend du contenant et non de la variété. À partir de ${prixMini} €.`}
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {miels.map((miel) => (
            <li key={miel.slug}>
              {/* La carte entière est le lien : on arrive directement sur la variété en boutique. */}
              <Link
                href={`/boutique#${miel.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-miel-200/70 bg-white p-6 shadow-sm transition hover:border-miel-400 hover:shadow-md"
              >
                <h3 className="font-title text-xl font-semibold text-nuit transition group-hover:text-miel-700">
                  {miel.name}
                </h3>
                {miel.denomination !== miel.name ? (
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-nuit/40">
                    {miel.denomination}
                  </p>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {miel.tastingNotes.map((note) => (
                    <li
                      key={note}
                      className="rounded-full border border-feuille-400/60 bg-feuille-200/40 px-3 py-1 text-xs font-medium text-feuille-700"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-miel-600">
                  Voir en boutique
                  <span aria-hidden className="ml-1 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/boutique" variant="secondary">
            Voir tout le catalogue
          </ButtonLink>
        </div>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Savoir-faire artisanal"
        title="Nos spécialités gourmandes"
        description="Caramiel, miel gingembre et pain d’épices, fabriqués sur commande. Et, à côté, les élixirs de la ruche : hydromel, extrait de propolis et coffrets sur-mesure."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {specialitesGourmandes.map((produit) => (
            /* La carte entière est le lien : on arrive directement sur le produit en boutique. */
            <Link
              key={produit.slug}
              href={`/boutique#${produit.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-miel-200/70 bg-white shadow-sm transition hover:border-miel-400 hover:shadow-md"
            >
              {produit.image ? (
                <Image
                  src={produit.image.src}
                  alt={produit.image.alt}
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-title text-xl font-semibold text-nuit transition group-hover:text-miel-700">
                  {produit.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-nuit/70">{produit.description}</p>
                <span className="pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-miel-600">
                  Voir en boutique
                  <span aria-hidden className="ml-1 inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/boutique" variant="secondary">
            Découvrir la boutique
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Formations & accompagnement"
        title="Transmettre le métier, et aider à le financer"
        description="Des sessions en petit groupe au rucher, pensées pour le climat et les floraisons de la Guadeloupe. Et un accompagnement au montage des dossiers FEADER et FEDER."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {formations.slice(0, 4).map((formation) => (
            <li
              key={formation.slug}
              className="rounded-2xl border border-miel-200/70 bg-creme px-5 py-4"
            >
              <p className="font-semibold text-nuit">{formation.title}</p>
              <p className="mt-1 text-sm text-nuit/60">
                {formation.duration} · {formation.audience}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/formations" variant="secondary">
            Détail des formations
          </ButtonLink>
          <ButtonLink href="/accompagnement" variant="secondary">
            Financer votre projet
          </ButtonLink>
        </div>
      </Section>

      <Section
        className="border-t border-miel-100 bg-white/70"
        eyebrow="Biosurveillance"
        title="L’abeille, sentinelle de l’environnement"
        description="En analysant ce que les colonies rapportent à la ruche, on obtient une lecture fine de la biodiversité florale et des polluants sur un rayon de plusieurs kilomètres. Un dispositif qui sert autant votre suivi environnemental que votre marque employeur."
      >
        <ButtonLink href="/biosurveillance" variant="secondary">
          Comprendre la démarche
        </ButtonLink>
      </Section>

      <CtaBand
        title="Prêt à goûter à l’authenticité ?"
        text="Commandes, formations, projets de biosurveillance : écrivez-nous, nous répondons sous quelques jours."
        primary={{ href: "/contact", label: "Nous contacter" }}
        secondary={{ href: "/a-propos", label: "Découvrir l’histoire" }}
      />
    </>
  );
}
