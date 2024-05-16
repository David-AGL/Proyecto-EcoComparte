// publicar.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const terminoBusqueda = urlParams.get('search');
    if (terminoBusqueda) {
        mostrarPublicaciones.filtrarPublicaciones(terminoBusqueda);
    }
});
