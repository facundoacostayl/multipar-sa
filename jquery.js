/*$(document).on('scroll', function() { 
    $('.title-effect').css("top", Math.max(10 - 0.35*window.scrollY, -45) + "px"); 
})*/

$(window).scroll(function() {
    const scroll = $(window).scrollTop();
    console.log(scroll)
})

// SERVICIOS IMAGES ZOOM EFFECT

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        $('.zoom img').css({
            width: (100 + (scroll - 1450) / 50) + "%"
        })
    })


// TITLE PARALLAX EFFECT ON (Y Position 3492)

    $(document).on('scroll', function() {
        if(window.scrollY < 4160){
            $('.contacto-title').css("bottom", Math.max(-200 + 0.35*(window.scrollY - 3500)) + "px")
        }
    })