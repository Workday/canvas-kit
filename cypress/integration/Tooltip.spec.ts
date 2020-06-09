import * as h from '../helpers';

describe('Tooltip', () => {
  before(() => {
    h.stories.visit();
  });

  context('given Default is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Tooltip/React', 'Default');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have an aria-label of "Close"', () => {
      cy.get('button').should('have.ariaLabel', 'Close');
    });

    context('when close icon is hovered', () => {
      beforeEach(() => {
        cy.get('button').trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the tooltip is hovered', () => {
        beforeEach(() => {
          cy.get('button').trigger('mouseout');
          cy.findByRole('tooltip').trigger('mouseover');
        });

        it('should not close the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });

      context('when ESC key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the tooltip', () => {
          cy.findByRole('tooltip').should('not.be.visible');
        });
      });
    });

    context('when close icon gains focus', () => {
      beforeEach(() => {
        cy.get('button').focus();
      });

      it('should open the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      context('then the close icon loses focus', () => {
        beforeEach(() => {
          cy.get('button').blur();
        });

        it('should close the tooltip', () => {
          cy.findByRole('tooltip').should('not.be.visible');
        });
      });

      context('then Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('button').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not remove focus from the close icon button', () => {
          cy.get('button').should('have.focus');
        });
      });
    });
  });

  context('given Describe Type is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Tooltip/React', 'Describe Type');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should not have an aria-describedby', () => {
      cy.get('button').should('not.have.attr', 'aria-describedby');
    });

    context('when Delete button is hovered', () => {
      beforeEach(() => {
        cy.get('button').trigger('mouseover');
      });

      it('should show the tooltip', () => {
        cy.findByRole('tooltip').should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should have an aria-describedby linking to the button', () => {
        cy.get('button').should(
          'have.ariaDescription',
          'The service will restart after this action'
        );
      });
    });
  });
});
