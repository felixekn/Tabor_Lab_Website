// Stick and unstick News and Press navigation column (Archive Menu)
var nav_height = $('.navbar').outerHeight();
var sidebar_position = $('.blog-sidebar').offset().top;
var sidebar_width = $('.blog-sidebar').width();
var slide = true;

// Archive menu sticks below nav when the archive menu is scrolled past the nav
$(window).scroll(function() {
    if (($(window).scrollTop() >= (sidebar_position - nav_height)) && slide) {
        $('sidebar-module').addClass('affix');
        // $('.sidebar').css("width", "sidebar_width");
        slide = false;
    } else if (($(window).scrollTop() < (sidebar_position - nav_height)) && !slide) {
        console.log("removed sticky")
        $('sidebar-module').removeClass('affix');
        // $('.sidebar').animate({width: sidebar_width}, 0);
        slide = true;
    }
});






// $(window).scroll(function() {
//     if ($(window).scrollTop() > nav_height) {
//         $('.sidebar').addClass('sticky');
// 		if (slide) {
//         	$('.sidebar').animate({left: "+=" + (sidebar_position["left"])}, 0);
//         	slide = false;
//         }
//     } else {
//         $('.sidebar').removeClass('sticky');
//         if (!slide) {
//         	$('.sidebar').animate({left: "-=" + sidebar_position["left"]}, 0);
//         	slide = true;
//         }
//     }
// });


// // Splash banner sticky variables
// var splash_height = $('.splash').outerHeight();

// var splash_from_top = $('.splash').offset().top;
// var slide = true;

// // Updates sticky variables
// $(window).resize(function() {
//     splash_height = $('.splash').outerHeight();
//     nav_height = $('.navbar-header').height();
//     splash_from_top = $('.splash').offset().top;
// });

// // Splash banner sticks below nav when the splash banner is scrolled past the nav
// $(window).scroll(function() {
//     if ($(window).scrollTop() >= (splash_from_top - nav_height)) {
//         $('.splash').addClass('sticky');
//         if (slide) {
//             $('.body-text').animate({marginTop: "+=" + splash_height}, 0);
//             slide = false;
//         }
//     } else {
//         $('.splash').removeClass('sticky');
//         if (!slide) {
//             $('.body-text').animate({marginTop: "-=" + splash_height}, 0);
//             slide = true;
//         }
//     }
// });