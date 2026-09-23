import type { Metadata } from "next";

import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales, hébergement et politique de confidentialité du site O’MIEL.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const { legal, contact } = site;

  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        intro="Informations relatives à l’éditeur du site, à son hébergeur et au traitement des données personnelles."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          {/* TODO : faire relire ces mentions et compléter toutes les valeurs de `site.legal`
              dans src/lib/site.ts avant la mise en ligne. */}
          <div className="space-y-12 text-base leading-8 text-nuit/75">
            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Éditeur du site</h2>
              <p className="mt-4">
                {legal.companyName} &mdash; {legal.legalForm}
                <br />
                {contact.address.street}, {contact.address.postalCode} {contact.address.city},{" "}
                {contact.address.country}
                <br />
                SIRET : {legal.siret}
                <br />
                E-mail :{" "}
                <a href={`mailto:${contact.email}`} className="text-miel-700 underline">
                  {contact.email}
                </a>
                <br />
                Téléphone : {contact.phone}
                <br />
                Responsable de la publication : {legal.publicationDirector}
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Hébergement</h2>
              <p className="mt-4">
                {legal.host.name}
                <br />
                {legal.host.address}
                <br />
                <a
                  href={legal.host.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-miel-700 underline"
                >
                  {legal.host.url}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Propriété intellectuelle</h2>
              <p className="mt-4">
                L&rsquo;ensemble des contenus de ce site (textes, photographies, logo, éléments
                graphiques) est la propriété de {legal.companyName}, sauf mention contraire. Toute
                reproduction ou représentation, totale ou partielle, sans autorisation écrite
                préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Données personnelles</h2>
              <p className="mt-4">
                Ce site ne collecte aucune donnée personnelle à votre insu. Le formulaire de contact
                ne transmet rien à nos serveurs : il prépare un message dans votre propre logiciel
                de messagerie, que vous restez libre d&rsquo;envoyer ou non.
              </p>
              <p className="mt-4">
                Les informations que vous nous adressez par e-mail sont utilisées uniquement pour
                répondre à votre demande et ne sont ni cédées ni revendues. Conformément au
                règlement général sur la protection des données (RGPD), vous disposez d&rsquo;un
                droit d&rsquo;accès, de rectification et de suppression de vos données, en écrivant
                à{" "}
                <a href={`mailto:${contact.email}`} className="text-miel-700 underline">
                  {contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Cookies</h2>
              <p className="mt-4">
                Ce site n&rsquo;utilise aucun cookie de mesure d&rsquo;audience ni de traceur
                publicitaire.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-semibold text-nuit">Crédits</h2>
              <p className="mt-4">
                Site réalisé avec Next.js. Les tarifs, disponibilités et contenus présentés à titre
                indicatif peuvent évoluer sans préavis.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
