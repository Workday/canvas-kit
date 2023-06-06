import * as h from '../helpers';

describe('Popup', () => {
  before(() => {
    h.stories.visit();
  });

  context(
    `given the [Testing/Popups/Dialog, DialogWithFallbackPlacements] example is rendered`,
    () => {
      beforeEach(() => {
        h.stories.load('Testing/Popups/Dialog', 'DialogWithFallbackPlacements');
      });

      context('check the fallback placements', () => {
        [
          {
            placement: 'bottom',
            fallbackPlacement: 'top',
            x: 0,
            y: 0,
            isMovedToSide: false,
          },
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
                cy.findByTestId(`slide-${io.placement}`)
                  .type('500')
                  .trigger('change');
              }
              cy.findByRole('button', {name: io.placement}).click();
              cy.scrollTo(io.x, io.y);
            });

            it(`should show the fallback placement: ${io.fallbackPlacement}`, () => {
              cy.findByRole('button', {name: 'Open for Offer'}).click({scrollBehavior: false});
              cy.findByRole('dialog')
                .parents('div[data-popper-placement]')
                .should('have.attr', 'data-popper-placement', io.fallbackPlacement);
            });
          });
        });
      });
    }
  );
});
