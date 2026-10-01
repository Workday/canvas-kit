import {ScrollableSubmenu} from '../../modules/react/menu/stories/examples/ScrollableSubmenu';

describe('Submenu placement', () => {
  (['ltr', 'rtl'] as const).forEach(dir => {
    [false, true].forEach(atEnd => {
      const side = (dir === 'ltr') !== atEnd ? 'right' : 'left';

      context(`given a scrollable ${dir} menu at the ${atEnd ? 'end' : 'start'} edge`, () => {
        beforeEach(() => {
          cy.mount(<ScrollableSubmenu dir={dir} atEnd={atEnd} />);
          cy.findByRole('button', {name: 'Open Menu'}).click();
          cy.findByRole('menuitem', {name: 'More Items'}).realHover();
          cy.findByTestId('submenu').should('be.visible');
        });

        it('should pass axe checks', () => {
          cy.checkA11y();
        });

        it(`should open beside the parent on the ${side}`, () => {
          cy.findByTestId('submenu')
            .closest('[data-popper-placement]')
            .should('have.attr', 'data-popper-placement', `${side}-start`);
        });

        context('when the parent menu is scrolled', () => {
          beforeEach(() => {
            cy.findByTestId('scrollable-menu')
              .find('[data-part="list-box-container"]')
              .scrollTo(0, 280);
            cy.findByTestId('submenu')
              .closest('[data-popper-placement]')
              .should('have.attr', 'data-popper-reference-hidden');
          });

          it('should remain beside the parent without covering it', () => {
            cy.findByTestId('scrollable-menu').then($parent => {
              const parent = $parent[0].getBoundingClientRect();
              cy.findByTestId('submenu').should($submenu => {
                const submenu = $submenu[0].getBoundingClientRect();
                if (side === 'right') {
                  expect(submenu.left).to.be.at.least(parent.right);
                } else {
                  expect(submenu.right).to.be.at.most(parent.left);
                }
              });
            });
          });
        });
      });
    });
  });

  context('given an explicit submenu placement', () => {
    beforeEach(() => {
      cy.mount(
        <ScrollableSubmenu
          submenuPopperProps={{placement: 'bottom-start', fallbackPlacements: ['top-start']}}
        />
      );
      cy.findByRole('button', {name: 'Open Menu'}).click();
      cy.findByRole('menuitem', {name: 'More Items'}).realHover();
      cy.findByTestId('submenu').should('be.visible');
    });

    it('should preserve the custom placement', () => {
      cy.findByTestId('submenu')
        .closest('[data-popper-placement]')
        .should('have.attr', 'data-popper-placement', 'bottom-start');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });
  });

  context('given an empty fallback list at the right edge', () => {
    beforeEach(() => {
      cy.mount(<ScrollableSubmenu atEnd submenuPopperProps={{fallbackPlacements: []}} />);
      cy.findByRole('button', {name: 'Open Menu'}).click();
      cy.findByRole('menuitem', {name: 'More Items'}).realHover();
      cy.findByTestId('submenu').should('be.visible');
    });

    it('should still allow the opposite placement', () => {
      cy.findByTestId('submenu')
        .closest('[data-popper-placement]')
        .should('have.attr', 'data-popper-placement', 'left-start');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });
  });

  context('given custom Popper options', () => {
    beforeEach(() => {
      cy.mount(
        <ScrollableSubmenu
          submenuPopperProps={{
            popperOptions: {modifiers: [{name: 'offset', options: {offset: [0, 24]}}]},
          }}
        />
      );
      cy.findByRole('button', {name: 'Open Menu'}).click();
      cy.findByRole('menuitem', {name: 'More Items'}).realHover();
      cy.findByTestId('submenu').should('be.visible');
    });

    it('should preserve the custom offset', () => {
      cy.findByRole('menuitem', {name: 'More Items'}).then($target => {
        const target = $target[0].getBoundingClientRect();
        cy.findByTestId('submenu')
          .closest('[data-popper-placement]')
          .should($popper => {
            expect($popper[0].getBoundingClientRect().left).to.be.closeTo(target.right + 24, 1);
          });
      });
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });
  });
});
