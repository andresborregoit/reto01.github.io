function cambiarContenido() {
    // Almacenar datos en el local storage
    localStorage.setItem("nuevoContenido", "Este es el nuevo contenido desde HTML 1.");

    // Redirigir a la segunda página
    window.location.href = "htmlrecibidor.html";
}
