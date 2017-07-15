import { browser, element, by } from 'protractor';

export class RpgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rpg-root h1')).getText();
  }
}
