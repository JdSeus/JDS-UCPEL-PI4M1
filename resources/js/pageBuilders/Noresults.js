import PageBuilder from './../PageBuilder.js';
import Content from './../Content.js';

export default class Noresults {

  static noresultsBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const noresults = content.noresults;
    const general = content.general;

    const textBlock = noresults.content.textblock;
    const footer = general.footer;
    const copyrightAndSocial = general.copyrightAndSocial;

    pageBuilder.setPageTitle(noresults.title);
    pageBuilder.createMenu(menuLinks, currentRoute);
    pageBuilder.createTextBlock(textBlock.title, textBlock.subtitle, textBlock.text);
    pageBuilder.createFooter(footer.footerItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.noresultsJavascript();
    }, 500);
    
  }

  static noresultsJavascript() {
    
  }
}
