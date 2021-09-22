import Content from './Content.js';

export default class Search { 

  Search() {
    /*
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
    */
    /*
    var search = new JsSearch.Search('isbn');
    search.addIndex('title');
    search.addIndex(['author', 'name']);
    search.addIndex('tags')
    
    search.addDocuments([theGreatGatsby, theDaVinciCode, angelsAndDemons]);
    
    console.log(search.search('The'));    // [theGreatGatsby, theDaVinciCode]
    console.log(search.search('scott'));  // [theGreatGatsby]
    console.log(search.search('dan'));    // [angelsAndDemons, theDaVinciCode]
    console.log(search.search('mystery')) // [angelsAndDemons, theDaVinciCode]
    */
    const content = new Content();

    const home = content.home;
    const about = content.about;
    const services = content.services;
    const related = content.related;
    const contact = content.contact;

    var search = new JsSearch.Search('route');
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();

    search.addIndex('title');
    search.addIndex(['content', 'textBlock', 'title']);
    //search.addIndex(['content', 'carousel', ['subtitle']]);
    //search.addIndex(['content', 'postsGallery']);

    search.addDocuments([home, about, services, related, contact]);

    console.log(search.search('o'));    // [theGreatGatsby, theDaVinciCode]
    console.log(search.search('Sobre'));  // [theGreatGatsby]
    console.log(search.search('lorem'));    // [angelsAndDemons, theDaVinciCode]
    console.log(search.search('Lorem Ipsum')) // [angelsAndDemons, theDaVinciCode]
  }

}

