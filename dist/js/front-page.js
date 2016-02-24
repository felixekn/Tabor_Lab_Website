
$( window ).load(function() {
    // Splash banner sticky variables
    var splash_height = $('.splash').outerHeight();
    var nav_height = $('.navbar').outerHeight();
    var splash_from_top =  $('.banner-placement').outerHeight(true) +
                           parseInt($('.banner-wrapper').css('padding-top').replace("px", "")) +
                           $('.navbar').outerHeight(true);
    var slide = true;

    // Updates sticky variables after a screen resize
    $(window).resize(function() {
        splash_from_top = $('.banner-placement').outerHeight(true) +
                           parseInt($('.banner-wrapper').css('padding-top').replace("px", "")) +
                           $('.navbar').outerHeight(true);
        if ($('.splash').hasClass('sticky')) {
            $('.banner-wrapper').animate({'padding-bottom': "-=" + splash_height}, 0);
            splash_height = $('.splash').outerHeight();
            $('.banner-wrapper').animate({'padding-bottom': "+=" + splash_height}, 0);
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
                $('.banner-wrapper').animate({'padding-bottom': "+=" + splash_height}, 0);
                slide = false;
            } else if (($(window).scrollTop() < (splash_from_top - nav_height)) && !slide) {
                $('.splash').removeClass('sticky');
                $('.banner-wrapper').animate({'padding-bottom': "-=" + splash_height}, 0);
                slide = true;
            }
        }
    });
});
