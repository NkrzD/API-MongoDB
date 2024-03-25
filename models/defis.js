const mongoose = require('mongoose');

const DefiSchema = new mongoose.Schema({
  titre: String,
  description: String,
});

module.exports = mongoose.model('Defi', DefiSchema);
