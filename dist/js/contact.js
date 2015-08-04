// Resize Google Map height to that of its width
var cw = $('.map').width();
$('.map').css({'height':cw+'px'});

$(window).resize(function() {
    cw = $('.map').width();
    $('.map').css({'height':cw+'px'});
});