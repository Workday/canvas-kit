import * as h from '../helpers';

function getPopup() {
  return cy.findByRole('dialog', {name: 'Delete Item'});
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
      h.stories.load('Components/Popups/Popup/React', 'Open');
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
      h.stories.load('Components/Popups/Popup/React', 'Default');
    });
    context('when the target button is clicked', () => {
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
      h.stories.load('Testing/React/Popups/Popup', 'MultiplePopups');
    });

    context('when Open Popup 1 button is clicked', () => {
      beforeEach(() => {
        cy.findByText('Open Popup 1').click();
      });

      it('should open Popup 1', () => {
        cy.findByRole('dialog', {name: 'Popup 1'}).should('be.visible');
      });

      context('then Open Popup 2 button is clicked', () => {
        beforeEach(() => {
          cy.findByText('Open Popup 2').click();
        });

        it('should open Popup 2', () => {
          cy.findByRole('dialog', {name: 'Popup 2'}).should('be.visible');
        });

        // TODO Skip for now until we have a systematic approach to fix this issue
        it.skip('should close Popup 1', () => {
          cy.findByRole('dialog', {name: 'Popup 1'}).should('not.exist');
        });

        context('then Open Popup 3 button is clicked', () => {
          const Popup3Title = 'Popup 3 (Not hidable on outside click)';
          beforeEach(() => {
            cy.findByText('Open Popup 3').click();
          });

          it('should open Popup 3 in front of Popup 2', () => {
            cy.findByRole('dialog', {name: Popup3Title}).should('be.visible');
            cy.findByRole('dialog', {name: 'Popup 2'}).should('be.visible');

            cy.findByRole('dialog', {name: Popup3Title}).should(
              h.popup.beOnTopOfLabelledByText('Popup 2')
            );
          });

          context('then the close button in Popup 3 is clicked', () => {
            beforeEach(() => {
              cy.findByRole('dialog', {name: Popup3Title})
                .find('[data-close]')
                .click();
            });

            it('should close Popup 3', () => {
              cy.findByRole('dialog', {name: Popup3Title}).should('not.exist');
            });

            it('should not close Popup 2', () => {
              cy.findByRole('dialog', {name: 'Popup 2'}).should('be.visible');
            });
          });
        });
      });
    });
  });
});
