import { NgTutorialPage } from './app.po';

describe('ng-tutorial App', function() {
  let page: NgTutorialPage;

  beforeEach(() => {
    page = new NgTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
