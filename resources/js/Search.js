import Content from './Content.js';

export default class Search { 

  Search(string) {

    const content = new Content();

    const home = content.home;
    const about = content.about;
    const services = content.services;
    const related = content.related;
    const contact = content.contact;

    var page = new JsSearch.Search('route');
    var text = new JsSearch.Search('route');

    page.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    text.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();

    page.addIndex('title');

    text.addIndex(['content', 'textblock', 'title'])
    text.addIndex(['content', 'textblock', 'subtitle'])

    page.addDocuments([home, about, services, related, contact]);
    text.addDocuments([home, about, services, related, contact]);

    var result = page.search(string);
    if (result && result.length > 0) {
      return result;
    } 

    result = text.search(string);
    if (result && result.length > 0) {
      return result;
    } 

    return [{route: "noresults"}];

  }

}

