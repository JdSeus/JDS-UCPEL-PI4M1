import Vendor from './vendor/vendor.js';
import JdsParallax from './vendor/JdsParallax.js';
import Router from './Router.js';
import General from './General.js';
import Search from './Search.js';
//import Home from './Home.js';

export default class Main { 

static main = function() {
    Vendor();

    var router = new Router();
    router.initializePage();
    
    JdsParallax();

    
    
    console.log();

    $('#searchinput').keydown(function() {
      if(event.key === 'Enter') {
        var input = $(this).val();
        $(this).val('');

        var search = new Search();
        var searchResult = search.Search(input);

        if (searchResult && searchResult.length > 0) {
          var routeOfSearch = searchResult[0].route;
          window.location.href = `./${routeOfSearch}.html`;
        }
        
    }
    });


}

}

