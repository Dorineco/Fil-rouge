
Bienvenue sur FinfreeLab, site permettant de se former sur les investissements financiers (partie type blog), un calculateur d'investissement, un feed d'information et le suivi des cours des produits en temps réel. Espace membre de tracking avec un système de notifications de franchissement de seuil pour déclencher une action achat/vente. Inspiration Finary.com


***Maquette du site sur Figma***

https://www.figma.com/design/pdu5ndCVJ7DoEet6v67E42/Fil-rouge?node-id=0-1&m=dev&t=OfIRcfjg0V0zEAMH-1

***Objectif du projet “FinFreeLab”***
Plateforme d’éducation financière
Alertes personnalisées sur actions (prix configurés par l’utilisateur)
Calculateur d’investissements (intérêts composés, DCA, etc.)
Blog pédagogique
Espace utilisateur (favoris, alertes, paramètres)

***Stack technique***

Frontend : HTML/CSS/JS et framework Tailwind
<!-- A confirmer -->
Backend : Node.js + Express
Base de données : MongoDB
Auth : JWT ou NextAuth
API boursière : Yahoo Finance / Alpha Vantage / Finnhub

o description des fonctionnalités finales du fil rouge,
o description des fonctionnalités du TP

***Version actuelle***

- Une interface (html) Web responsive composée de 6 pages répondant aux normes d’accessibilité
- Une fonctionnalité de stockage client sur la page Login.html via la page script.js
- Le DOM depuis Javascript a été appliqué page script.js sur la page Accueil (calculatrice) et Login(formulaire de connection)

***Fonctionnalités principales du projet final***

Alertes investissement
L’utilisateur saisit une action (ex. AAPL, TSLA, CAC40...)
Il définit un prix d’achat/vente souhaité
Le site surveille le cours (via une API boursière type Yahoo Finance API, Alpha Vantage ou Finnhub)
Envoi d’un mail ou d’une notification quand la condition est remplie

Calculateur d’investissement
Intérêts composés
Simulation de rendement sur x années
DCA (Dollar Cost Averaging)
Allocation de portefeuille

Blog pédagogique
Articles sur les fondamentaux (ETF, PEA, dividendes, gestion du risque, etc.)
Filtrage par thème, niveau (débutant/intermédiaire/avancé)
SEO-friendly pour attirer du trafic organique

Espace utilisateur
Gestion du profil
Liste d’alertes enregistrées
Historique et favoris (articles, calculs, etc.)


***Structure générale du site - arborescence***

/ (Accueil)
/formations        → présentation des formations ou parcours de formation
/alertes           → espace utilisateur : configuration d’alertes d’achat/vente
/calculateur       → outils interactifs (rendement, DCA, intérêts composés, etc.)
/blog              → articles pédagogiques et actualités financières
/connexion-inscription
/dashboard         → zone membre (historique alertes, portefeuille virtuel, etc.)

***Design & expérience utilisateur***

Couleurs : palette sobre (bleu nuit / bordeaux / accent orange) → inspiration finance & confiance
Dashboard clair, style “fintech”
Mobile-first (responsive)

***Améliorations prévues***

Tailwind : créer des "variables de class" pour alléger le HTML
Ajout d'une section promouvant l'adhésion au mode "membre".
API pour le feed info et le suivi des cours.
Ajout d'une vidéo embedded.(avec sous-titres)
Accessibilité: test avec les dispositifs d'assistance.
Revoir l'éco-conception.