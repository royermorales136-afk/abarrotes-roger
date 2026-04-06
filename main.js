document.addEventListener('DOMContentLoaded', function() {
    // ===== MENÚ HAMBURGUESA =====
    const menuBtn = document.querySelector('.toggle-nav');
    const navLinks = document.querySelector('.nav-links');

    function closeMenu() {
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Abrir menú');
            menuBtn.innerHTML = '&#9776;';
        }
    }

    function toggleMenu() {
        if (!navLinks) return;
        const expanded = !navLinks.classList.contains('open');
        navLinks.classList.toggle('open', expanded);
        menuBtn.setAttribute('aria-expanded', expanded);
        menuBtn.setAttribute('aria-label', expanded ? 'Cerrar menú' : 'Abrir menú');
        menuBtn.innerHTML = expanded ? '&#10005;' : '&#9776;';
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', toggleMenu);

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (navLinks.classList.contains('open') && 
                !navLinks.contains(event.target) && 
                !menuBtn.contains(event.target)) {
                closeMenu();
            }
        });

        // Cerrar menú al redimensionar a escritorio
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

    // ===== ACTUALIZAR AÑO EN COPYRIGHT (usando ID específico) =====
    const copyright = document.getElementById('copyright');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.innerHTML = copyright.innerHTML.replace('2025', currentYear);
    }

    // ===== CONFIGURAR LIGHTBOX2 =====
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'fitImagesInViewport': true
        });
    }

    // ===== ELIMINAR target="_blank" DE ENLACES CON data-lightbox =====
    // Esto evita que se abra una pestaña nueva además del lightbox
    document.querySelectorAll('a[data-lightbox]').forEach(link => {
        if (link.getAttribute('target') === '_blank') {
            link.removeAttribute('target');
        }
    });
});
