import * as h from '../helpers';

describe('Button', () => {
  before(() => {
    h.stories.visit();
  });

  context('given internal hyperlinks are rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Buttons/Hyperlink/React', 'Link');
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
      h.stories.load('Components/Buttons/Hyperlink/React', 'External Link');
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
