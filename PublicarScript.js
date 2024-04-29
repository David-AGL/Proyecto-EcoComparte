class Publicar {
    constructor() {
        this.formulario = document.getElementById('formulario');
        this.imagenInput = document.getElementById('imagen');
        this.previewImage = document.getElementById('preview');
        this.tituloInput = document.getElementById('titulo');
        this.descripcionInput = document.getElementById('descripcion');
        this.materialesInput = document.getElementById('materiales');
        this.contactoInput = document.getElementById('contacto');
        this.publicarBtn = document.getElementById('publicarBtn');
        this.publicarBtn.addEventListener('click', this.publicarObjeto.bind(this));
        this.usuarioActual = localStorage.getItem('loggedInUser');
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.checkLoginStatus();
        this.mostrarImagen();
    }

    checkLoginStatus() {
        if (!this.isLoggedIn) {
            alert('Debe iniciar sesión para poder publicar un producto.');
            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = "IniciarSesion.html";
        }
    }

    mostrarImagen() {
        this.imagenInput.addEventListener('change', () => {
            const file = this.imagenInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewImage.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    publicarObjeto(event) {
        event.preventDefault();

        const imagen = this.imagenInput.files[0];
        const titulo = this.tituloInput.value.trim();
        const descripcion = this.descripcionInput.value.trim();
        const materiales = this.materialesInput.value.trim();
        const contacto = this.contactoInput.value.trim();

        if (!imagen || !titulo || !descripcion || !materiales || !contacto) {
            alert('Por favor complete todos los campos.');
            return;
        }

        // Convertir la imagen en una URL de datos
        const reader = new FileReader();
        reader.onload = () => {
            const imageURL = reader.result;

            const publicacion = {
                usuario: this.usuarioActual,
                imagen: imageURL,
                titulo: titulo,
                descripcion: descripcion,
                materiales: materiales,
                contacto: contacto
            };

            // Obtener la lista de publicaciones existente o inicializar una nueva lista si no existe
            const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
            // Agregar la nueva publicación a la lista
            publicaciones.push(publicacion);
            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('publicaciones', JSON.stringify(publicaciones));

            alert('Objeto publicado exitosamente.');

            // Redirigir al usuario a la página principal
            window.location.href = "index.html";
        };
        reader.readAsDataURL(imagen);
    }
}

new Publicar();
