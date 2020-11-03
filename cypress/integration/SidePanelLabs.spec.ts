import * as h from '../helpers';

describe('Side Panel', () => {
  before(() => {
    h.stories.visit();
  });

  ['Default', 'AsAside', 'AsDiv'].forEach(story => {
    context(`given the "${story}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Testing|React/Labs/Side Panel/Cypress', story);
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
            switch (story) {
              case 'AsAside':
                cy.findByRole('complementary', {name}).should(
                  'have.attr',
                  'id',
                  buttonAriaControlsValue
                );
                break;
              default:
                cy.findByRole('region', {name}).should('have.attr', 'id', buttonAriaControlsValue);
            }
          });
        });
      });

      it(`should have a panel with a landmark role`, () => {
        switch (story) {
          case 'AsAside':
            cy.findByRole('complementary', {name}).should('exist');
            break;
          default:
            cy.findByRole('region', {name}).should('exist');
        }
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
