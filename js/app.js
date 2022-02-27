const topLine = document.querySelector('.top-line');
const middleLine = document.querySelector('.middle-line');
const bottomLine = document.querySelector('.bottom-line');
const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container');

hamburgerMenu.addEventListener('click', () => {
    topLine.classList.toggle('open');
    middleLine.classList.toggle('open');
    bottomLine.classList.toggle('open');
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
})