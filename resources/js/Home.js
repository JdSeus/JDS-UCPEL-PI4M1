import PageBuilder from './PageBuilder.js';
import Content from './Content.js';

export default class Home {

  static homeBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const home = content.home;

    pageBuilder.setPageTitle(home.title);
    pageBuilder.createMenu(menuLinks, currentRoute);

    console.log(home);

    this.homeJavascript();
  }

  static homeJavascript() {
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
