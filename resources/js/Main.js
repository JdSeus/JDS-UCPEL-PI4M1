import Vendor from './vendor/vendor.js';
import General from './General.js';
import Home from './Home.js';

export default class Main { 

static main = function() {
    Vendor();
    const pageInformation = new General();

    pageInformation.initializePage();

    if (pageInformation.route) {
        if (pageInformation.route == "Home") {
            Home();
        }
    }
}

}

