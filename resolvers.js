const db = require('./database');
const authRoutes = require('./routes/authRoutes');
const verificarToken = require('./middleware');

const root = {
  obtenerUsuarios: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM usuarios WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  },
  registrarUsuario: ({ nombre, apellido, email, password }) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?,?)', [nombre, apellido, email,password], function(err) {
        if (err) {
          reject(err);
          return;
        }
        const nuevoUsuario = {
          id: this.lastID,
          nombre,
          apellido,
          email,
          password,
        };
        resolve(nuevoUsuario);
      });
    });
  },
  login: authRoutes.login,
  signup: authRoutes.signup,

  // Ruta protegida
  rutaPrivada: verificarToken
};

module.exports = root;
