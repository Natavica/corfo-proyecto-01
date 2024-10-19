function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show-menu');
}

// Cierra el menú cuando se selecciona una opción
document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active"); // Cierra el menú
    });
});