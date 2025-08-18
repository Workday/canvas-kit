import {DialogWithFallbackPlacements} from '../../modules/react/dialog/stories/examples/DialogWithFallbackPlacements';

describe('Dialog', () => {
  context(`given the 'DialogWithFallbackPlacements' example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<DialogWithFallbackPlacements />);
    });

    context('check the fallback placements', () => {
      [
        {
          placement: 'top',
          fallbackPlacement: 'bottom',
          buttonName: 'Placement Top',
          isMovedToSide: false,
        },
        {
          placement: 'left',
          fallbackPlacement: 'right',
          buttonName: 'Placement Left',
          isMovedToSide: true,
        },
        {
          placement: 'right',
          fallbackPlacement: 'left',
          buttonName: 'Placement Right',
          isMovedToSide: true,
        },
        {
          placement: 'bottom',
          fallbackPlacement: 'top',
          buttonName: 'Placement Bottom',
          isMovedToSide: false,
        },
      ].forEach(io => {
        context(`when the preferred placement is set to ${io.placement}`, () => {
          it(`should show the fallback placement: ${io.fallbackPlacement}`, () => {
            cy.findByRole('button', {name: io.buttonName}).click();
            cy.findByRole('dialog')
              .parents('div[data-popper-placement]')
              .should('have.attr', 'data-popper-placement', io.fallbackPlacement);
          });
        });
      });
    });
  });
});
