// logout.js
// Función para cerrar sesión
function logout() {
    //Pasa a falso.
    localStorage.setItem('isLoggedIn', 'false');
    // Se borra el contenido de la variable que nos servirá pa más tarde.
    localStorage.removeItem('loggedInUser');
    // Se muestran los botones de inicio de sesión y registro
    document.getElementById('loginButton').style.display = 'inline';
    document.getElementById('registerButton').style.display = 'inline';
    // Oculta el botón de cerrar sesión
    document.getElementById('logoutButton').style.display = 'none';
    // Redirigir al usuario a la página de inicio
    window.location.href = "index.html";
}
