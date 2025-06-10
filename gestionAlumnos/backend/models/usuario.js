const db = require('../connection/db'); // Importa la conexión a la base de datos, require carga un modulo extern(db, bcrypt)
const bcrypt = require('bcrypt');       // Importa la librería bcrypt para encriptar y comparar contraseñas

// Función para autenticar usuario
function autenticarUsuario(nombreusuario, passwordIngresada, callback) {
  const sql = 'SELECT * FROM usuario WHERE nombreusuario = ?'; // Consulta SQL para buscar usuario por nombre

  db.get(sql, [nombreusuario], (err, row) => {
    if (err) return callback(err);        // Si hay error con la base, lo devolvemos
    if (!row) return callback(null, false); // Si no se encuentra el usuario, devolvemos false

    // Comparamos la contraseña ingresada con la guardada (hasheada)
    bcrypt.compare(passwordIngresada, row.password, (err, resultado) => {
      if (err) return callback(err); // Error en la comparación
      return callback(null, resultado ? row : false); // Si coincide, devolvemos el usuario; si no, false
    });
  });
}

module.exports = { autenticarUsuario }; 