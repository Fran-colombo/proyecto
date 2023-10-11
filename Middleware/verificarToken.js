const jwt = require('jsonwebtoken');
const secretKey = 'newells'; // Reemplaza con tu propia clave secreta

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'No se proporcionó un token' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensaje: 'Token inválido' });
    }
    req.usuario = decoded;
    next();
  });
};

module.exports = verificarToken;
