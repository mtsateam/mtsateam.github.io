import { WebsiteSeventeenPage } from './app.po';

describe('website-seventeen App', () => {
  let page: WebsiteSeventeenPage;

  beforeEach(() => {
    page = new WebsiteSeventeenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
