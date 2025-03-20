import {Basic} from '../../modules/react/menu/stories/examples/Basic';
import {MenuWithFallbackPlacements} from '../../modules/react/menu/stories/examples/MenuWithFallbackPlacements';

describe('Menu', () => {
  context(`given the [Components/Popups/Menu, Basic] story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
      cy.wait(150);
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

      it('should have aria-disabled=true', () => {
        cy.findByRole('menuitem', {name: 'Fourth Item'}).should(
          'have.attr',
          'aria-disabled',
          'true'
        );
      });

      context('when escape key is pressed', () => {
        beforeEach(() => {
          cy.focused().realType('{esc}');
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
          cy.findByRole('menuitem', {name: 'First Item'}).should('be.focused');
          cy.focused().realType('{downarrow}');
        });

        it('should transfer focus to the second item', () => {
          cy.findByRole('menuitem', {name: 'Second Item'}).should('be.focused');
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            cy.focused().realType('{enter}');
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
            cy.findByTestId('output').should('exist');
            cy.findByTestId('output').contains('1');
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
          cy.findByTestId('output').should('exist');
          cy.findByTestId('output').contains('1');
        });
      });

      context('when the fourth item is clicked', () => {
        beforeEach(() => {
          cy.findByRole('menuitem', {name: 'Fourth Item'}).click();
        });

        it('should not close the menu', () => {
          cy.findByRole('menu').should('be.visible');
        });

        it('should not select the fourth item', () => {
          cy.findByTestId('output').should('not.contain', '4');
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

      context('when the user realTypes a printable character "t"', () => {
        beforeEach(() => {
          cy.focused().realType('t');
        });

        it.skip('should focus on the third item', () => {
          cy.get('[role="menuitem"]').should('contains', 'Third Item');
        });
      });

      context('when up arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('menu').should('exist');
          cy.findByRole('menuitem', {name: 'First Item'})
            .should('be.focused')
            .realType('{uparrow}');
        });

        it('should focus on the last option', () => {
          cy.findByRole('menuitem', {name: 'Fourth Item'}).should('be.focused');
        });
      });

      context('when the enter key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('menu').should('exist');
          cy.findByRole('menuitem', {name: 'First Item'})
            .should('be.focused')
            .realType('{uparrow}');
          cy.findByRole('menuitem', {name: 'Fourth Item'}).should('be.visible');
          cy.focused().realType('{enter}');
        });

        it('should not close the menu', () => {
          cy.findByRole('menu').should('be.visible');
        });

        it('should have aria-expanded set to true', () => {
          cy.findByRole('button').should('have.attr', 'aria-expanded', 'true');
          cy.findByRole('button').should('contain', 'Open Menu');
        });

        it('should not select the fourth item', () => {
          cy.findByTestId('output').should('not.contain', '4');
        });
      });
    });
  });

  context(`given the [Testing/Popups/Menu, MenuWithFallbackPlacements] example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<MenuWithFallbackPlacements />);
    });

    context('check the fallback placements', () => {
      [
        {
          placement: 'top',
          fallbackPlacement: 'bottom',
          x: 0,
          y: 400,
          isMovedToSide: false,
        },
        {
          placement: 'right',
          fallbackPlacement: 'left',
          x: 0,
          y: 0,
          isMovedToSide: true,
        },
        {
          placement: 'right',
          fallbackPlacement: 'bottom',
          x: 0,
          y: 480,
          isMovedToSide: true,
        },
      ].forEach(io => {
        context(`when the preferred placement is set to ${io.placement}`, () => {
          beforeEach(() => {
            if (io.isMovedToSide) {
              cy.findByTestId(`slide-${io.placement}`).type('500').trigger('change');
            }
            cy.findByRole('button', {name: io.placement}).click();
            cy.scrollTo(io.x, io.y);
          });

          it(`should show the fallback placement: ${io.fallbackPlacement}`, () => {
            cy.findByRole('button', {name: 'Open Menu'}).click({scrollBehavior: false});
            cy.findByRole('menu')
              .parents('div[data-popper-placement]')
              .should('have.attr', 'data-popper-placement', io.fallbackPlacement);
          });
        });
      });
    });
  });
});
