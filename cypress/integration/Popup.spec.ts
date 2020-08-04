import * as h from '../helpers';

function getPopup() {
  return cy.findByRole('dialog');
}

function getPopupTargetButton() {
  return cy.contains('Delete Item');
}

function getCloseButton() {
  return getPopup().find('[data-close]');
}

describe('Popup', () => {
  before(() => {
    h.stories.visit();
  });
  context(`given the open popup`, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Popup/React', 'Open');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have a role of dialog', () => {
      getPopup().should('have.attr', 'role', 'dialog');
    });
  });

  context(`given the default popup`, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Popup/React', 'Default');
    });
    context('when the target buttton is clicked', () => {
      beforeEach(() => {
        getPopupTargetButton().click();
      });

      it('should open the popup', () => {
        getPopup().should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('popup', () => {
        it('should have a role of dialog', () => {
          getPopup().should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute when a heading is provided', () => {
          getPopup().should('have.attr', 'aria-labelledby');
        });
      });

      context('when the close button is clicked', () => {
        beforeEach(() => {
          getCloseButton().click();
        });

        it('should close the popup', () => {
          getPopup().should('not.visible');
        });
      });

      context('when the escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the popup', () => {
          getPopup().should('not.visible');
        });
      });

      context('when the user clicks outside the popup', () => {
        beforeEach(() => {
          cy.get('body').click('topLeft');
        });

        it('should close the popup', () => {
          getPopup().should('not.visible');
        });
      });
    });
  });

  context('given the MultiplePopups story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Popups/Popup', 'MultiplePopups');
    });

    context('when Open Popup 1 button is clicked', () => {
      beforeEach(() => {
        cy.findByText('Open Popup 1').click();
      });

      it('should open Popup 1', () => {
        cy.findByLabelText('Popup 1').should('be.visible');
      });

      context('then Open Popup 2 button is click', () => {
        beforeEach(() => {
          cy.findByText('Open Popup 2').click();
        });

        it('should open Popup 2', () => {
          cy.findByLabelText('Popup 2').should('be.visible');
        });

        // TODO Skip for now until we have a systematic approach to fix this issue
        it.skip('should close Popup 1', () => {
          cy.findAllByLabelText('Popup 1').should('not.exist');
        });
      });
    });
  });
});
