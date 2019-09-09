describe('Button', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=button--primary');
  });

  it('should render a large primary button', () => {
    cy.get('button')
      .first()
      .should('contain', 'Primary Button');
  });
});
