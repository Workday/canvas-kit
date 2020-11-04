import * as h from '../helpers';

describe('Side Panel', () => {
  before(() => {
    h.stories.visit();
  });

  [
    {name: 'Default', role: 'region'},
    {name: 'AsAside', role: 'complementary'},
    {name: 'AsDiv', role: 'region'},
  ].forEach(story => {
    context(`given the "${story.name}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Testing|React/Labs/Side Panel/Cypress', story.name);
      });

      const name = /Accessible Label Name/i;

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('the button', () => {
        it(`should have an accessible name`, () => {
          cy.findByRole('button', {name}).should('exist');
        });

        it(`should have an aria-expanded attribute of 'true'`, () => {
          cy.findByRole('button', {name}).should('have.attr', 'aria-expanded', 'true');
        });

        it(`should have an aria-controls attribute equal to the id of the panel`, () => {
          cy.findByRole('button', {name}).then(button => {
            const buttonAriaControlsValue = button.attr('aria-controls');
            cy.findByRole(story.role, {name}).should('have.attr', 'id', buttonAriaControlsValue);
          });
        });
      });

      it(`should have a panel with a landmark role`, () => {
        cy.findByRole(story.role, {name}).should('exist');
      });

      context('when tabbing', () => {
        beforeEach(() => {
          cy.tab();
        });

        context('the button', () => {
          it('should be focused', () => {
            cy.findByRole('button', {name}).should('have.focus');
          });
        });
      });

      context(`when collapsing the panel`, () => {
        beforeEach(() => {
          cy.findByRole('button', {name}).click();
        });

        context('the button', () => {
          it(`should have an aria-expanded attribute of 'false'`, () => {
            cy.findByRole('button', {name}).should('have.attr', 'aria-expanded', 'false');
          });
        });
      });
    });
  });
});
