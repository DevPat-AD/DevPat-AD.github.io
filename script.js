const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle Menu Hamburger
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Fermer le menu lors du clic sur un lien (pour mobile < 768px)
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        }
    });
});
