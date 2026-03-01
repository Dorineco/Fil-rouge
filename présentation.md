Le projet est structuré avec un frontend statique en HTML, CSS et JavaScript, et un backend Node.js Express séparé.
Cette séparation permet une future évolution vers React côté front et une API REST sécurisée côté back.
┌──────────────────────────┐
│        NAVIGATEUR        │
│  (HTML / CSS / JS)       │
│         TailwindCSS      │
│  Accueil.html            |
|  Contact.html            |
|  EspaceMembre.html       |
|  Inscription.html        │
│  Login.html              │
│  Ressources.html         │
│                          │
│  JS Frontend             │
│  - calculator.js         │
│                          │
│                          │
└─────────────▲────────────┘
              │
      HTTP / JSON (fetch)
              │
┌─────────────┴────────────┐
│        BACKEND API        │
│     Node.js / Express    │
│                          │
│  Routes REST             │
│  - POST /api/login       │
│  - GET  /api/user        │
│  - POST /api/alerts      │
│                          │
│  Controllers             │
│  Logique métier          │
│                          │
└─────────────▲────────────┘
              │
        Requêtes DB
              │
┌─────────────┴────────────┐
│      BASE DE DONNÉES      │
│   MongoDB   │
│                          │
│  Users                   │
│  Alerts                  │
│  Calculs sauvegardés  
   Articles de blog
   Portefeuille virtuel   │
│                          │
└──────────────────────────┘
Le Front (navigateur)
Affiche les pages HTML
Gère les interactions utilisateur
Ne contient aucune logique sensible
Appelle le backend avec fetch()

Le Back (Express)
Reçoit les requêtes HTTP
Vérifie les données
Applique la logique métier
Communique avec la base

La Base de données
Stocke :
utilisateurs
alertes
Articles de blog
Portefeuille virtuel
Jamais accessible directement depuis le navigateur

Le navigateur ne parle jamais directement à la base de données.
Tout passe par l’API Express.
Le frontend est une application statique en HTML, CSS et JavaScript.
Il communique avec un backend Node.js Express via des requêtes HTTP en JSON.
Le backend expose une API REST qui centralise la logique métier et l’accès à la base de données.

J’ai choisi MongoDB avec Mongoose car le projet est full JavaScript (front + back).
MongoDB stocke les données sous forme de documents JSON, ce qui correspond naturellement aux objets manipulés en Node.js.
Mongoose me permet d’imposer un schéma, des validations et une structure propre, tout en gardant de la flexibilité.
Pour une application pédagogique et évolutive comme FinFreeLab, c’est le meilleur compromis entre simplicité, cohérence et modernité.
Docker me permet d’uniformiser l’environnement de développement.
Grâce à Docker Compose, je lance mon backend Node.js et MongoDB sans installation locale, ce qui facilite le déploiement et la reproductibilité du projet.
Dans le cadre de FinFreeLab, Docker est une base pour un futur passage en production.