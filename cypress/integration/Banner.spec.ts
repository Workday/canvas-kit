import * as h from '../helpers';

describe('Banner', () => {
  before(() => {
    h.stories.visit();
  });

  ['Error', 'Sticky'].forEach(story => {
    context(`given the [Components/Indicators/Banner, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Indicators/Banner', story);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "button"', () => {
        cy.findByRole('button').should('be.visible');
      });
    });
  });
});
