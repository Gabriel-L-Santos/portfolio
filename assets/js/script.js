// Menu Hamburguer

const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

menuHamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
});

links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Initialize Swiper

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

function createSwiper(container, pagination, nextButton, prevButton) {
    return new Swiper(container, {
        slidesPerView: handleWidth(),
        spaceBetween: 30,
        pagination: {
            el: pagination,
            clickable: true,
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
    });
}

// Ajustar os slides do Swiper de acordo com a resolução da página

function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;

    if (getWidth < 1001) {
        slideShow = 2;
    }

    if (getWidth < 700) {
        slideShow = 1;
    }

    return slideShow;
}

window.addEventListener('resize', () => {
    swiper.params.slidesPerView = handleWidth();
    swiper.update();
});

// Efeito fade-in scroll da página

let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }

});   
