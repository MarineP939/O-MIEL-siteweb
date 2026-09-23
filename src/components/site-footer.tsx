import Link from "next/link";

import { footerNav, mainNav, site } from "@/lib/site";

export function SiteFooter() {
  const socials = Object.entries(site.social).filter(([, url]) => url !== "");

  return (
    <footer className="mt-auto border-t border-miel-100 bg-nuit text-creme">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3 lg:px-12">
        <div>
          <p className="font-title text-2xl font-semibold tracking-[0.18em] text-miel-400">
            O&rsquo;MIEL
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-feuille-400">Guadeloupe</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-creme/70">{site.baseline}. Miels de terroir, formations à l&rsquo;apiculture et biosurveillance.</p>
        </div>

        <nav aria-label="Plan du site">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-miel-400">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[...mainNav, ...footerNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-creme/75 transition hover:text-miel-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-miel-400">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-creme/75">
            <li>
              <a href={`mailto:${site.contact.email}`} className="transition hover:text-miel-400">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="transition hover:text-miel-400"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="pt-2 leading-6">
              {site.contact.address.street}
              <br />
              {site.contact.address.postalCode} {site.contact.address.city}
            </li>
          </ul>

          {socials.length > 0 ? (
            <ul className="mt-4 flex gap-4 text-sm">
              {socials.map(([network, url]) => (
                <li key={network}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="capitalize text-creme/75 transition hover:text-miel-400"
                  >
                    {network}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-creme/50 sm:px-8 lg:px-12">
        © {new Date().getFullYear()} {site.legal.companyName}. Tous droits réservés.
      </div>
    </footer>
  );
}
