import Image from "next/image";

import { ButtonLink, Card, Container, CtaBand, Section } from "@/components/ui";
import { formations, products } from "@/lib/catalogue";

const highlights = [
  {
    title: "Miel artisanal",
    text: "Des récoltes soignées, extraites à froid et mises en pot sans transformation inutile.",
  },
  {
    title: "Terroir guadeloupéen",
    text: "Campêche, mangrove, floraisons de bois : chaque miel porte la signature de son site de butinage.",
  },
  {
    title: "Transmission",
    text: "Des formations au rucher pour celles et ceux qui veulent apprendre le métier, pas seulement le regarder.",
  },
];

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="bg-[radial-gradient(circle_at_top_left,var(--color-miel-100),transparent_55%)] py-16 sm:py-24">
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
                  O&rsquo;MIEL met à l&rsquo;honneur un savoir-faire authentique, des fleurs locales
                  et un miel d&rsquo;une pureté remarquable. Nous produisons, nous transmettons, et
                  nous mettons l&rsquo;abeille au service de la surveillance de notre environnement.
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
                  alt="Logo O’MIEL Guadeloupe"
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
                  <li>• Goût naturel, parfum floral et notes délicates</li>
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
        eyebrow="Boutique"
        title="Nos miels du moment"
        description="Trois récoltes représentatives du rucher. Le catalogue complet, avec les formats et les disponibilités, se trouve sur la page boutique."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <Card key={product.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-feuille-600">
                {product.season}
              </p>
              <h3 className="mt-2 font-title text-xl font-semibold text-nuit">{product.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-nuit/70">{product.description}</p>
              <p className="mt-4 text-sm font-semibold text-miel-700">
                {product.format} · {product.price !== null ? `${product.price} €` : "Sur demande"}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/boutique" variant="secondary">
            Voir tout le catalogue
          </ButtonLink>
        </div>
      </Section>

      <Section
        className="bg-white/70"
        eyebrow="Formations"
        title="Apprendre l’apiculture en conditions réelles"
        description="Des sessions en petit groupe, au rucher, pensées pour le climat et les floraisons de la Guadeloupe."
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
        <div className="mt-10">
          <ButtonLink href="/formations" variant="secondary">
            Détail des formations
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Biosurveillance"
        title="L’abeille, sentinelle de l’environnement"
        description="En analysant ce que les colonies rapportent à la ruche, on obtient une lecture fine de la qualité de l’air, de l’eau et des sols sur un rayon de plusieurs kilomètres."
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
