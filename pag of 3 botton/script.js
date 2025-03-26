const imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"]
const imagen = document.getElementById("imagen");
const boton1 = document.getElementById('boton1'); 
const boton2 = document.getElementById('boton2'); 
const boton3 = document.getElementById('boton3'); 

boton1.addEventListener("click", () => imagen.src = imagenes[0]);
boton2.addEventListener("click", () => imagen.src = imagenes[1]);
boton3.addEventListener("click", () => imagen.src = imagenes[2]);