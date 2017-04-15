import { ApocalizerPage } from './app.po';

describe('apocalizer App', () => {
  let page: ApocalizerPage;

  beforeEach(() => {
    page = new ApocalizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
