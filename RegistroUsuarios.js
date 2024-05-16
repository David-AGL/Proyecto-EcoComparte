class UserRegistration {
    constructor() {
        // Inicializa el formulario y agrega el listener
        this.registerForm = document.getElementById('registerForm');
        this.registrationStatus = document.getElementById('registrationStatus');
        this.registerForm.addEventListener('submit', this.registerUser.bind(this));
    }

    registerUser(event) {
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        const newUsername = this.registerForm.elements['newUsername'].value;
        const newPassword = this.registerForm.elements['newPassword'].value;
        const fullName = this.registerForm.elements['fullName'].value;

        // Verificar si todos los campos del formulario están completos
        if (!newUsername || !newPassword || !fullName) {
            this.showRegistrationStatus("Por favor completa todos los campos.");
            return;
        }

        // Obtener la lista de usuarios desde el almacenamiento local
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si el nombre de usuario ya existe en la lista
        if (users.some(user => user.username === newUsername)) {
            this.showRegistrationStatus("El nombre de usuario ya está en uso. Por favor elige otro.");
            return;
        }

        // Crear un objeto de usuario
        const newUser = {
            username: newUsername,
            password: newPassword,
            fullName: fullName
        };

        // Agregar el nuevo usuario al array de usuarios
        users.push(newUser);
                    
        // Almacenar la lista de usuarios en el almacenamiento local
        localStorage.setItem('users', JSON.stringify(users));

        // Mostrar mensaje de éxito
        this.showRegistrationStatus("¡Registro exitoso!");

        // Cambiar el estado de inicio de sesión a true
        localStorage.setItem('isLoggedIn', 'true');
        // Guardar el nombre de usuario en el almacenamiento local
        localStorage.setItem('loggedInUser', newUsername);

        // Vaciar el formulario para que el usuario pueda ingresar nuevos datos
        this.registerForm.reset();

        // Redirigir al usuario a index.html después de un breve retraso
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }

    showRegistrationStatus(message) {
        this.registrationStatus.textContent = message;
    }
}

// Instanciar la clase para inicializar el formulario
new UserRegistration();
