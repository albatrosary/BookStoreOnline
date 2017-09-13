import { browser, by, element } from 'protractor';

export class BookStoreOnlinePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bso-root h1')).getText();
  }
}
