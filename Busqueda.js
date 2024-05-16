// script.js
document.addEventListener('DOMContentLoaded', () => {
    const formularioBusqueda = document.querySelector('.search-bar');
    formularioBusqueda.addEventListener('submit', (event) => {
        event.preventDefault();
        const terminoBusqueda = formularioBusqueda.querySelector('input[name="search"]').value;
        window.location.href = `publicaciones.html?search=${encodeURIComponent(terminoBusqueda)}`;
    });
});
