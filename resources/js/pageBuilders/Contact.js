import PageBuilder from './../PageBuilder.js';
import Content from './../Content.js';

export default class Contact {

  static contactBuilder(currentRoute) {

    const content = new Content();
    const pageBuilder = new PageBuilder();

    const menuLinks = content.menuLinks;
    const contact = content.contact;
    const general = content.general;

    const contactForm = contact.content.form;
    const footer = general.footer;
    const copyrightAndSocial = general.copyrightAndSocial;
    

    pageBuilder.setPageTitle(contact.title);
    pageBuilder.createMenu(menuLinks, currentRoute);
    pageBuilder.createContact(contactForm.title, contactForm.subtitle, contactForm.button, contactForm.fields);
    pageBuilder.createFooter(footer.footerItems);
    pageBuilder.createCopyrightAndSocial(copyrightAndSocial.copyright, copyrightAndSocial.socialmedia);

    setTimeout(() => {
      this.contactJavascript();
    }, 500);
    
  }

  static contactJavascript() {
    
  }
}
