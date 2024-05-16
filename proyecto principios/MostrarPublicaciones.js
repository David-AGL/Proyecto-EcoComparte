class MostrarPublicaciones {
    constructor() {
        this.publicacionesContainer = document.getElementById('publicaciones');
        this.mostrarPublicaciones();
    }

    mostrarPublicaciones() {
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
        
        publicaciones.forEach(publicacion => {
            const publicacionElement = document.createElement('div');
            publicacionElement.classList.add('publicacion');

            const imagen = document.createElement('img');
            imagen.src = publicacion.imagen;
            imagen.alt = publicacion.titulo;

            const texto = document.createElement('div');
            texto.classList.add('texto');

            const titulo = document.createElement('h3');
            titulo.textContent = publicacion.titulo;

            const descripcionTitulo = document.createElement('p');
            descripcionTitulo.classList.add('descripcion');
            descripcionTitulo.textContent = 'Descripción:';

            const descripcion = document.createElement('p');
            descripcion.textContent = publicacion.descripcion;

            const verArticulo = document.createElement('button');
            verArticulo.classList.add("ver-articulo");
            verArticulo.textContent = "Ver Artículo";

            // Agregar un evento click al botón "Ver artículo"
            verArticulo.addEventListener('click', () => {
                this.verArticulo(publicacion);
            });

            texto.appendChild(titulo);
            texto.appendChild(descripcionTitulo);
            texto.appendChild(descripcion);
            texto.appendChild(verArticulo);

            publicacionElement.appendChild(imagen);
            publicacionElement.appendChild(texto);

            this.publicacionesContainer.appendChild(publicacionElement);
        });
    }

    verArticulo(publicacion) {
        // Redirigir al usuario a la página de detalles del artículo
        // Aquí deberías especificar el nombre de tu archivo HTML para los detalles del artículo
        window.location.href = "DetalleArticulo.html?id=" + publicacion.id; // Reemplaza "detalles_articulo.html" con el nombre de tu archivo HTML
    }

    filtrarPublicaciones(terminoBusqueda) {
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
        const publicacionesFiltradas = publicaciones.filter(publicacion => {
            // Filtrar por título y materiales
            return publicacion.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) || 
                   publicacion.materiales.toLowerCase().includes(terminoBusqueda.toLowerCase());
        });
        
        // Limpiar el contenedor de publicaciones antes de mostrar las filtradas
        this.publicacionesContainer.innerHTML = '';
        
        // Mostrar las publicaciones filtradas
        publicacionesFiltradas.forEach(publicacion => {
            const publicacionElement = document.createElement('div');
            publicacionElement.classList.add('publicacion');

            const imagen = document.createElement('img');
            imagen.src = publicacion.imagen;
            imagen.alt = publicacion.titulo;

            const texto = document.createElement('div');
            texto.classList.add('texto');

            const titulo = document.createElement('h3');
            titulo.textContent = publicacion.titulo;

            const descripcionTitulo = document.createElement('p');
            descripcionTitulo.classList.add('descripcion');
            descripcionTitulo.textContent = 'Descripción:';

            const descripcion = document.createElement('p');
            descripcion.textContent = publicacion.descripcion;

            const verArticulo = document.createElement('button');
            verArticulo.classList.add("ver-articulo");
            verArticulo.textContent = "Ver Artículo";

            // Agregar un evento click al botón "Ver artículo"
            verArticulo.addEventListener('click', () => {
                this.verArticulo(publicacion);
            });

            texto.appendChild(titulo);
            texto.appendChild(descripcionTitulo);
            texto.appendChild(descripcion);
            texto.appendChild(verArticulo);

            publicacionElement.appendChild(imagen);
            publicacionElement.appendChild(texto);

            this.publicacionesContainer.appendChild(publicacionElement);
        });
    }
}

const mostrarPublicaciones = new MostrarPublicaciones();
