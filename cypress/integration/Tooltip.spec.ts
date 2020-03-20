import * as h from '../helpers';

describe('Tooltip', () => {
  before(() => {
    h.stories.visit();
  });

  context('given Tooltip Default is rendered', () => {
    beforeEach(() => {
      h.stories.load('Tooltip', 'Default');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have an aria-label of "Close"', () => {
      cy.get('button').should('have.attr', 'aria-label', 'Close');
    });

    context('when close icon is hovered', () => {
      beforeEach(() => {
        cy.get('button').trigger('mouseover');
      });

      it('should open the tooltip', () => {
        cy.get('[role=tooltip]').should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('the button should be aria-describedby the tooltip', () => {
        cy.get('[role=tooltip]', {log: false}).should($tooltip => {
          const id = $tooltip.attr('id');
          expect(Cypress.$('button')).to.have.attr('aria-describedby', id);
          expect($tooltip).to.have.attr('id', id);
        });
      });
    });

    context('when close icon gains focus', () => {
      beforeEach(() => {
        cy.get('button').focus();
      });

      it('should open the tooltip', () => {
        cy.get('[role=tooltip]').should('be.visible');
      });

      context('then the close icon loses focus', () => {
        beforeEach(() => {
          cy.get('button').blur();
        });

        it('should close the tooltip', () => {
          cy.get('[role=tooltip]').should('not.be.visible');
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
});
