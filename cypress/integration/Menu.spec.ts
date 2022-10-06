import * as h from '../helpers';

describe('Menu', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the [Components/Popups/Menu/React, Basic] story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Menu/React', 'Basic');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should have aria-haspopup set to true', () => {
      cy.findByRole('button', {name: 'Open Menu'}).should('have.attr', 'aria-haspopup', 'true');
    });

    it('should have aria-expanded set to false', () => {
      cy.findByRole('button', {name: 'Open Menu'}).should('have.attr', 'aria-expanded', 'false');
    });

    it('should not show a menu', () => {
      cy.findByRole('menu').should('not.exist');
    });

    context('when the "Open Menu" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Menu'}).click();
      });

      it('should set aria-expanded to true', () => {
        cy.findByRole('button', {name: 'Open Menu'}).should('have.attr', 'aria-expanded', 'true');
      });

      it('should show menu', () => {
        cy.findByRole('menu').should('be.visible');
      });

      it('should transfer focus to the first menu item', () => {
        cy.findByRole('menuitem', {name: 'First Item'}).should('have.focus');
      });

      context('when escape key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{esc}');
        });

        it('should have aria-expanded set to false', () => {
          cy.findByRole('button', {name: 'Open Menu'}).should(
            'have.attr',
            'aria-expanded',
            'false'
          );
        });

        it('should not show a menu', () => {
          cy.findByRole('menu').should('not.exist');
        });

        it('return focus to the "Open Menu" button', () => {
          cy.findByRole('button', {name: 'Open Menu'}).should('have.focus');
        });
      });

      context('when down arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{downarrow}');
        });

        it('should transfer focus to the second item', () => {
          cy.findByRole('menuitem', {name: 'Second Item'}).should('have.focus');
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{enter}');
          });

          it('should have aria-expanded set to false', () => {
            cy.findByRole('button', {name: 'Open Menu'}).should(
              'have.attr',
              'aria-expanded',
              'false'
            );
          });

          it('should not show a menu', () => {
            cy.findByRole('menu').should('not.exist');
          });

          it('should select the second item', () => {
            cy.findByTestId('output').should('contain', '1');
          });
        });
      });

      context('when the second item is clicked', () => {
        beforeEach(() => {
          cy.findByRole('menuitem', {name: 'Second Item'}).click();
        });

        it('should have aria-expanded set to false', () => {
          cy.findByRole('button', {name: 'Open Menu'}).should(
            'have.attr',
            'aria-expanded',
            'false'
          );
        });

        it('should not show a menu', () => {
          cy.findByRole('menu').should('not.exist');
        });

        it('should select the second item', () => {
          cy.findByTestId('output').should('contain', '1');
        });
      });

      context('when the tab key is pressed', () => {
        beforeEach(() => {
          cy.focused().tab();
        });

        it('should have aria-expanded set to false', () => {
          cy.findByRole('button', {name: 'Open Menu'}).should(
            'have.attr',
            'aria-expanded',
            'false'
          );
        });

        it('should not show a menu', () => {
          cy.findByRole('menu').should('not.exist');
        });
      });

      context('when the user types a printable character "t"', () => {
        beforeEach(() => {
          cy.focused().type('t');
        });

        it.skip('should focus on the third item', () => {
          cy.findByRole('menuitem', {name: 'Third Item'}).should('have.focus');
        });
      });

      context('when up arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{uparrow}');
        });

        it('should focus on the last option', () => {
          cy.findByRole('menuitem', {name: 'Fourth Item'}).should('have.focus');
        });
      });
    });
  });
});
