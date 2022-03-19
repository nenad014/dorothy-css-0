// Carousel
/* let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('carousel-item');
    let dots = document.getElementsByClassName('carousel-dot');
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
} */

// Modal
let modal = document.getElementsByClassName('modal');
let openModalButton = document.getElementsByClassName('open-modal');
let closeModal = document.getElementsByClassName('close-modal');

[...openModalButton].forEach((btn, ind) => {
    btn.onclick = () => (modal[ind].style.display = 'block');
});
[...closeModal].forEach((close, ind) => {
    close.onclick = () => (modal[ind].style.display = 'none');
});
window.onclick = (e) => {
    [...modal].forEach((singleModal) => {
        if(e.target === singleModal) {
            singleModal.style.display = 'none';
        }
    });
}

// Navbar
const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}