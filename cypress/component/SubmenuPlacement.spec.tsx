import {ScrollableSubmenu} from '../../modules/react/menu/stories/examples/ScrollableSubmenu';

// Allows for subpixel rounding between the popper's transform and the parent's layout.
const tolerance = 1;

const getSubmenuPopper = () => cy.findByTestId('submenu').closest('[data-popper-placement]');

const getParentListContainer = () =>
  cy.findByTestId('scrollable-menu').find('[data-part="list-box-container"]');

const openSubmenu = () => {
  cy.findByRole('button', {name: 'Open Menu'}).click();
  cy.findByRole('menuitem', {name: 'More Items'}).realHover();
  cy.findByTestId('submenu').should('be.visible');
};

const assertSubmenuClearOfParent = () => {
  cy.findByTestId('scrollable-menu').then($parent => {
    const parent = $parent[0].getBoundingClientRect();
    getSubmenuPopper().should($popper => {
      const submenu = $popper[0].getBoundingClientRect();
      const isClear =
        submenu.left >= parent.right - tolerance ||
        submenu.right <= parent.left + tolerance ||
        submenu.top >= parent.bottom - tolerance ||
        submenu.bottom <= parent.top + tolerance;
      expect(isClear, 'submenu does not overlap the parent menu').to.equal(true);
    });
  });
};

describe('Submenu placement', () => {
  (['ltr', 'rtl'] as const).forEach(dir => {
    [false, true].forEach(atEnd => {
      const side = (dir === 'ltr') !== atEnd ? 'right' : 'left';

      context(`given a scrollable ${dir} menu at the ${atEnd ? 'end' : 'start'} edge`, () => {
        beforeEach(() => {
          cy.mount(<ScrollableSubmenu dir={dir} atEnd={atEnd} />);
          cy.document().then(document => {
            const style = document.createElement('style');
            style.id = 'submenu-scrollbar-test';
            style.textContent = `
              [data-testid="scrollable-menu"] [data-part="list-box-container"] {
                scrollbar-gutter: stable both-edges;
              }
              [data-testid="scrollable-menu"] [data-part="list-box-container"]::-webkit-scrollbar {
                width: 16px;
              }
            `;
            document.head.appendChild(style);
          });
          cy.findByRole('button', {name: 'Open Menu'}).click();
          cy.findByRole('menuitem', {name: 'More Items'}).realHover();
          cy.findByTestId('submenu').should('be.visible');
        });

        afterEach(() => {
          cy.document().then(document =>
            document.getElementById('submenu-scrollbar-test')?.remove()
          );
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

    it('should preserve the custom offset from the parent menu', () => {
      getParentListContainer().then($container => {
        const container = $container[0].getBoundingClientRect();
        getSubmenuPopper().should($popper => {
          expect($popper[0].getBoundingClientRect().left).to.be.closeTo(
            container.right + 24,
            tolerance
          );
        });
      });
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });
  });

  (['ltr', 'rtl'] as const).forEach(dir => {
    const align = dir === 'ltr' ? 'start' : 'end';
    const edge = dir === 'ltr' ? 'left' : 'right';

    context(`given a ${dir} viewport too narrow for either side`, () => {
      beforeEach(() => {
        cy.viewport(320, 1000);
        cy.mount(<ScrollableSubmenu dir={dir} />);
        openSubmenu();
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should fall back below the parent', () => {
        getSubmenuPopper().should('have.attr', 'data-popper-placement', `bottom-${align}`);
        assertSubmenuClearOfParent();
      });

      it(`should align with the parent's ${edge} edge`, () => {
        getParentListContainer().then($container => {
          const container = $container[0].getBoundingClientRect();
          getSubmenuPopper().should($popper => {
            expect($popper[0].getBoundingClientRect()[edge]).to.be.closeTo(
              container[edge],
              tolerance
            );
          });
        });
      });

      it('should stay inside the viewport horizontally', () => {
        getSubmenuPopper().should($popper => {
          const submenu = $popper[0].getBoundingClientRect();
          expect(submenu.left, 'left edge').to.be.at.least(0);
          expect(submenu.right, 'right edge').to.be.at.most(320);
        });
      });
    });
  });

  context('given a parent menu near the bottom of a narrow viewport', () => {
    beforeEach(() => {
      cy.viewport(320, 1000);
      cy.mount(<ScrollableSubmenu alignBottom />);
      openSubmenu();
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should fall back above the parent', () => {
      getSubmenuPopper().should('have.attr', 'data-popper-placement', 'top-start');
      assertSubmenuClearOfParent();
    });
  });

  // Clearing the parent needs room for the parent and the submenu stacked. Where that does not
  // fit, overlapping the parent is the better of the two bad options, so the submenu should still
  // take a vertical fallback rather than stay beside the parent and run off screen.
  [320, 360].forEach(width => {
    const height = 568;

    context(`given a ${width}x${height} viewport too short to clear the parent`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.mount(<ScrollableSubmenu />);
        openSubmenu();
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should still fall back below the parent', () => {
        getSubmenuPopper().should('have.attr', 'data-popper-placement', 'bottom-start');
      });

      it('should stay inside the viewport', () => {
        getSubmenuPopper().should($popper => {
          const submenu = $popper[0].getBoundingClientRect();
          expect(submenu.left, 'left edge').to.be.at.least(0);
          expect(submenu.right, 'right edge').to.be.at.most(width);
          expect(submenu.top, 'top edge').to.be.at.least(0);
          expect(submenu.bottom, 'bottom edge').to.be.at.most(height);
        });
      });

      // The side placements do not fit here, so re-deriving a placement once the target scrolls
      // away would put the submenu back beside the parent and halfway off screen.
      context('when the parent menu is then scrolled', () => {
        beforeEach(() => {
          getParentListContainer().scrollTo('bottom');
          // Settle on PopperJS having processed the scroll, otherwise the placement assertions
          // below pass against the value from before the update.
          getSubmenuPopper().should('have.attr', 'data-popper-reference-hidden');
        });

        it('should keep the vertical placement', () => {
          getSubmenuPopper().should('have.attr', 'data-popper-placement', 'bottom-start');
        });

        it('should stay inside the viewport', () => {
          getSubmenuPopper().should($popper => {
            const submenu = $popper[0].getBoundingClientRect();
            expect(submenu.left, 'left edge').to.be.at.least(0);
            expect(submenu.right, 'right edge').to.be.at.most(width);
            expect(submenu.top, 'top edge').to.be.at.least(0);
            expect(submenu.bottom, 'bottom edge').to.be.at.most(height);
          });
        });

        // Clamping the clearance to the viewport edge should leave nothing left to recompute, so
        // the submenu holds its position rather than creeping up over the parent as it scrolls.
        it('should not move while the parent keeps scrolling', () => {
          getSubmenuPopper().then($popper => {
            const settled = $popper[0].getBoundingClientRect();

            [480, 240, 0, 640].forEach(position => {
              getParentListContainer().scrollTo(0, position);
              // PopperJS updates on scroll asynchronously. Let it settle, then assert once with
              // `then` rather than `should`, so a stale value cannot satisfy a retrying assertion.
              cy.wait(250);
              getSubmenuPopper().then($moved => {
                const submenu = $moved[0].getBoundingClientRect();
                expect(submenu.top, `top at scroll ${position}`).to.be.closeTo(
                  settled.top,
                  tolerance
                );
                expect(submenu.left, `left at scroll ${position}`).to.be.closeTo(
                  settled.left,
                  tolerance
                );
              });
            });
          });
        });
      });
    });
  });
});
