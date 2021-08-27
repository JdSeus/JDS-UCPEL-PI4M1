export default function () { 
    $('section.carousel  .carousel-container').slick({
        fade: true,
        arrows: true,
        prevArrow: $('section.carousel .carousel-arrows .left'),
        nextArrow: $('section.carousel .carousel-arrows .right'), 
    });

    $('section.posts-gallery-carousel .posts-gallery-carousel-container').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('section.posts-gallery-carousel .posts-gallery-carousel-arrows .left'),
        nextArrow: $('section.posts-gallery-carousel .posts-gallery-carousel-arrows .right'), 
    });

}
