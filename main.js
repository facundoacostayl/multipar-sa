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

const nav = document.querySelector("nav");
serviciosSection = document.querySelector("#servicios-section");
contactoSection = document.querySelector("#contacto-section");

window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-down", window.scrollY > 0);
})

//NAV DISABLED WHEN SECTION ON
window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-disabled", contactoSection.getBoundingClientRect().top === 0 ||  serviciosSection.getBoundingClientRect().top === 0)
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

// MODAL SLIDER

const servicioArrowLeft = document.getElementById('servicio-arrow-left');
const servicioArrowRight = document.getElementById('servicio-arrow-right');
const servicioContainer = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');

let index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    servicioContainer.style.transform = 'translateX(' + (i) * -25 + '%)';
    index = i;
  });
});


servicioArrowLeft.addEventListener('click', function () {
  index = (index > 0) ? index - 1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';
});

servicioArrowRight.addEventListener('click', function () {
  index = (index < 4 - 1) ? index + 1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';
});


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
            index = 0;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (imgId === "translados") {
            index = 1;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (imgId === "asesoramiento") {
            index = 2;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (imgId === "informacion-actualizada") {
            index = 3;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }
    })
})

closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("active")
})
