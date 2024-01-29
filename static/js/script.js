window.onload = function () {
    const menu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
    
    menu.addEventListener("click", burgerMenuEvent);

    function burgerMenuEvent(event) {
        menu.classList.toggle('_active');
        navbar.classList.toggle('_active');
    }
}