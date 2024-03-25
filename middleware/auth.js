const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  // Code pour vérifier le token JWT
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
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
    req.username = decoded.username;
    next();
  });
}

module.exports = verifyToken;
