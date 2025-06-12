const usuarioModel = require('../models/usuario'); // Importamos el modelo

// Controlador para manejar el login
function loginUsuario(req, res) {
  const { nombreusuario, password } = req.body;

  // Validación simple
  if (!nombreusuario || !password) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }

  // Llamamos al modelo para autenticar
  usuarioModel.autenticarUsuario(nombreusuario, password, (err, usuario) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // Si todo sale bien, devolvemos usuario autenticado (sin password)
    const { password: _, ...usuarioSinPassword } = usuario;
    res.json({ mensaje: 'Autenticado correctamente', usuario: usuarioSinPassword });
  });
}

module.exports = { loginUsuario };