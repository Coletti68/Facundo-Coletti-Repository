const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.obtenerAlumnos);
router.get('/:id', alumnoController.obtenerAlumnoPorId);
router.post('/', alumnoController.agregarAlumno);
router.put('/:id', alumnoController.actualizarAlumno);
router.delete('/:id', alumnoController.eliminarAlumno);

module.exports = router;