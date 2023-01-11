import * as h from '../helpers';

describe('Button', () => {
  before(() => {
    h.stories.visit();
  });

  context('given internal hyperlinks are rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Buttons/Hyperlink', 'Link');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.get('a')
        .first()
        .should('contain', 'Hyperlink');
    });
  });

  context('given external hyperlinks are rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Buttons/Hyperlink', 'External Link');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.get('a')
        .first()
        .should('contain', 'External Hyperlink');
    });
  });
});
