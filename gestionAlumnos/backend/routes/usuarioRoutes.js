const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para loguear usuario
router.post('/login', usuarioController.loginUsuario);

module.exports = router;