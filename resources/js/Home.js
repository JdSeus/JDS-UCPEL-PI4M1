export default function () { 
    $('.carousel-container').slick({
        fade: true,
        arrows: true,
        prevArrow: $('section.carousel .carousel-arrows .left'),
        nextArrow: $('section.carousel .carousel-arrows .right'),

        
    });
    console.log( $('section.carousel .carousel-arrows'));

}