const Alumno = require('../models/alumno');

const obtenerAlumnos = (req, res) => {
  Alumno.obtenerAlumnos((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

const obtenerAlumnoPorId = (req, res) => {
  const id = req.params.id;
  Alumno.obtenerAlumnoPorId(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Alumno no encontrado' });
    res.json(row);
  });
};

const agregarAlumno = (req, res) => {
  Alumno.agregarAlumno(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Alumno agregado correctamente' });
  });
};

const actualizarAlumno = (req, res) => {
  const id = req.params.id;
  Alumno.actualizarAlumno(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Alumno actualizado correctamente' });
  });
};

const eliminarAlumno = (req, res) => {
  const id = req.params.id;
  Alumno.eliminarAlumno(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Alumno eliminado correctamente' });
  });
};

module.exports = {
  obtenerAlumnos,
  obtenerAlumnoPorId,
  agregarAlumno,
  actualizarAlumno,
  eliminarAlumno
};