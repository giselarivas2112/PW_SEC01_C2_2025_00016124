// al presionar el botón se conviertan en filas una debajo de la otra los parrafos 
// del "Contenido del libro"
function cambiarOrden() {
  var contenedor = document.getElementById("contenido-libro");
  var izquierda = document.querySelector(".izquierda-libro");
  var derecha = document.querySelector(".derecha-libro");

  if (contenedor.style.flexDirection === "column") {
    // volver a columnas
    contenedor.style.flexDirection = "row";
    izquierda.style.width = "60%";
    derecha.style.width = "40%";
  } else {
    // ordenar en filas
    contenedor.style.flexDirection = "column";
    izquierda.style.width = "100%";
    derecha.style.width = "100%";
  }
}

// cambiar el título de la página “HTML & CSS: Curso práctico avanzado”
function cambiarTitulo() {
  var titulo = document.getElementById("titulo");
  titulo.textContent = "El mejorr libro para aprender! :D";
}

// cambiar el color del subtítulo “Descripción del libro” y de la fuente que
//va debajo de esa sección 
function cambiarColor() {
  var subtitulo = document.getElementById("subtitulo");
  var descripcion = document.getElementById("texto-descripcion");
  subtitulo.style.color = "#E50046";
  descripcion.style.color = "#D76C82";
}

// Agregar imagen debajo de Datos del libro
function agregarImagen() {
  var contenedor = document.getElementById("caja-imagen");
  if (contenedor.children.length === 0) {
    var img = document.createElement("img");
    img.src = "imagen/Libro.jpg";
    contenedor.appendChild(img);
  }
}

// Esperar a que cargue todo el DOM antes de asociar eventos a los botoness
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-ordenar").addEventListener("click", cambiarOrden);
  document.getElementById("btn-titulo").addEventListener("click", cambiarTitulo);
  document.getElementById("btn-color").addEventListener("click", cambiarColor);
  document.getElementById("btn-imagen").addEventListener("click", agregarImagen);
});
