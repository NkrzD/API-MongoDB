const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  // Code pour vérifier le token JWT
  const token = req.headers['authorization'];
  if (!token)
    return res.status(401).send({ auth: false, message: 'Token non fourni.' });

  jwt.verify(token, 'secret', function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({
          auth: false,
          message: "Échec de l'authentification du token.",
        });

    // Si tout est bon, enregistrer l'ID d'utilisateur pour une utilisation ultérieure
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
