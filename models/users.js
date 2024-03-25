const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String, // Il est recommandé de stocker le mot de passe haché plutôt que le mot de passe en clair
});

module.exports = mongoose.model('User', UserSchema);