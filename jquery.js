/*$(document).on('scroll', function() { 
    $('.title-effect').css("top", Math.max(10 - 0.35*window.scrollY, -45) + "px"); 
})*/

// SERVICIOS IMAGES ZOOM EFFECT

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  $(".zoom img").css({
    width: 100 + (scroll - 1450) / 50 + "%",
  });
});

// TITLE PARALLAX EFFECT ON (CONTACT: Y Position 3492) (SERVICIOS TOP -20%)

const standardMobile = window.matchMedia("(min-height: 736px)");
const bigStandardMobile = window.matchMedia("(min-height: 850px)");
const mediumWindow = window.matchMedia("(min-width: 540px)");
const desktopWindow = window.matchMedia("(min-width: 768px)");
const contactoSection = document.querySelector("#contacto-section");


  $(document).on("scroll", function () {
  if (window.scrollY < 3061) {
    $(".contacto-title").css(
      "top",
      Math.max(100 - 0.35 * (window.scrollY - 2881)) + "px"
    );
  }
});

$(document).on("scroll", function () {
  if (window.scrollY < 1350) {
    $(".servicios-title").css(
      "top",
      Math.max(100 - 0.35 * (window.scrollY - 865)) + "px"
    );
  }
});



if(standardMobile.matches) {
  $(document).on("scroll", function () {
  if (window.scrollY < 3600) {
    $(".contacto-title").css(
      "top",
      Math.max(220 - 0.35 * (window.scrollY - 3100)) + "px"
    );
  }
});
}

if(bigStandardMobile.matches) {
  if (window.scrollY < 4067) {
    $(".contacto-title").css(
      "top",
      Math.max(220 - 0.35 * (window.scrollY - 3674)) + "px"
    );
  }
}

if(mediumWindow.matches) {
  $(document).on("scroll", function () {
  if (window.scrollY < 3473) {
    $(".contacto-title").css(
      "top",
      Math.max(220 - 0.35 * (window.scrollY - 2973)) + "px"
    );
  }
});


$(document).on("scroll", function () {
  if (window.scrollY < 1525) {
    $(".servicios-title").css(
      "top",
      Math.max(100 - 0.35 * (window.scrollY - 1175)) + "px"
    );
  }
});

}

if(desktopWindow.matches) {
  $(document).on("scroll", function () {
  if (window.scrollY < 4170) {
    $(".contacto-title").css(
      "top",
      Math.max(220 - 0.35 * (window.scrollY - 3500)) + "px"
    );
  }
});
}