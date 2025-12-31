const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scroll vers le bas : on cache la navbar
    navbar.classList.add('nav-hidden');
  } else {
    // Scroll vers le haut : on affiche la navbar
    navbar.classList.remove('nav-hidden');
  }
  lastScrollY = window.scrollY;
});

// Toggle Menu Hamburger
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Fermer le menu lors du clic sur un lien (pour mobile < 850px)
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 850) {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        }
    });
});
