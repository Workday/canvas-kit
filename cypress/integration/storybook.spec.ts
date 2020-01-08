function getIframeBody($iframe: JQuery): JQuery {
  return $iframe.contents().find('body') as JQuery;
}

describe('Storybook', () => {
  it('should render the Getting Started page', () => {
    cy.visit('/');
    cy.get('iframe#storybook-preview-iframe')
      .pipe(
        getIframeBody,
        {timeout: 10000}
      )
      .should('contain', 'Workday Canvas Kit');
  });
});
