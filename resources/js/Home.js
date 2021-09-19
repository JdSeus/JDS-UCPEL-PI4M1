import PageBuilder from './PageBuilder.js';
import Content from './Content.js';

export default class Home {

  static homeBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const home = content.home;
    const general = content.general;

    const carouselItems = home.content.carousel;
    const postsGalleryItems = home.content.postsGallery;
    const copyrightAndSocial = general.copyrightAndSocial;

    pageBuilder.setPageTitle(home.title);
    pageBuilder.createMenu(menuLinks, currentRoute);
    pageBuilder.createCarousel(carouselItems);
    pageBuilder.createPostsGallery(postsGalleryItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.homeJavascript();
    }, 500);
    
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

  }
}
