// Selecciona todos los enlaces en el menú
const menuLinks = document.querySelectorAll('.menu__link');

// Añade un evento 'click' a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los enlaces
        menuLinks.forEach(item => item.classList.remove('active'));
        
        // Añade la clase 'active' al enlace que fue clickeado
        link.classList.add('active');
    });
});
