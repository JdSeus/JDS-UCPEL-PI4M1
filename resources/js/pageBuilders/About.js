import PageBuilder from './../PageBuilder.js';
import Content from './../Content.js';

export default class About {

  static aboutBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const about = content.about;
    const general = content.general;

    const textBlock = about.content.textblock;
    const footer = general.footer;
    const copyrightAndSocial = general.copyrightAndSocial;

    pageBuilder.setPageTitle(about.title);
    pageBuilder.createMenu(menuLinks, currentRoute);
    pageBuilder.createAbout(textBlock.title, textBlock.subtitle, textBlock.text);
    pageBuilder.createFooter(footer.footerItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.aboutJavascript();
    }, 500);
    
  }

  static aboutJavascript() {
    
  }
}
