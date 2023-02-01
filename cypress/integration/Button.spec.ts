import * as h from '../helpers';

describe('Button', () => {
  before(() => {
    h.stories.visit();
  });

  context('given primary buttons are rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Buttons', 'Primary');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.findAllByRole('button', {name: 'Primary'})
        .first()
        .should('contain', 'Primary');
    });
  });

  context('given delete buttons are rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Buttons', 'DeleteStory');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render the correct text', () => {
      cy.findByRole('button', {name: 'Click Me'}).should('contain', 'Click Me');
    });
  });
});
