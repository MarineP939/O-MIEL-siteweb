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
                        <a href={item.href} className="text-miel-700 underline">
                          {item.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.2em] text-nuit/40">
                      Adresse
                    </dt>
                    <dd className="mt-1 leading-7 text-nuit/75">
                      {site.contact.address.street}
                      <br />
                      {site.contact.address.postalCode} {site.contact.address.city}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-[0.2em] text-nuit/40">
                      Horaires
                    </dt>
                    <dd className="mt-1 leading-7 text-nuit/75">{site.contact.hours}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl bg-feuille-200/40 p-8">
                <h2 className="font-title text-xl font-semibold text-nuit">Visiter le rucher</h2>
                <p className="mt-3 text-sm leading-7 text-nuit/70">
                  {/* TODO : préciser les conditions de visite réelles, ou retirer ce bloc. */}
                  Les visites se font uniquement sur rendez-vous, pour la tranquillité des colonies
                  et votre sécurité. Contactez-nous pour convenir d&rsquo;un créneau.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
