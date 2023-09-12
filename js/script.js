

// date

const year = document.querySelector('#year');
const thisYear = new Date();
year.textContent = thisYear.getFullYear();

// animation header

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header'); 
    header.classList.toggle('sticky', window.scrollY > 0);
});

// menu 

function toggleMenu () {
    const menuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}