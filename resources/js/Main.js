import Vendor from './vendor/vendor.js';
import JdsParallax from './vendor/JdsParallax.js';
import Router from './Router.js';
import General from './General.js';
//import Home from './Home.js';

export default class Main { 

static main = function() {
    Vendor();

    var router = new Router();
    router.initializePage();
    
    JdsParallax();
    /*
    Vendor();
    const pageInformation = new General();

    pageInformation.initializePage();

    if (pageInformation.route) {
        if (pageInformation.route == "Home") {
            Home();
        }
    }
    */
/*
    const content = new Content();
    console.log(content.appInformation);
    console.log(content.home);

    const pageBuilder = new PageConstructor();
    pageBuilder.createMenu("nada");
    */
}

}

