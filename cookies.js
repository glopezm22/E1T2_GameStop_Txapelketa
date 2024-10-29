// Función para establecer una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para leer una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Función para eliminar una cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Función para aceptar cookies y establecer cookies de ejemplo
function acceptCookies() {
    setCookie("cookiesAccepted", "true", 30); // Dura 30 días
    document.getElementById("cookieConsent").style.display = "none";
    
    // Establecer cookies reales
    setCookie("session_id", "ABC123456", 7);         // Cookie de sesión
    setCookie("preferred_language", "es", 30);       // Preferencia de idioma
    setCookie("theme", "dark", 30);                  // Preferencia de tema
    setCookie("remember_login", "true", 7);          // Recordar login
}

// Mostrar el aviso de cookies si el usuario no ha aceptado previamente
window.onload = function() {
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("cookieConsent").style.display = "block";
    }
};
