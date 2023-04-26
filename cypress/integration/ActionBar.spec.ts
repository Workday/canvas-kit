import * as h from '../helpers';

describe('Action Bar', () => {
  before(() => {
    h.stories.visit();
  });

  context(
    'when [Components/Buttons/Action Bar, Overflow Action Bar Custom Button Count] story is rendered',
    () => {
      beforeEach(() => {
        h.stories.load('Components/Buttons/Action Bar', 'Overflow Action Bar Custom Button Count');
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have 3 visible buttons inside the "actions"', () => {
        cy.findByLabelText('actions')
          .findAllByRole('button')
          .should('have.length', 3);
      });

      it('should focus on the "More" button', () => {
        cy.findByRole('button', {name: 'More actions'}).should('be.visible');
      });

      it('should have button inside the "menu"', () => {
        cy.findByRole('button', {name: 'More actions'}).click();
        cy.findByRole('menu')
          .findAllByRole('menuitem')
          .should('have.length', 1);
      });
    }
  );
});
