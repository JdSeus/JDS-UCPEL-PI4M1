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

    var theGreatGatsby = {
        isbn: '9781597226769',
        title: 'The Great Gatsby',
        author: {
          name: 'F. Scott Fitzgerald'
        },
        tags: ['book', 'inspirational']
      };
      var theDaVinciCode = {
        isbn: '0307474275',
        title: 'The DaVinci Code',
        author: {
          name: 'Dan Brown'
        },
        tags: ['book', 'mystery']
      };
      var angelsAndDemons = {
        isbn: '074349346X',
        title: 'Angels & Demons',
        author: {
          name: 'Dan Brown',
        },
        tags: ['book', 'mystery']
      };
      
      var search = new JsSearch.Search('isbn');
      search.addIndex('title');
      search.addIndex(['author', 'name']);
      search.addIndex('tags')
      
      search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);
      
      console.log(search.search('The'));    // [theGreatGatsby, theDaVinciCode]
      console.log(search.search('scott'));  // [theGreatGatsby]
      console.log(search.search('dan'));    // [angelsAndDemons, theDaVinciCode]
      console.log(search.search('mystery')) // [angelsAndDemons, theDaVinciCode]
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

