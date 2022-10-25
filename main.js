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

const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-all-content');
const menuContent = document.querySelector('.hero-menu');
const hiddenSections = document.querySelectorAll('.hidden-section');

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    heroContent.classList.toggle("menu-mode");
    menuContent.classList.toggle("menu-active");

    //hero.classList.toggle("menu-active-background");

    hiddenSections.forEach(section => {
        section.classList.toggle("hidden-section-active")
    })
})

const menuLists = document.querySelectorAll('.menu-li');
menuLists.forEach(li => {
    li.addEventListener("click", () => {
        heroContent.classList.remove("menu-mode");
        menuContent.classList.remove("menu-active");

        //hero.classList.toggle("menu-active-background");

        hiddenSections.forEach(section => {
            section.classList.toggle("hidden-section-active")
        })
    })
})

//NAV EFFECT

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("nav-down", window.scrollY > 0);
})


// CURSOR EFFECT

const cursors = document.querySelectorAll('.cursor');
document.addEventListener('mousemove', (e) => {
    cursors.forEach(cursor => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    })
})

const serviciosImages = document.querySelectorAll('.servicio-img');
const cursorText = document.querySelector('.cursor-text');
const cursorSpecialText = document.querySelector('.cursor-special-text');

serviciosImages.forEach(img => {
    img.addEventListener("onmouseover", () => {
        console.log("yes")
    })
})
