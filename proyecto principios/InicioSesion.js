class UserLogin {
    constructor() {
        // Inicializar los elementos del formulario y agregar el listener
        this.loginForm = document.getElementById('loginForm');
        this.loginButton = document.getElementById('loginButton');
        this.loginStatus = document.getElementById('loginStatus');
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Obtener el estado de inicio de sesión del almacenamiento local
        this.checkLoginStatus(); // Verificar el estado de inicio de sesión al cargar la página
        this.loginForm.addEventListener('submit', this.loginUser.bind(this));
    }

    loginUser(event) {
        event.preventDefault();

        // Desactivar el botón de inicio de sesión para evitar clics repetidos
        this.loginButton.disabled = true;

        // Obtener los valores de los campos de entrada
        const username = this.loginForm.elements['username'].value;
        const password = this.loginForm.elements['password'].value;

        // Verificar si se ingresaron ambos campos
        if (!username || !password) {
            // Mostrar mensaje de error si algún campo está vacío
            this.showLoginStatus("Por favor ingresa tanto el nombre de usuario como la contraseña.");
            // Habilitar nuevamente el botón de inicio de sesión después de 5 segundos
            setTimeout(() => {
                this.loginButton.disabled = false;
            }, 5000);
            return; // Detener la ejecución de la función
        }

        // Obtener la lista de usuarios desde el almacenamiento local
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Buscar el usuario en la lista de usuarios registrados
        const userFound = users.find(user => user.username === username && user.password === password);

        // Verificar si el usuario fue encontrado y la contraseña es correcta
        if (userFound) {
            // Mostrar mensaje de éxito de inicio de sesión
            this.showLoginStatus("¡Inicio de sesión exitoso!");
            // Guardar el nombre de usuario en el almacenamiento local
            localStorage.setItem('loggedInUser', username);
            // Redirigir al usuario a index.html después de 2 segundos
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
            // Cambiar el estado de inicio de sesión a true
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true'); // Guardar el estado de inicio de sesión en el almacenamiento local
            // Ocultar los botones de inicio de sesión y registro
            this.hideLoginButtons();
        } else {
            // Mostrar mensaje de error si el usuario no fue encontrado o la contraseña es incorrecta
            this.showLoginStatus("Nombre de usuario o contraseña incorrectos.");
            // Habilitar nuevamente el botón de inicio de sesión después de 5 segundos
            setTimeout(() => {
                this.loginButton.disabled = false;
            }, 5000);
        }
    }

    showLoginStatus(message) {
        this.loginStatus.textContent = message;
    }

    checkLoginStatus() {
        // Verificar el estado de inicio de sesión al cargar la página
        if (this.isLoggedIn) {
            // Si está iniciada la sesión, ocultar los botones de inicio de sesión y registro
            this.hideLoginButtons();
        }
    }

    hideLoginButtons() {
        // Ocultar los botones de inicio de sesión y registro
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('registerButton').style.display = 'none';
    }
}

// Instanciar la clase para inicializar el formulario de inicio de sesión
new UserLogin();
