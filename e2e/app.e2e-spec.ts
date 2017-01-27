import { BusinessTrackerPage } from './app.po';

describe('business-tracker App', function() {
  let page: BusinessTrackerPage;

  beforeEach(() => {
    page = new BusinessTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
