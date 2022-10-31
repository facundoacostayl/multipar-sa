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

const contactoSection = document.querySelector("#contacto-section");

$(document).on("scroll", function () {
    console.log(window.scrollY)
  if (window.scrollY < 4170) {
    $(".contacto-title").css(
      "top",
      Math.max(220 - 0.35 * (window.scrollY - 3500)) + "px"
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
