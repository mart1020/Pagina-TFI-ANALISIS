/* --- app.js --- */

// Esperar a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Lógica para resaltar el link activo en el menú
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // 2. (Opcional) Cerrar menú móvil automáticamente al hacer click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    if(menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                if(menuToggle.classList.contains('show')){
                    bsCollapse.toggle();
                }
            })
        })
    }
});

/* --- app.js --- */

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.scroll-hidden');

    for (var i = 0; i < reveals.length; i++) {
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            // Si entra en pantalla: SE MUESTRA
            reveals[i].classList.add('scroll-visible');
        } else {
            // Si sale de pantalla (o subes el scroll): SE OCULTA DE NUEVO
            reveals[i].classList.remove('scroll-visible');
        }
    }
}