function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Cierra el menú cuando se selecciona una opción
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active"); // Cierra el menú
    });
});