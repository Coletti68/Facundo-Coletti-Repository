const express = require('express');
const app = express();
const path = require('path');

// Rutas
const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const alumnoRoutes = require('./backend/routes/alumnoRoutes'); // <== 🚨 Agregamos esta línea

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'frontend')));

// Usar las rutas
app.use('/api/usuario', usuarioRoutes);
app.use('/api/alumnos', alumnoRoutes); // <== 🚨 Y esta

// Ruta catch-all para que carga index.html si no es API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/html/index.html'));
});

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 