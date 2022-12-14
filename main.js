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
const footerSection = document.querySelector("#footer-section");

window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-down", window.scrollY > 0);
})

//NAV DISABLED WHEN SECTION ON
window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-disabled", contactoSection.getBoundingClientRect().top === 0 ||  serviciosSection.getBoundingClientRect().top === 0 || footerSection.getBoundingClientRect().top === 0)
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
const popupContainer = document.querySelector('.popup-container');
const backdropPopup = document.querySelector('.popup-backdrop');
const closePopupBtn = document.querySelector('#btn-close-popup');
const tituloPopup = document.querySelector('.titulo-detalle');
const textoPopup = document.querySelector('.texto-detalle');

const overlayButtons = document.querySelectorAll('.overlay-button');


serviciosImages.forEach(img => {
    img.addEventListener("click", (e) => {
        const imgId = e.target.id;
        console.log(e.target.id)
        
        popup.classList.add("active")
        popupContainer.classList.add("active");

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

overlayButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonId = e.target.id;
        console.log(e.target.id)
        
        popup.classList.add("active")
        popupContainer.classList.add("active");

        if (buttonId === "practicaje-button") {
            index = 0;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (buttonId === "translados-button") {
            index = 1;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (buttonId === "asesoramiento-button") {
            index = 2;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }

        if (buttonId === "informacion-actualizada-button") {
            index = 3;
            document.querySelector('.control .selected').classList.remove('selected');
            indicatorParent.children[index].classList.add('selected');
            servicioContainer.style.transform = 'translateX(' + (index) * -25 + '%)';

        }
    })
})

closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    popupContainer.classList.remove("active");
})

backdropPopup.addEventListener("click", () => {
    console.log("now")
    popup.classList.remove("active");
    popupContainer.classList.remove("active");
})


// ARROW TOP APPEARS AND DISAPPEARS

const arrowUp = document.querySelector('#arrow-up');
const aboutSection = document.querySelector('#about-section');
const headerSection = document.querySelector('#header-section');

window.addEventListener("scroll", () => {
    if(aboutSection.getBoundingClientRect().top < 500) {
        arrowUp.classList.add("arrow-up-active");
    }else if (aboutSection.getBoundingClientRect().top > 500) {
        arrowUp.classList.remove("arrow-up-active");
    }
})

//HERO ARROW ANIMATION

const heroArrow = document.querySelector('#hero-arrow');

window.addEventListener("click", () => {
    if(headerSection.getBoundingClientRect().top === 0) {
        heroArrow.classList.add("animation-active")
        console.log("now")
    }
});

//FOOTER ANIMATION

const radioIcon = document.querySelector('#radio-footer-img');

window.addEventListener("scroll", () => {
    if(contactoSection.getBoundingClientRect().top < 0) {
        radioIcon.classList.add("animation-active");
        console.log("now")
    } else if(contactoSection.getBoundingClientRect().top >= 0) {
        radioIcon.classList.remove("animation-active");
    }
})

// CONTACTO FORM VALIDATIONS

const nameInput = document.querySelector('#name');
const empresaInput = document.querySelector('#empresa');
const telefonoInput = document.querySelector('#telefono');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

//FORM POPUP ACCEPT BUTTON

const formSubmittedConfirmationPopup = document.querySelector('.popup-submitted');
const popupAcceptButton = document.querySelector('#submit-popup-accept-button');
popupAcceptButton.addEventListener('click', () => {
    formSubmittedConfirmationPopup.style.display="none";
})

const popupText = document.querySelector('.popup-text-details');
if(popupText.children.length > 0) {
    formSubmittedConfirmationPopup.style.display="block";
}
