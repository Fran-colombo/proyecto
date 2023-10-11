const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Ruta para registrarse
router.post('/signup', (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  const db = new sqlite3.Database('tu_base_de_datos.sqlite');

  const query = `
    INSERT INTO usuarios (nombre, apellido, email, password)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [nombre, apellido, email, password], function(err) {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json({ message: 'Usuario registrado correctamente' });
    }

    db.close();
  });
});

module.exports = router;


