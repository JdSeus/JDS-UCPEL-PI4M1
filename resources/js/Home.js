import PageConstructor from './PageConstructor.js';

export default class Home {

  static homeBuilder() {

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
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

    console.log("Home buildada")

  }
}
