// burger

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burgerMenu');
burger.addEventListener('click', function(e){
    burger.classList.toggle("burger__opened");
    burgerMenu.classList.toggle('burgerMenu__none');
});