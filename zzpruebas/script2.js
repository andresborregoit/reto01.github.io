
// Obtener el contenido almacenado en el local storage
var nuevoContenido = localStorage.getItem("nuevoContenido");

if (nuevoContenido) {
    // Modificar el contenido del párrafo en HTML 2
    document.getElementById("contenido").textContent = nuevoContenido;

    // Eliminar el dato del local storage después de usarlo
    localStorage.removeItem("nuevoContenido");
}
