import { TbdevelopmentCallsPage } from './app.po';

describe('tbdevelopment-calls App', () => {
  let page: TbdevelopmentCallsPage;

  beforeEach(() => {
    page = new TbdevelopmentCallsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
