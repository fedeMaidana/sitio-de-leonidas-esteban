const tablet = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');


tablet.addListener(validation)

function validation(event) {

    if (event.matches) {

        burgerButton.addEventListener('click', hideShow);

    }else {

        burgerButton.removeEventListener('click', hideShow)

    }

}

validation(tablet);

function hideShow() {

    if (menu.classList.contains('is-active')) {

        menu.classList.remove('is-active');

    }else {

        menu.classList.add('is-active');

    }

}