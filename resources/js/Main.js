import Vendor from './vendor/vendor.js';
import General from './General.js';
import Home from './Home.js';
import Content from './Content.js';
import PageConstructor from './PageConstructor.js';

export default class Main { 

static main = function() {
    Vendor();
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

    const content = new Content();
    console.log(content.appInformation);
    console.log(content.home);

    const pageBuilder = new PageConstructor();
    pageBuilder.createMenu("nada");
}

}

