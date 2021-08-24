/* eslint-disable compat/compat */
function getIframeBody($iframe: JQuery): JQuery {
  return $iframe.contents().find('body') as JQuery;
}

describe('Storybook', () => {
  it('should render the Getting Started page', () => {
    cy.visit('/');
    cy.get('iframe#storybook-preview-iframe')
      .pipe(getIframeBody, {timeout: 20000})
      .should('contain', 'Workday Canvas Kit');
  });

  context('routes', () => {
    it('should contain valid story ids', () => {
      // if this test fails, it means the routes in `routes.js` contains a Storybook link that is
      // not valid. You can find valid stories by typing the following in an `iframe.html` console:
      // `__STORYBOOK_STORY_STORE__.extract()`. This will give all the stories registered.
      cy.visit('/iframe.html');
      cy.window().then((win: any) => {
        const routes: Record<string, string> = win.__routes;
        const stories: Record<string, unknown> = win.__STORYBOOK_STORY_STORE__.extract({
          includeDocsOnly: true,
        });

        const storybookRoutes = Object.values(routes);
        const storybookStories = Object.keys(stories);

        storybookRoutes.forEach(route => {
          expect(storybookStories).to.include(route);
        });
      });
    });
  });
});
