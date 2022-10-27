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

//IMAGES
const serviciosImages = document.querySelectorAll('.servicio-img');
//

const cursorText = document.querySelector('.cursor-text');
const cursorSpecialText = document.querySelector('.cursor-special-text');

function changeCursorText() {
    cursorText.style.display = "none"
    cursorSpecialText.style.display = "block"
    cursors.forEach(cursor => {
        cursor.style.color = "white"
    })
}

function getBackCursorText() {
    cursorText.style.display = "block"
    cursorSpecialText.style.display = "none"
    cursors.forEach(cursor => {
        cursor.style.color = "black"
    })
}

//OPEN MODAL

const popup = document.querySelector('.detalles-servicio-popup');
const closePopupBtn = document.querySelector('#btn-close-popup');
const tituloPopup = document.querySelector('.titulo-detalle');
const textoPopup = document.querySelector('.texto-detalle');

serviciosImages.forEach(img => {
    img.addEventListener("click", (e) => {
        const imgId = e.target.id;
        
        popup.classList.add("active")

        if (imgId === "practicaje") {
            popup.style.backgroundImage = "url(../img/servicios/practicaje.jpg)"
            tituloPopup.textContent = "Practicaje"
            textoPopup.textContent = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptate nobis molestiae vero et, saepe, asperiores amet laudantium
            nam repudiandae culpa dicta in tenetur sed numquam. Natus
            consequatur sunt quisquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut provident ad aliquam laudantium omnis
            officiis, iusto ex laboriosam placeat enim, hic illum a! Deserunt
            similique nesciunt delectus rem repudiandae nobis!
            `
        }

        if (imgId === "translados") {
            popup.style.backgroundImage = "url(../img/servicios/asesoramiento.jpg)"
            tituloPopup.textContent = "Translados"
            textoPopup.textContent = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptate nobis molestiae vero et, saepe, asperiores amet laudantium
            nam repudiandae culpa dicta in tenetur sed numquam. Natus
            consequatur sunt quisquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut provident ad aliquam laudantium omnis
            officiis, iusto ex laboriosam placeat enim, hic illum a! Deserunt
            similique nesciunt delectus rem repudiandae nobis!
            `
        }

        if (imgId === "asesoramiento") {
            popup.style.backgroundImage = "url(../img/servicios/translados.jpg)"
            tituloPopup.textContent = "Asesoramiento"
            textoPopup.textContent = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptate nobis molestiae vero et, saepe, asperiores amet laudantium
            nam repudiandae culpa dicta in tenetur sed numquam. Natus
            consequatur sunt quisquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut provident ad aliquam laudantium omnis
            officiis, iusto ex laboriosam placeat enim, hic illum a! Deserunt
            similique nesciunt delectus rem repudiandae nobis!
            `
        }

        if (imgId === "informacion-actualizada") {
            popup.style.backgroundImage = "url(../img/servicios/info.jpg)"
            tituloPopup.textContent = "Información Actualizada"
            textoPopup.textContent = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptate nobis molestiae vero et, saepe, asperiores amet laudantium
            nam repudiandae culpa dicta in tenetur sed numquam. Natus
            consequatur sunt quisquam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut provident ad aliquam laudantium omnis
            officiis, iusto ex laboriosam placeat enim, hic illum a! Deserunt
            similique nesciunt delectus rem repudiandae nobis!
            `
        }
    })
})

closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("active")
})