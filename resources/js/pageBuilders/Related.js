import PageBuilder from './../PageBuilder.js';
import Content from './../Content.js';

export default class Related {

  static relatedBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const related = content.related;
    const general = content.general;

    const textBlock = related.content.textblock;
    const footer = general.footer;
    const copyrightAndSocial = general.copyrightAndSocial;

    pageBuilder.setPageTitle(related.title);
    pageBuilder.createMenu(menuLinks, currentRoute);
    pageBuilder.createTextBlock(textBlock.title, textBlock.subtitle, textBlock.text);
    pageBuilder.createFooter(footer.footerItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.relatedJavascript();
    }, 500);
    
  }

  static relatedJavascript() {
    
  }
}
