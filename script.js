// Función para mostrar los botones de inicio de sesión y ocultar el botón de cierre de sesión
function showLoginButtons() {
    document.getElementById('loginButton').style.display = 'inline';
    document.getElementById('registerButton').style.display = 'inline';
    document.getElementById('logoutButton').style.display = 'none';
}

// Función para mostrar el botón de cierre de sesión y ocultar los botones de inicio de sesión y registro
function showLogoutButton() {
    document.getElementById('loginButton').style.display = 'none';
    document.getElementById('registerButton').style.display = 'none';
    document.getElementById('logoutButton').style.display = 'inline';
}

// Manejar el evento de clic en el botón de menú
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = document.getElementById('sidebar').style.left === '0px' ? '-250px' : '0px';
});

// Verificar el estado de inicio de sesión al cargar el script
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        showLogoutButton();
    } else {
        showLoginButtons();
    }
});
