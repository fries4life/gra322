$('.menu-button').click(function () {
    $('nav').toggleClass('open');
});

AOS.init();

$('.jarallax').jarallax({
    speed: 0.5,
});


var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});


var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    mouseDrag: false,
  });