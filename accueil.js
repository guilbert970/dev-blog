const burger = document.getElementById('burger');
const navMenu = document.querySelector('.navmenu');
//Evènement pour faire apparaitre le menu
burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})