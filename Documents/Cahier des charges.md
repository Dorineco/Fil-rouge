Cahier des charges – Projet FinFreeLab

 Contexte du projet
•	Nom du projet : FinFreeLab
•	Objectif : Créer un site web pédagogique permettant aux utilisateurs de se former à l’investissement, de suivre des actions en temps réel, de recevoir des alertes et de simuler des placements financiers.
•	Public cible : Débutants et intermédiaires en finance et investissements, cherchant un outil simple pour apprendre et pratiquer.
________________________________________
 Objectifs fonctionnels
a) Gestion de comptes
•	Inscription et connexion des utilisateurs.
•	Page espace membre pour l’accès aux outils personnalisés.
b) Calculatrice d’investissement
•	Simuler l’évolution d’un capital initial avec épargne mensuelle, durée, taux et intervalle d’intérêts composés.
•	Affichage du capital final.
•	Reset du formulaire.
•	Gestion des erreurs simples (champs vides, taux négatifs…).
c) Alertes financières
•	Permettre à l’utilisateur de définir un seuil d’achat/vente pour une action.
•	S'informer grâce à un fil d'informations financières.
•	Envoyer une notification ou afficher un message lorsque le seuil est atteint (simulation côté client).
d) Blog pédagogique
•	Publier des articles sur la finance et les investissements.
•	Catégorisation par thème (ex : Actions, Cryptomonnaies, Épargne).
•	Lecture des articles sans authentification.
________________________________________
 Objectifs non fonctionnels
•	Interface responsive : adaptée aux mobiles, tablettes et desktop.
•	Rapidité et simplicité d’usage.
•	Sécurité minimale côté client (pas de stockage réel de mot de passe en clair en production, juste pour démo).
•	Design moderne avec Tailwind CSS.
________________________________________
 Technologies et outils
•	Front-end : HTML, CSS (Tailwind CSS), JavaScript.
•	Back-end (prévu pour plus tard) : Node.js / Express.
•	Stockage côté client : localStorage pour la démo.
•	Outils de conception : Figma pour la maquette UI/UX.
________________________________________
 Contraintes

•	Pas d’intégration réelle avec des API boursières pour l’instant (simulation de données côté client).
•	Respect des standards d’accessibilité (labels, aria-attributes).
________________________________________

