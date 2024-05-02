document.addEventListener("DOMContentLoaded", function() {
    const headerMenuBtn = document.querySelector('.js--header-menu-btn');
    const mainMenu = document.querySelector('.js--main-menu');
    const BODY = document.querySelector('body');

    function menuButtonClick() {
        mainMenu.classList.toggle('is-active');
        headerMenuBtn.classList.toggle('is-active');
        BODY.classList.toggle('overflow-hidden');
    }

    headerMenuBtn.addEventListener('click', menuButtonClick);

    window.addEventListener('resize', () => {
        mainMenu.classList.remove('is-active');
        headerMenuBtn.classList.remove('is-active');
        BODY.classList.remove('overflow-hidden');
    })
});