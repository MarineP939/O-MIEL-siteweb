import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter O’MIEL en Guadeloupe : commandes de miel, inscriptions aux formations et projets de biosurveillance.",
};

const coordonnees = [
  {
    label: "E-mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "Téléphone",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneHref}`,
  },
  {
    label: "Instagram",
    value: site.social.instagramHandle,
    href: site.social.instagram,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Commande, formation, biosurveillance ou simple curiosité : écrivez-nous. Nous répondons sous quelques jours ouvrés."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-miel-200/70 bg-white p-8 shadow-sm">
              <h2 className="font-title text-2xl font-semibold text-nuit">Nous écrire</h2>
              <p className="mt-2 text-sm leading-7 text-nuit/60">
                Les champs marqués d&rsquo;un astérisque sont obligatoires.
              </p>
              <div className="mt-8">
                <Suspense fallback={<p className="text-sm text-nuit/50">Chargement du formulaire…</p>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-3xl border border-miel-200/70 bg-white p-8 shadow-sm">
                <h2 className="font-title text-xl font-semibold text-nuit">Coordonnées</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  {coordonnees.map((item) => (
                    <div key={item.label}>
                      <dt className="font-semibold uppercase tracking-[0.2em] text-nuit/40">
                        {item.label}
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={item.href}
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer noopener" }
                            : {})}
                          className="text-miel-700 underline"
                        >
                          {item.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.2em] text-nuit/40">
                      Siège
                    </dt>
                    <dd className="mt-1 leading-7 text-nuit/75">
                      {site.contact.address.street}
                      <br />
                      {site.contact.address.postalCode} {site.contact.address.city}
                      <br />
                      {site.contact.address.country}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-miel-200/70 bg-white p-8 shadow-sm">
                <h2 className="font-title text-xl font-semibold text-nuit">
                  Commandes &amp; contacts directs
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  {site.contactsDirects.map((personne) => (
                    <li key={personne.phoneHref}>
                      <p className="font-semibold text-nuit">{personne.name}</p>
                      <a
                        href={`tel:${personne.phoneHref}`}
                        className="mt-1 inline-block text-miel-700 underline"
                      >
                        {personne.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-feuille-200/40 p-8">
                <h2 className="font-title text-xl font-semibold text-nuit">Nous suivre</h2>
                <p className="mt-3 text-sm leading-7 text-nuit/70">
                  Récoltes en cours, nouveaux produits et disponibilités de fin d&rsquo;année : les
                  actualités du rucher sont publiées sur Instagram.
                </p>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-feuille-700 underline"
                >
                  {site.social.instagramHandle}
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
