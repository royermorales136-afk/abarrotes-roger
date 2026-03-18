document.addEventListener('DOMContentLoaded', function() {
    // ===== MENÚ HAMBURGUESA =====
    const menuBtn = document.querySelector('.toggle-nav');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            const expanded = navLinks.classList.contains('open');
            menuBtn.setAttribute('aria-expanded', expanded);
            menuBtn.innerHTML = expanded ? '&#10005;' : '&#9776;'; // Cambia icono
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.innerHTML = '&#9776;';
            });
        });
    }

    // ===== ACTUALIZAR AÑO EN COPYRIGHT =====
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', currentYear);
    }

    // ===== LIGHTBOX (si usas Lightbox2, ya funciona con atributos data-lightbox) =====
    // No se necesita código adicional si ya incluiste la librería.
});