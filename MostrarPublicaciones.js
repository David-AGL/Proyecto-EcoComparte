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
            //button class="ver-articulo">Ver artículo</button>
            const verArticulo=document.createElement('button');
            verArticulo.classList.add("ver-articulo");
            verArticulo.textContent = "Ver Artículo";

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

new MostrarPublicaciones();
