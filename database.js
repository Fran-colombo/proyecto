const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('usuarios.db', (err) => {
  if (err) {
    console.error('Error al abrir la base de datos:', err.message);
  } else {
    console.log('Base de datos abierta correctamente');
    db.run(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        email TEXT,
        password TEXT
      )
    `);
  }
});

module.exports = db;
