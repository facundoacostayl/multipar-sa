//CONTENT REVEAL

window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}

// MENU REVEAL 

const heroContent = document.querySelector('.hero-all-content');
const menuContent = document.querySelector('.hero-menu');

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    heroContent.classList.toggle("menu-mode");
    menuContent.classList.toggle("menu-active");
})


// TITLE APPEAR

const title = document.querySelector(".title-effect");
window.addEventListener("scroll", () => {
    title.style.top = Math.max(10 - 0.35*window.scrollY, -45) + "px";
});

// CURSOR EFFECT

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})