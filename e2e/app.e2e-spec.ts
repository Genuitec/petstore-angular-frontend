import { PetstoreFrontend2Page } from './app.po';

describe('petstore-frontend2 App', () => {
  let page: PetstoreFrontend2Page;

  beforeEach(() => {
    page = new PetstoreFrontend2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
