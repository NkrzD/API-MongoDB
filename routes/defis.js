const express = require('express');
const router = express.Router();
const Defi = require('../models/defis');
const verifyToken = require('../middleware/auth');

// Route pour récupérer un défi aléatoire
router.get('/', async (req, res) => {
  // Code pour récupérer un défi aléatoire
  try {
    const defi = await Defi.aggregate([{ $sample: { size: 1 } }]);
    res.json(defi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour récupérer plusieurs défis aléatoires
router.get('/multiple', async (req, res) => {
  // Code pour récupérer plusieurs défis aléatoires
  try {
    const defis = await Defi.aggregate([{ $sample: { size: 100 } }]);
    res.json(defis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour ajouter un défi (authentifiée)
router.post('/', verifyToken, async (req, res) => {
  // Code pour ajouter un défi
  if (req.userId !== 'ADMINISTRATEUR') {
    return res.status(403).json({
      message: 'Seuls les administrateurs peuvent ajouter des défis.',
    });
  }

  const defi = new Defi({
    titre: req.body.titre,
    description: req.body.description,
  });

  try {
    const nouveauDefi = await defi.save();
    res.status(201).json(nouveauDefi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour modifier un défi (authentifiée)
router.put('/:id', verifyToken, async (req, res) => {
  // Code pour modifier un défi
  try {
    const defi = await Defi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(defi);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Route pour supprimer un défi (authentifiée)
router.delete('/:id', verifyToken, async (req, res) => {
  // Code pour supprimer un défi
  try {
    await Defi.findByIdAndDelete(req.params.id);
    res.json({ message: 'Défi supprimé avec succès.' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
