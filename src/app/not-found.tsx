import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center">
        <p className="font-title text-6xl font-semibold text-miel-400">404</p>
        <h1 className="mt-4 font-title text-3xl font-semibold text-nuit sm:text-4xl">
          Cette page s&rsquo;est envolée.
        </h1>
        <p className="mt-4 text-lg leading-8 text-nuit/70">
          L&rsquo;adresse demandée n&rsquo;existe pas, ou n&rsquo;existe plus. Reprenons depuis
          l&rsquo;accueil.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l&rsquo;accueil</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Nous contacter
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
