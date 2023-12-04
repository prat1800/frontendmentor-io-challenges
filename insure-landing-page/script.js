const btnMenu = document.querySelector('.menu-links');
const iconImg = document.querySelector('.menu-links img');
const sideMenu = document.querySelector('.nav-links');


btnMenu.addEventListener('click', function () {
    sideMenu.classList.toggle('show-menu');
    if (sideMenu.classList.contains('show-menu')) {
        iconImg.src = "./images/icon-close.svg";
    } else {
        iconImg.src = "./images/icon-hamburger.svg";
    }
});
