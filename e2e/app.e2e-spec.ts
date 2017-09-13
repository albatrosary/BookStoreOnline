import { BookStoreOnlinePage } from './app.po';

describe('book-store-online App', () => {
  let page: BookStoreOnlinePage;

  beforeEach(() => {
    page = new BookStoreOnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bso!');
  });
});
