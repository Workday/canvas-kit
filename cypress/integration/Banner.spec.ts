import * as h from '../helpers';

describe('Banner', () => {
  before(() => {
    h.stories.visit();
  });

  ['Error', 'Sticky'].forEach(story => {
    context(`given the [Components/Indicators/Banner/React, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Indicators/Banner/React', story);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "button"', () => {
        cy.findByRole('button').should('be.visible');
      });

      it('should have an "aria-labelledby" that matches the action', () => {
        cy.findByRole('button').then($button => {
          const id = $button.attr('aria-labelledby');
          cy.findByText('View All').should('have.attr', 'id', id);
        });
      });

      it('should have an "aria-describedby" that matches the label', () => {
        cy.findByRole('button').then($button => {
          const id = $button.attr('aria-describedby');
          cy.findByText('3 Errors').should('have.attr', 'id', id);
        });
      });
    });
  });
});
