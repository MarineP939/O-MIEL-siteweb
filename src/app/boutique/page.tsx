import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink, Card, Container, CtaBand, PageHero, Section } from "@/components/ui";
import {
  autourDuMiel,
  coffrets,
  elixirs,
  engagement,
  excellence,
  formatsMiel,
  miels,
  remise,
  specialitesGourmandes,
  type Produit,
} from "@/lib/catalogue";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, produitJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Le catalogue officiel de la SCEA Ô MIEL : spécialités gourmandes, élixirs de la ruche, gammes de miel de Guadeloupe et coffrets personnalisés.",
  alternates: { canonical: "/boutique" },
};

/**
 * Catalogue déclaré à schema.org, pour que les prix et les formats puissent
 * remonter en résultat enrichi.
 *
 * Les coffrets en sont absents : sans prix fixé, une fiche produit sans offre
 * n'apporte rien et brouille le balisage.
 */
const catalogueJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catalogue O’MIEL",
  itemListElement: [
    ...miels.map((miel) =>
      produitJsonLd({
        name:
          miel.denomination === miel.name ? miel.name : `${miel.name} — ${miel.denomination}`,
        description: miel.description,
        prices: formatsMiel
          .filter((format) => miel.formats.includes(format.key))
          .map((format) => format.price),
      }),
    ),
    ...[...autourDuMiel, ...specialitesGourmandes, ...elixirs].map((produit) =>
      produitJsonLd({
        name: produit.name,
        description: produit.description,
        image: produit.image?.src,
        prices: produit.tarifs
          .map((tarif) => tarif.price)
          .filter((price): price is number => price !== null),
      }),
    ),
  ].map((item, index) => ({ "@type": "ListItem", position: index + 1, item })),
};

const etapesCommande = [
  {
    title: "1. Vous nous écrivez",
    text: "Indiquez les produits, les formats et les quantités souhaitées via le formulaire de contact, par téléphone ou sur Instagram.",
  },
  {
    title: "2. Nous confirmons",
    text: "Nous vérifions la disponibilité réelle du lot et vous envoyons le récapitulatif avec le montant, remise comprise.",
  },
  {
    title: "3. Retrait ou remise",
    text: "Retrait à Petit-Canal, ou remise sur un point convenu. Le paiement se fait à la remise.",
  },
];

/** Prix affiché en pastille, ou « Sur devis » quand il n'est pas fixé. */
function prixLabel(price: number | null) {
  return price !== null ? `${price.toFixed(2).replace(".", ",")} €` : "Sur devis";
}

/**
 * Carte d'un produit transformé, avec sa photo lorsqu'elle existe.
 *
 * `id` sert de cible aux ancres venues de l'accueil ; `scroll-mt` compense
 * la hauteur de l'en-tête collant.
 */
