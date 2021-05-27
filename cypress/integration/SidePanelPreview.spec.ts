import * as h from '../helpers';

describe('Side Panel', () => {
  before(() => {
    h.stories.visit();
  });

  const name = /Accessible Label Name/i;

  [
    {name: 'Default', role: 'region'},
    {name: 'AsAside', role: 'complementary'},
    {name: 'AsDiv', role: 'region'},
  ].forEach(story => {
    context(`given the "${story.name}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Testing|React/Preview/Side Panel/Cypress', story.name);
      });

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

  describe(`given the 'first focusable' story is rendered`, () => {
    context(`when focused on a focusable element preceding the Side Panel`, () => {
      beforeEach(() => {
        h.stories.load('Testing|React/Preview/Side Panel/Cypress', 'First Focusable');
        cy.findByLabelText('Avatar').focus();
      });

      context('when the tab key is pressed once', () => {
        beforeEach(() => {
          cy.tab();
        });

        context('the expand/collapse control button', () => {
          it(`should be focused first`, () => {
            cy.findByRole('button', {name}).should('have.focus');
          });
        });
      });
    });
  });
});
