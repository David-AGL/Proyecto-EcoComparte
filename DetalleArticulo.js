class DetalleArticulo {
    constructor() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.checkLoginStatus();
        this.loadArticleDetails();
    }

    checkLoginStatus() {
        if (!this.isLoggedIn) {
            alert('Debe iniciar sesión para ver los detalles del artículo.');
            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = "IniciarSesion.html";
        }
    }

    loadArticleDetails() {
        // Obtener el artículo seleccionado de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');

        // Validar que el ID del artículo sea seguro
        if (!articleId) {
            // Manejar caso de ID no válido
            this.displayErrorMessage('ID de artículo no válido.');
            return;
        }

        // Obtener la lista de publicaciones del almacenamiento local
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];

        // Buscar el artículo por su ID
        const article = publicaciones.find(article => {
            // Convertir el ID del artículo a string para la comparación
            return String(article.id) === articleId;
        });

        // Mostrar los detalles del artículo en la página
        if (article) {
            this.displayArticleDetails(article);
            // Verificar si el usuario actual es el mismo que creó la publicación
            if (article.usuario === localStorage.getItem('loggedInUser')) {
                this.setupDeleteButton(articleId);
            }
        } else {
            this.displayErrorMessage('No se encontraron detalles para este artículo.');
        }
    }

    displayArticleDetails(article) {
        const articleDetailsContainer = document.getElementById('articleDetails');

        // Crear elementos HTML para mostrar los detalles de la publicación
        const articleImage = document.createElement('img');
        articleImage.src = article.imagen;
        articleImage.alt = article.titulo;

        const articleTitle = document.createElement('h2');
        articleTitle.textContent = article.titulo;

        const articleDescription = document.createElement('p');
        articleDescription.textContent = article.descripcion;

        const articleMaterials = document.createElement('p');
        articleMaterials.innerHTML = `<strong>Materiales:</strong> ${article.materiales}`;

        const articleContact = document.createElement('p');
        articleContact.innerHTML = `<strong>Contacto:</strong> ${article.contacto}`;

        const articleUser = document.createElement('p');
        articleUser.innerHTML = `<strong>Usuario:</strong> ${article.usuario}`;

        // Limpiar el contenedor antes de agregar los elementos
        articleDetailsContainer.innerHTML = '';

        // Agregar los elementos al contenedor
        articleDetailsContainer.appendChild(articleImage);
        articleDetailsContainer.appendChild(articleTitle);
        articleDetailsContainer.appendChild(articleDescription);
        articleDetailsContainer.appendChild(articleMaterials);
        articleDetailsContainer.appendChild(articleUser);
        articleDetailsContainer.appendChild(articleContact);
    }

    displayErrorMessage(message) {
        const articleDetailsContainer = document.getElementById('articleDetails');
        articleDetailsContainer.textContent = message;
    }

    setupDeleteButton(articleId) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar Publicación';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            this.deleteArticle(articleId);
        });

        const articleDetailsContainer = document.getElementById('articleDetails');
        articleDetailsContainer.appendChild(deleteButton);
    }

    deleteArticle(articleId) {
        let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
        publicaciones = publicaciones.filter(article => String(article.id) !== articleId);
        localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
        alert('La publicación ha sido eliminada correctamente.');
        window.location.href = 'index.html'; // Redirigir al usuario a la página principal
    }
}

// Cargar los detalles del artículo al cargar la página
window.onload = new DetalleArticulo();
