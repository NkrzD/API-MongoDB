# Simple express demo

> Express: fast, unopinionated, minimalist web framework for Node.js

This project shows a simple express server serving a single HTML page and using `express.static` to serve static files.

Check out the [express documentation](https://expressjs.com/) for more information.

Comment configurer et lancer le projet:
Après avoir clone le projet, vous devez effectuez les commandes suivantes:
-npm install (pour installer toutes les dépendances)
-npm list
vous devriez avoir une liste qui ressemble à ça:
├── express@4.19.1
├── jsonwebtoken@9.0.2
├── mongodb@6.5.0
├── mongoose@8.2.3
└── nodemon@3.1.0

une fois ceci fait aller sur mongoDBCompass et rentrez cette URI : mongodb+srv://Adrien:1234@apimongodb.h3eaxwl.mongodb.net/API?retryWrites=true&w=majority&appName=APIMongoDB

soyez sur d'avoir sélectionné mongodb+srv dans "Advanced Connection Options -> connection string scheme"

Une fois connecté, retourné sur le terminal du projet et effectuez la commande: npm run start

Fonctionnalités implémentées:
Normalement toutes les fonctionnalités sont implémentées cependant comme je vous l'ai expliquez par mail je n'ai pas pu tester si toutes les fonctionnalités fonctionnées puisque j'ai eu une erreur 401 unauthorized sur n'importe quel requête que je faisais y compris sur celle qui ne requiert pas d'être authentifié comme la création d'utilisateur.