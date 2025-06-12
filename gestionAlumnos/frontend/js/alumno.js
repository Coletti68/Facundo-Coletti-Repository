document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('lista-alumnos');
  const form = document.getElementById('form-alumno');

  // Mostrar todos los alumnos
  function cargarAlumnos() {
    fetch('http://localhost:3000/api/alumnos')
      .then(res => res.json())
      .then(data => {
        lista.innerHTML = '';
        data.forEach(alumno => {
          const li = document.createElement('li');
          li.textContent = `${alumno.nombre} ${alumno.apellido} (${alumno.edad} años)`;
          lista.appendChild(li);
        });
      });
  }

  cargarAlumnos(); // Al iniciar

  // Agregar nuevo alumno
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nuevoAlumno = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      edad: parseInt(document.getElementById('edad').value)
    };

    fetch('http://localhost:3000/api/alumnos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoAlumno)
    })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarAlumnos(); // Refrescar lista
    });
  });
})