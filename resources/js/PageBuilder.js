import MenuBuild from './components/menu.js';
import CarouselBuild from './components/carousel.js';
import PostsGalleryBuild from './components/postsGallery.js';
import FooterBuild from './components/footer.js';
import CopyrightAndSocialBuild from './components/copyrightAndSocial.js';
import AboutBuild from './components/about.js';
import ContactBuild from './components/contact.js';

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
        PostsGalleryBuild(items, this.reference);
    }

    createFooter = function(footerItems) {
        FooterBuild(footerItems, this.reference);
    }

    createCopyrightAndSocial = function(copyright, socialmedia) {
        CopyrightAndSocialBuild(copyright, socialmedia, this.reference);
    }

    createAbout = function(aboutTitle, aboutSubtitle, aboutText) {
        AboutBuild(aboutTitle, aboutSubtitle, aboutText, this.reference);
    }

    createContact = function(contactTitle, contactSubtitle, button, contactFields) {
        ContactBuild(contactTitle, contactSubtitle, button, contactFields, this.reference);
    }
}