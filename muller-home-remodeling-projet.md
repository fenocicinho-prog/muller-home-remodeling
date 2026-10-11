# Projet : site web Muller Home Remodeling

Document récapitulatif du projet (client, offre, paiement, technique, suivi).

---

## 1. Le client

| Élément | Détail |
|---|---|
| Entreprise | Muller Home Remodeling |
| Activité | Entrepreneur général (general contractor) |
| Services | Rénovation de maisons : cuisines, salles de bain, sols, petites extensions |
| Expérience | Plus de 20 ans (débuts à Phoenix, installé à Riverside depuis quelques années) |
| Zones couvertes | Riverside, Moreno Valley, Corona et environs |
| Licence | California CSLB #1047722 (vérifiée sur le site du CSLB : **active**) |
| Téléphone / SMS | +1 623 523 2267 |
| E-mail | mikemullerr@gmail.com |
| Disponibilité | Flexible : chantiers réservés environ 2 semaines à l'avance, nouveaux projets regardés rapidement |
| Langue de la discussion | Anglais |

### Ce qu'il possède déjà
- 40 à 50 photos de chantiers de bonne qualité (dont des avant/après)
- Des avis clients sous forme de SMS et de messages Facebook (à récupérer)

### Ce qu'il n'a pas
- Pas de logo (un logo simple en texte est prévu)
- Pas de nom de domaine
- Pas d'hébergement

---

## 2. Ce que le client veut

Un **petit site simple**, « rien de fancy », pour :
1. montrer son travail,
2. permettre aux gens de le contacter.

**Pages demandées (5) :**
- Accueil (Home)
- À propos (About)
- Services
- Galerie (photos, avant/après)
- Demande de devis (formulaire)

**Préférence design :** il fait confiance au développeur, à condition que **les photos de ses travaux soient bien mises en valeur, proprement**.

---

## 3. Offre acceptée

| Élément | Détail |
|---|---|
| Site web (5 pages, adapté au mobile) | 500 $ |
| Logo simple | 10 $ |
| **Total** | **510 $** |
| Acompte (50 %) | 255 $ |
| Solde à la livraison | 255 $ |
| Hébergement | Gratuit |
| Nom de domaine | Payé à part par le client : environ 10 à 15 $/an pour un .COM simple, environ 20 $/an pour les autres extensions |
| Délai | **2 semaines** (initialement annoncé 1 semaine, puis corrigé), à partir de la réception de l'acompte, des photos, des avis et du numéro de licence |

Le client a répondu que l'offre lui paraissait correcte et il est prêt à payer.

---

## 4. Paiement

- Le développeur n'a pas de compte bancaire ni de PayPal fonctionnel (PayPal créé avec une carte Visa Orange : échec).
- **Solution retenue :** le client paie par **Zelle** sur le compte d'un ami américain, qui renvoie ensuite l'argent au développeur.
- Le nom affiché sur Zelle sera celui de l'ami : le message au client l'annonce à l'avance pour éviter toute méfiance.

### Règles de sécurité
- Ne **jamais** donner un numéro de carte au client : une carte sert à dépenser, pas à recevoir de l'argent.
- Supprimer le numéro de carte envoyé par l'ami (chat, notes, navigateur).
- Mettre par écrit avec l'ami : montant à reverser (255 $ moins les frais éventuels), moyen d'envoi, délai.
- Refuser tout paiement supérieur au montant prévu accompagné d'une demande de remboursement du surplus (arnaque classique).
- Ne pas mettre le site en ligne sous le domaine du client avant la réception de l'acompte.

---

## 5. Technique

| Élément | Choix |
|---|---|
| Framework | Next.js 16 (App Router), TypeScript |
| Style | Tailwind CSS 4, thème centralisé dans `globals.css` |
| Gestionnaire de paquets | pnpm |
| Formulaire de devis | Route API `/api/quote` + envoi d'e-mail via **Resend** |
| Hébergement | Vercel (gratuit) |
| Poste de développement | Xubuntu |
| Dossier du projet | `~/Desktop/Work/muller-home-remodeling` |

### Arborescence

