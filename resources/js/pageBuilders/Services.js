import PageBuilder from './../PageBuilder.js';
import Content from './../Content.js';

export default class Services {

  static servicesBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const services = content.services;
    const general = content.general;

    const footer = general.footer;
    const copyrightAndSocial = general.copyrightAndSocial;

    pageBuilder.setPageTitle(services.title);
    pageBuilder.createMenu(menuLinks, currentRoute);

    pageBuilder.createFooter(footer.footerItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.servicesJavascript();
    }, 500);
    
  }

  static servicesJavascript() {
    
  }
}
