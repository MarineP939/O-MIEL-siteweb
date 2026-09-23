# Lancer le site O’MIEL en local

Guide pas à pas pour afficher le site sur votre machine, en ligne de commande.
Aucune connaissance de Next.js n’est nécessaire.

## Prérequis

Deux outils seulement. Vérifiez-les avant de commencer :

```bash
node --version    # doit afficher v20.9.0 ou plus
git --version
```

Si `node` n’est pas reconnu, ou affiche une version inférieure à 20.9, installez la version **LTS**
depuis [nodejs.org](https://nodejs.org) — `npm` est inclus. Next.js 16 refuse de démarrer en
dessous de Node 20.9.

## Étape 1 — Récupérer le code

```bash
git clone https://github.com/MarineP939/O-MIEL-siteweb.git
cd O-MIEL-siteweb
```

Le dépôt est public : aucun compte GitHub ni mot de passe n’est demandé.

## Étape 2 — Installer les dépendances

```bash
npm install
```

Environ 360 paquets, une dizaine de secondes. À faire **une seule fois**.

Des avertissements `npm audit` s’affichent à la fin : ils concernent des outils de développement et
n’empêchent pas le site de fonctionner. Ne lancez **pas** `npm audit fix --force`, qui modifierait
les versions et casserait le projet.

## Étape 3 — Démarrer le serveur

```bash
npm run dev
```

Sortie attendue :

```
▲ Next.js 16.2.12 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.1.168:3000
✓ Ready in 304ms
```

## Étape 4 — Ouvrir le site

Rendez-vous sur **http://localhost:3000** dans votre navigateur.

Les sept pages sont accessibles depuis le menu : Accueil, À propos, Formations, Boutique,
Biosurveillance, Contact — et Mentions légales depuis le pied de page.

Laissez le terminal ouvert pendant la consultation : fermer la fenêtre arrête le site.

## Étape 5 — Arrêter le serveur

Dans le terminal, `Ctrl+C`.

## En cas de problème

| Message | Que faire |
| --- | --- |
| `Port 3000 is in use` | Next bascule automatiquement sur 3001 et l’indique à la ligne `Local:`. Utilisez l’adresse affichée, ou forcez un port : `npm run dev -- -p 3005`. |
| `command not found: npm` | Node.js n’est pas installé, ou le terminal a été ouvert avant l’installation. Fermez-le et ouvrez-en un nouveau. |
| Page blanche, erreur inattendue | `rm -rf .next node_modules && npm install && npm run dev` |

Pour récupérer une mise à jour plus tard :

```bash
git pull
npm install   # au cas où des dépendances auraient changé
npm run dev
```

## Note sur les modes

`npm run dev` est le **mode développement** : rechargement à chaud à chaque modification, mais
rendu volontairement moins optimisé. C’est le bon mode pour visualiser et travailler sur le site.

Pour tester le site tel qu’il sera réellement en production :

```bash
npm run build
npm run start
```
