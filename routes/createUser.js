const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const router = express.Router();

// Fonction pour générer un token JWT
function generateAccessToken(username) {
  return jwt.sign(username, 'secret', { expiresIn: '1800s' });
}

// Route pour créer un nouvel utilisateur et générer un token JWT
router.post('/createNewUser', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Nom d\'utilisateur déjà utilisé.' });
    }

    // Créez un nouvel utilisateur
    const newUser = new User({ username, password });
    await newUser.save();

    // Générez un token JWT pour l'utilisateur nouvellement créé
    const token = generateAccessToken({ username });
    res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la création d\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur lors de la création d\'utilisateur.' });
  }
});

module.exports = router;
