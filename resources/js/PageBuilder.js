import MenuBuild from './components/Menu.js';
import CarouselBuild from './components/Carousel.js';
import PostsGalleryBuild from './components/PostsGallery.js';
import FooterBuild from './components/Footer.js';
import CopyrightAndSocialBuild from './components/CopyrightAndSocial.js';
import AboutBuild from './components/About.js';
import TextBlockBuild from './components/TextBlock.js';
import ContactBuild from './components/Contact.js';

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

    createTextBlock = function(blockTitle, blockSubtitle, blockText) {
        TextBlockBuild(blockTitle, blockSubtitle, blockText, this.reference);
    }

    createAbout = function(aboutTitle, aboutSubtitle, aboutText) {
        AboutBuild(aboutTitle, aboutSubtitle, aboutText, this.reference);
    }

    createContact = function(contactTitle, contactSubtitle, button, contactFields) {
        ContactBuild(contactTitle, contactSubtitle, button, contactFields, this.reference);
    }
}