# O’MIEL — site vitrine

Site vitrine de **O’MIEL**, apiculture artisanale en Guadeloupe : miels de terroir, formations à
l’apiculture et biosurveillance environnementale.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) et React 19
- TypeScript
- Tailwind CSS v4
- Pages entièrement statiques (prérendues au build)

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
```

Pas familier du projet ? [**DEMARRAGE.md**](./DEMARRAGE.md) détaille la marche à suivre pas à pas,
prérequis et dépannage compris.

Autres commandes :

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # ESLint
```

## Structure

```
src/
  app/
    layout.tsx            en-tête, pied de page, polices, métadonnées globales
    page.tsx              accueil
    a-propos/             histoire du rucher, valeurs, savoir-faire
    formations/           catalogue des formations et modalités
    boutique/             catalogue produits (vitrine, commande par contact)
    biosurveillance/      démarche, matrices analysées, déroulé d'une campagne
    contact/              coordonnées et formulaire
    mentions-legales/     mentions légales et RGPD
    not-found.tsx         page 404
    sitemap.ts            sitemap.xml
    robots.ts             robots.txt
    globals.css           palette et styles de base
  components/
    site-header.tsx       navigation principale (client, menu mobile)
    site-footer.tsx       pied de page
    ui.tsx                briques partagées (Container, PageHero, Section, Card, ButtonLink, CtaBand)
    contact-form.tsx      formulaire de contact
  lib/
    site.ts               coordonnées, navigation, mentions légales
    catalogue.ts          produits et formations
```

## À compléter avant la mise en ligne

Tous les contenus à remplacer sont marqués `TODO` dans le code. Les principaux :

- **`src/lib/site.ts`** — e-mail, téléphone, adresse, horaires, réseaux sociaux, domaine définitif
  (`site.url`, utilisé par le sitemap et les balises Open Graph), et le bloc `legal`
  (forme juridique, SIRET, responsable de publication, hébergeur réel).
- **`src/lib/catalogue.ts`** — produits, formats, tarifs et formations réels.
- **Pages** — les paragraphes d’histoire (`/a-propos`), les modalités de formation, les mentions
  réglementaires des produits et les références de campagnes de biosurveillance.
- **Visuels** — le site n’utilise aujourd’hui que le logo. Ajouter des photos du rucher et des
  produits dans `public/`, puis les afficher avec `next/image`.
- **OG image** — déposer un `src/app/opengraph-image.png` (1200 × 630) pour les partages sociaux.

## Formulaire de contact

Le formulaire ne fait **aucun appel réseau** : il ouvre le logiciel de messagerie du visiteur avec
un message pré-rempli. Aucune donnée n’est stockée, ce qui évite toute obligation RGPD côté
serveur.

Pour passer à un envoi côté serveur, remplacer `handleSubmit` dans
`src/components/contact-form.tsx` par une Server Action branchée sur un service d’e-mail
transactionnel (Resend, Brevo…), et afficher l’état avec `useActionState`.

## Déploiement

Le site est entièrement statique et se déploie tel quel sur Vercel. Penser à mettre `site.url` à
jour avec le domaine réel avant le premier déploiement en production.
