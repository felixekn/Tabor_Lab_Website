
$( window ).load(function() {
    // Splash banner sticky variables
    var splash_height = $('.splash').outerHeight();
    var nav_height = $('.navbar').outerHeight();
    var splash_from_top = $('.navbar').outerHeight(true) +
                          $('.banner-placement').outerHeight(true);
    var slide = true;

    // Updates sticky variables after a screen resize
    $(window).resize(function() {
        splash_from_top = $('.navbar').outerHeight(true) +
                          $('.banner-placement').outerHeight(true);
        if ($('.splash').hasClass('sticky')) {
            $('.text').animate({marginTop: "-=" + splash_height}, 0);
            splash_height = $('.splash').outerHeight();
            $('.text').animate({marginTop: "+=" + splash_height}, 0);
            // $('.splash').css("width", "100%");
        } else {
            console.log("Margin Same")
            splash_height = $('.splash').outerHeight();
        }
    });

    // Splash banner sticks below nav when the splash banner is scrolled past the nav
    //  Will not stick splash banner on mobile or when screen size is reduced to mobile size
    $(window).scroll(function() {
        if ($(window).width() > 768 || !slide) {
            if (($(window).scrollTop() >= (splash_from_top - nav_height)) && slide) {
                $('.splash').addClass('sticky');
            	$('.text').animate({marginTop: "+=" + splash_height}, 0);
            	slide = false;
            } else if (($(window).scrollTop() < (splash_from_top - nav_height)) && !slide) {
                $('.splash').removeClass('sticky');
            	$('.text').animate({marginTop: "-=" + splash_height}, 0);
            	slide = true;
            }
        }
    });
});