```
src/
├── app/
│   ├── layout.tsx            # Header + Footer
│   ├── page.tsx              # Accueil
│   ├── globals.css           # Thème (couleurs)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── quote/page.tsx
│   └── api/quote/route.ts    # Envoi de l'e-mail du devis
├── components/
│   ├── Header.tsx, Footer.tsx, Logo.tsx, Hero.tsx
│   ├── ServiceCard.tsx, Reviews.tsx
│   ├── Gallery.tsx, BeforeAfter.tsx
│   └── QuoteForm.tsx
└── data/
    ├── site.ts               # Nom, téléphone, e-mail, licence, zones
    ├── services.ts
    ├── reviews.ts
    └── gallery.ts
public/
├── logo.svg
└── gallery/                  # Photos du client
```

### Installation à partir du zip

```bash
cd ~/Downloads
unzip muller-site-code.zip
cd muller-kit
./install.sh ~/Desktop/Work/muller-home-remodeling
cd ~/Desktop/Work/muller-home-remodeling
pnpm dev
```

Le script copie `src/` et `public/`, crée `.env.local` s'il n'existe pas, exécute `pnpm add resend` et supprime le cache `.next`.

### Variables d'environnement (`.env.local`)

```
RESEND_API_KEY=
QUOTE_TO=
QUOTE_FROM=
```

Sans domaine vérifié dans Resend, l'envoi se fait depuis `onboarding@resend.dev` et uniquement vers l'adresse du compte Resend. Après achat et vérification du domaine du client, mettre son e-mail dans `QUOTE_TO` et une adresse du domaine dans `QUOTE_FROM`.

### Où modifier quoi

| Pour changer... | Fichier |
|---|---|
| Les couleurs du thème | `src/app/globals.css` (5 variables `--color-*`) |
| Le logo | `public/logo.svg` (ou changer l'extension dans `Logo.tsx` pour un PNG) |
| Nom, téléphone, e-mail, licence, zones | `src/data/site.ts` |
| Les services | `src/data/services.ts` |
| Les avis clients | `src/data/reviews.ts` |
| Les photos | `public/gallery/` + `src/data/gallery.ts` |
| Les textes de la page À propos | `src/app/about/page.tsx` |

### Problèmes rencontrés et solutions
- **Erreur « module has no exports at all »** : les fichiers `src/data/*.ts` étaient vides (blocs collés incomplètement). Solution : le zip fournit les fichiers complets.
- **`pnpm install` dit que tout est à jour** : `resend` n'était pas dans `package.json`. `pnpm install` n'ajoute pas de paquet, il faut `pnpm add resend` (fait par `install.sh`).
- **Avertissement « Slow filesystem »** : sans gravité ; si le site est lent, déplacer le projet sur le disque Linux (`~/`).

---

## 6. Suivi : où en est le projet

### Fait
- [x] Échange avec le client, besoins compris
- [x] Offre envoyée et acceptée (510 $, délai 2 semaines)
- [x] Licence CSLB vérifiée (active)
- [x] Structure Next.js et code de base créés (zip)
- [x] Ami américain d'accord, numéro Zelle reçu

### À faire
- [ ] Envoyer au client le message de paiement final (Zelle, acompte 255 $, nom affiché)
- [ ] Mettre par écrit l'accord avec l'ami (montant, frais, délai de reversement)
- [ ] Confirmer la réception de l'acompte (capture d'écran du client + notification de l'ami)
- [ ] Envoyer un contrat court (prix, délai de 2 semaines, contenu inclus)
- [ ] Créer le logo et choisir le thème / design
- [ ] Recevoir les photos, les avis clients et les confirmations du client
- [ ] Remplacer les faux avis par les vrais avis
- [ ] Ajouter les photos à la galerie
- [ ] Configurer Resend et tester le formulaire de devis
- [ ] Acheter le domaine (payé par le client) et le connecter à Vercel
- [ ] Tester sur mobile, déployer, livrer
- [ ] Récupérer le solde de 255 $ à la livraison

### Options pour la suite
- Galerie avec agrandissement au clic (lightbox)
- Déploiement sur Vercel et connexion du domaine
- SEO de base : titres et descriptions mentionnant Riverside, Moreno Valley, Corona
- Bouton « Call now » fixe en bas d'écran sur mobile

---

## 7. Rappels importants

1. **Aucune mise en ligne sous le domaine du client avant la réception de l'acompte.**
2. **Aucun faux avis en ligne.** Uniquement de vrais avis fournis par le client.
3. **Aucun numéro de carte ni coordonnée bancaire dans les chats.**
4. Le délai de 2 semaines ne commence qu'à la réception de l'acompte et des éléments du client.
