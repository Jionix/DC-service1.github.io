$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        speed: 800,
        easing: 'ease',
        infinite: true,
        autoplay: true,
    });
});

$(document).ready(function(){
    $('.clients_slider').slick({
        arrows: false,
        dots: false,
        speed: 800,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});