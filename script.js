// =====================================================================
// script.js - Fichier JS partagé
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links a');

    // Toggle du menu au clic sur le burger
    burgerMenu.addEventListener('click', () => {
        toggleMenu();
    });

    // Fermeture automatique du menu au clic sur un lien (sur mobile)
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            // Vérifie si le menu est ouvert et si l'écran est petit (via la classe active)
            if (navLinks.classList.contains('active') && window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    function toggleMenu() {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        // Optionnel: Gérer l'accessibilité ou le focus ici
    }
});
