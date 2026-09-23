"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { mainNav, site } from "@/lib/site";

/** Vrai pour la page elle-même, et pour ses éventuelles sous-pages. */
function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-miel-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, retour à l’accueil`}>
          <Image
            src="/Logo-o-miel.png"
            alt=""
            width={305}
            height={344}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-title text-2xl font-semibold tracking-[0.18em] text-miel-500 sm:text-3xl">
              O&rsquo;MIEL
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-feuille-600">
              Guadeloupe
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-semibold transition ${
                  current
                    ? "text-miel-600 underline decoration-2 underline-offset-8"
                    : "text-nuit/70 hover:text-miel-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="rounded-full border border-miel-200 bg-miel-100 px-4 py-2 text-sm font-semibold text-miel-700 lg:hidden"
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="menu-mobile"
          aria-label="Navigation principale"
          className="border-t border-miel-100 bg-white px-6 pb-4 sm:px-8 lg:hidden"
        >
          {mainNav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-creme-fonce py-3 text-base font-medium last:border-b-0 ${
                  current ? "text-miel-600" : "text-nuit/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
