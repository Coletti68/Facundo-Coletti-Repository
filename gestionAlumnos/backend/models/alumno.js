const db = require('../connection/db');

// Obtener todos los alumnos
function obtenerAlumnos(callback) {
  const sql = 'SELECT * FROM alumno';
  db.all(sql, [], callback);
}

// Obtener alumno por ID
function obtenerAlumnoPorId(id, callback) {
  const sql = 'SELECT * FROM alumno WHERE id = ?';
  db.get(sql, [id], callback);
}

// Agregar un nuevo alumno
function agregarAlumno(data, callback) {
  const { nombre, apellido, dni, telefono, fecha_ingreso, fecha_ultimo_pago, estado, observaciones } = data;
  const sql = `
    INSERT INTO alumno (nombre, apellido, dni, telefono, fecha_ingreso, fecha_ultimo_pago, estado, observaciones)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [nombre, apellido, dni, telefono, fecha_ingreso, fecha_ultimo_pago, estado, observaciones];
  db.run(sql, params, callback);
}

// Actualizar alumno
function actualizarAlumno(id, data, callback) {
  const { nombre, apellido, dni, telefono, fecha_ingreso, fecha_ultimo_pago, estado, observaciones } = data;
  const sql = `
    UPDATE alumno
    SET nombre = ?, apellido = ?, dni = ?, telefono = ?, fecha_ingreso = ?, fecha_ultimo_pago = ?, estado = ?, observaciones = ?
    WHERE id = ?
  `;
  const params = [nombre, apellido, dni, telefono, fecha_ingreso, fecha_ultimo_pago, estado, observaciones, id];
  db.run(sql, params, callback);
}

// Eliminar alumno
function eliminarAlumno(id, callback) {
  const sql = 'DELETE FROM alumno WHERE id = ?';
  db.run(sql, [id], callback);
}

module.exports = {
  obtenerAlumnos,
  obtenerAlumnoPorId,
  agregarAlumno,
  actualizarAlumno,
  eliminarAlumno
};