import Link from "next/link";
import type { ReactNode } from "react";

/** Conteneur horizontal commun à toutes les sections du site. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>{children}</div>
  );
}

/** Bandeau de titre en tête de chaque page intérieure. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-miel-100 bg-[radial-gradient(circle_at_top_right,var(--color-miel-100),transparent_60%)] py-16 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-miel-600">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-title text-4xl font-semibold tracking-tight text-nuit sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-nuit/70">{intro}</p>
      </Container>
    </section>
  );
}

/** Section de contenu avec titre optionnel. */
export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-miel-600">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="mt-3 max-w-3xl font-title text-3xl font-semibold text-nuit sm:text-4xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="mt-4 max-w-3xl text-lg leading-8 text-nuit/70">{description}</p>
        ) : null}
        {children ? <div className={title || description ? "mt-10" : ""}>{children}</div> : null}
      </Container>
    </section>
  );
}

/** Carte de contenu réutilisée dans les grilles (produits, formations, atouts). */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-miel-200/70 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </article>
  );
}

type ButtonVariant = "primary" | "secondary" | "light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-miel-600 text-white hover:bg-miel-700",
  secondary: "border border-miel-400 text-miel-700 hover:border-miel-600 hover:bg-miel-100",
  light: "bg-white text-nuit hover:bg-miel-100",
};

/** Lien d'action interne ou externe, selon la forme du `href`. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${buttonStyles[variant]} ${className}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

/** Bandeau d'appel à l'action, en bas des pages. */
export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="pb-20">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-nuit px-8 py-10 text-creme sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-title text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="mt-3 text-base leading-7 text-creme/70">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} variant="light">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink
                href={secondary.href}
                variant="secondary"
                className="border-creme/40 text-creme hover:bg-white/10 hover:border-creme"
              >
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
