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


// TITLE PARALLAX EFFECT ON (CONTACT: Y Position 3492) (SERVICIOS TOP -20%)

    $(document).on('scroll', function() {
        if(window.scrollY < 4300){
            $('.contacto-title').css("bottom", Math.max(-200 + 0.35*(window.scrollY - 3675)) + "px")
        }
    })

    $(document).on('scroll', function() {
        if(window.scrollY < 1470){
            $('.servicios-title').css("top", Math.max(100 - 0.35*(window.scrollY - 1175)) + "px")
        }
    })