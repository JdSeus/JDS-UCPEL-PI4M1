import MenuBuild from './components/menu.js';
import CarouselBuild from './components/carousel.js';
import PostsGallery from './components/postsGallery.js';

export default class PageBuilder {

    reference = "#app";

    setPageTitle = function(title) {
        document.title = title;
    }

    createMenu = function(menuLinks, route) {
        MenuBuild(menuLinks, route, this.reference);
    }

    createCarousel = function(items) {
        CarouselBuild(items, this.reference);
    }

    createPostsGallery = function(items) {
        PostsGallery(items, this.reference);
    }
}