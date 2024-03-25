const express = require('express');
const bodyParser = require('body-parser');
const verifyToken = require('./middleware/auth');
const mongoose = require('mongoose');
const defisRouter = require('./routes/defis');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connexion à la base de données MongoDB avec Mongoose
const uri =
  'mongodb+srv://Adrien:1234@apimongodb.h3eaxwl.mongodb.net/?retryWrites=true&w=majority&appName=APIMongoDB';
mongoose
  .connect(uri)
  .then(() => {
    console.log('Connexion à MongoDB établie avec succès');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

// Middleware pour vérifier le token JWT
app.use(verifyToken);

// Routes
app.use('/defis', defisRouter);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
