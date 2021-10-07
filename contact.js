const burger = document.getElementById('burger');
const navMenu = document.querySelector('.navmenu');
//Evènement pour faire apparaitre le menu
burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})
document.getElementById('form').addEventListener('submit', function(event) {
    document.getElementById('open-modal').style.display = "block";
    document.querySelector('header').style.display = "none";
    event.preventDefault();
    
});
    document.getElementById('close').addEventListener('click', function() {
        document.getElementById('open-modal').style.display = "none";
        document.querySelector('header').style.display = "flex";
    });

    

