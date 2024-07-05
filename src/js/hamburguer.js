document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer')
    const menu = document.querySelector('.menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('menuActive')
        menuHamburguer.classList.toggle('hamActive');
    });
});