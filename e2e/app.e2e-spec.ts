import { CitbikePlannerWebPage } from './app.po';

describe('citbike-planner-web App', function() {
  let page: CitbikePlannerWebPage;

  beforeEach(() => {
    page = new CitbikePlannerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
