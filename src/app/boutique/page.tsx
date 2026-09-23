import type { Metadata } from "next";

import { ButtonLink, Card, CtaBand, PageHero, Section } from "@/components/ui";
import { products } from "@/lib/catalogue";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Le catalogue des miels O’MIEL : campêche, mangrove, toutes fleurs, coffrets, pollen et cire. Commande par contact direct.",
};

const etapesCommande = [
  {
    title: "1. Vous nous écrivez",
    text: "Indiquez les produits et les quantités souhaitées via le formulaire de contact ou par téléphone.",
  },
  {
    title: "2. Nous confirmons",
    text: "Nous vérifions la disponibilité réelle du lot et vous envoyons le récapitulatif avec le montant.",
  },
  {
    title: "3. Retrait ou livraison",
    text: "Retrait au rucher, ou remise sur un point convenu. Le paiement se fait à la remise.",
  },
];

export default function BoutiquePage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Les miels et produits du rucher."
        intro="Les récoltes sont limitées et changent au fil des floraisons. Ce catalogue présente l’offre habituelle ; la disponibilité du moment se confirme au moment de la commande."
      />

      <Section title="Le catalogue">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug}>
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-title text-xl font-semibold text-nuit">{product.name}</h2>
                <p className="shrink-0 rounded-full bg-miel-100 px-3 py-1 text-sm font-semibold text-miel-700">
                  {product.price !== null ? `${product.price} €` : "Sur demande"}
                </p>
              </div>

              <p className="mt-1 text-sm text-nuit/50">{product.format}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-nuit/70">{product.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {product.tastingNotes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border border-feuille-400/60 bg-feuille-200/40 px-3 py-1 text-xs font-medium text-feuille-700"
                  >
                    {note}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-nuit/40">
                Récolte : {product.season}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-nuit/60">
          {/* TODO : ajuster les tarifs, formats et mentions réglementaires (poids net, DDM,
              numéro de lot) avant publication. */}
          Tarifs indicatifs, susceptibles d&rsquo;évoluer selon les récoltes. Des conditions
          particulières s&rsquo;appliquent pour les commandes de gros volumes et les revendeurs.
        </p>
      </Section>

      <Section
        className="border-y border-miel-100 bg-white/70"
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