function ProduitCard({ produit }: { produit: Produit }) {
  return (
    <article
      id={produit.slug}
      className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-miel-200/70 bg-white shadow-sm"
    >
      {produit.image ? (
        <Image
          src={produit.image.src}
          alt={produit.image.alt}
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover"
        />
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-title text-xl font-semibold text-nuit">{produit.name}</h3>
        {produit.subtitle ? (
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-nuit/40">
            {produit.subtitle}
          </p>
        ) : null}

        <p className="mt-4 flex-1 text-sm leading-7 text-nuit/70">{produit.description}</p>

        <ul className="mt-5 space-y-2 border-t border-miel-100 pt-4">
          {produit.tarifs.map((tarif) => (
            <li key={tarif.label} className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-nuit/60">{tarif.label}</span>
              <span className="font-semibold text-miel-700">{prixLabel(tarif.price)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function BoutiquePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Boutique", path: "/boutique" }])} />
      <JsonLd data={catalogueJsonLd} />

      <PageHero
        eyebrow="Boutique"
        title="Le catalogue des miels et produits de la ruche."
        intro="Des spécialités gourmandes aux gammes de miel de Guadeloupe, chaque référence est issue de notre récolte et de notre savoir-faire. Les quantités sont limitées et varient au fil des floraisons."
      />

      {/* Encart d'excellence et bandeau de remise, repris du support commercial. */}
      <section className="pt-10 pb-8 sm:pt-12">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-miel-200/70 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-3xl bg-gradient-to-br from-miel-200 via-miel-100 to-creme px-8 py-10 text-center">
              <p className="font-title text-4xl font-semibold uppercase text-miel-700">
                {excellence.distinction}
              </p>
              <p className="mt-2 text-base font-medium text-nuit/75">
                {excellence.distinctionDetail}
              </p>
              <p className="mt-1 text-sm text-nuit/55">{excellence.distinctionAnnee}</p>
            </div>
            <div>
              <h2 className="font-title text-2xl font-semibold text-nuit sm:text-3xl">
                {excellence.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-nuit/75">{excellence.text}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-rubis-200 bg-rubis-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-title text-xl font-semibold text-rubis-700">
                −{remise.taux} % de remise
              </p>
              <p className="mt-1 text-sm leading-7 text-nuit/70">
                Appliquée automatiquement {remise.condition}.
              </p>
            </div>
            <span className="shrink-0 self-start rounded-full bg-rubis-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:self-auto">
              Remise unique
            </span>
          </div>
        </Container>
      </section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Savoir-faire artisanal"
        title="Nos spécialités gourmandes"
        description="Caramiel, miel gingembre et pain d’épices : les produits de la table, fabriqués sur commande et plus particulièrement en fin d’année."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialitesGourmandes.map((produit) => (
            <ProduitCard key={produit.slug} produit={produit} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="La ruche autrement"
        title="Élixirs &amp; bien-être de la ruche"
        description="Deux produits d’exception, élaborés à partir de ce que la colonie produit au-delà du miel."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {elixirs.map((produit) => (
            <ProduitCard key={produit.slug} produit={produit} />
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-nuit/60">
          {/* TODO : ajouter les mentions réglementaires d'étiquetage (poids net, DDM, numéro de
              lot, liste d'ingrédients, titre alcoométrique) avant publication. */}
          L&rsquo;hydromel est une boisson alcoolisée : sa vente est réservée aux personnes
          majeures. L&rsquo;abus d&rsquo;alcool est dangereux pour la santé, à consommer avec
          modération.
        </p>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Les miels"
        title="Gammes de miel de Guadeloupe"
        description="Le tarif dépend du conditionnement, pas de la variété. À chaque format son usage."
      >
        <div className="overflow-x-auto rounded-2xl border border-miel-200/70 shadow-sm">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Formats, usages recommandés et prix unitaires des miels O’MIEL
            </caption>
            <thead>
              <tr className="bg-nuit text-creme">
                <th scope="col" className="px-5 py-4 font-semibold">
                  Format &amp; conditionnement
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Usage recommandé
                </th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">
                  Prix unitaire
                </th>
              </tr>
            </thead>
            <tbody>
              {formatsMiel.map((format, index) => (
                <tr key={format.key} className={index % 2 === 0 ? "bg-white" : "bg-creme-fonce/40"}>
                  <th scope="row" className="px-5 py-4 font-semibold text-nuit">
                    {format.label}
                  </th>
                  <td className="px-5 py-4 text-nuit/70">{format.usage}</td>
                  <td className="px-5 py-4 text-right font-semibold text-miel-700">
                    {format.price},00 €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {miels.map((miel) => (
            <Card key={miel.slug} id={miel.slug}>
              <h3 className="font-title text-2xl font-semibold text-nuit">{miel.name}</h3>
              {miel.denomination !== miel.name ? (
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-nuit/40">
                  {miel.denomination}
                </p>
              ) : null}

              <p className="mt-4 text-sm leading-7 text-nuit/70">{miel.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {miel.tastingNotes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border border-feuille-400/60 bg-feuille-200/40 px-3 py-1 text-xs font-medium text-feuille-700"
                  >
                    {note}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-miel-600">
                  Formats disponibles
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {formatsMiel
                    .filter((format) => miel.formats.includes(format.key))
                    .map((format) => (
                      <li
                        key={format.key}
                        className="rounded-full bg-miel-100 px-3 py-1 text-xs font-semibold text-miel-700"
                      >
                        {format.label.replace("de miel ", "")} · {format.price} €
                      </li>
                    ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Autour du miel"
        title="Les préparations traditionnelles"
        description="Produites en petite quantité, selon la période de l’année."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {autourDuMiel.map((produit) => (
            <Card key={produit.slug}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-title text-xl font-semibold text-nuit">{produit.name}</h3>
                <p className="shrink-0 rounded-full bg-miel-100 px-3 py-1 text-sm font-semibold text-miel-700">
                  {prixLabel(produit.tarifs[0].price)}
                </p>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-nuit/40">
                {produit.tarifs[0].label}
              </p>
              <p className="mt-4 text-sm leading-7 text-nuit/70">{produit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
        eyebrow="Sur mesure"
        title={coffrets.title}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-miel-200/70 bg-white shadow-[0_20px_60px_-24px_rgba(116,85,47,0.45)]">
            <Image
              src={coffrets.image.src}
              alt={coffrets.image.alt}
              width={1196}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base leading-8 text-nuit/75">{coffrets.text}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact?sujet=professionnel">Composer un coffret</ButtonLink>
              <span className="rounded-full bg-miel-100 px-5 py-2 text-sm font-semibold text-miel-700">
                {coffrets.tarif}
              </span>
            </div>
          </div>
        </div>
      </Section>

      <section className="pt-10 sm:pt-12">
        <Container>
          <div className="rounded-2xl border-l-4 border-miel-500 bg-creme-fonce/50 px-8 py-7">
            <h2 className="font-title text-xl font-semibold text-nuit">{engagement.title}</h2>
            <p className="mt-2 text-base leading-8 text-nuit/75">{engagement.text}</p>
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Commander"
        title="Comment passer commande"
        description="La boutique en ligne n’est pas encore ouverte : les commandes se font en direct, ce qui nous permet de vous garantir la disponibilité réelle du lot."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {etapesCommande.map((etape) => (
            <Card key={etape.title}>
              <h3 className="font-title text-lg font-semibold text-nuit">{etape.title}</h3>
              <p className="mt-3 text-sm leading-7 text-nuit/70">{etape.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact?sujet=commande">Passer une commande</ButtonLink>
          <ButtonLink href={`tel:${site.contact.phoneHref}`} variant="secondary">
            Appeler le {site.contact.phone}
          </ButtonLink>
        </div>
      </Section>

      <CtaBand
        title="Vous êtes une entreprise ou un revendeur ?"
        text="Coffrets personnalisés, cadeaux d’entreprise, approvisionnement régulier : parlons-en."
        primary={{ href: "/contact?sujet=professionnel", label: "Demander un devis" }}
      />
    </>
  );
}
