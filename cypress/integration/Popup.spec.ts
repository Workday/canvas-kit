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

    it('should have a role of status', () => {
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

      it('should open the modal', () => {
        getPopup().should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('popup', () => {
        it('should have a role of dialog', () => {
          getPopup().should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          h.modal.get().should('have.attr', 'aria-labelledby');
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
    });
  });

  //   ['Error', 'Success'].forEach(story => {
  //     context(`given the '${story}' story is rendered`, () => {
  //       beforeEach(() => {
  //         h.stories.load('Components|Popups/Toast/React', story);
  //       });
  //       it('should not have any axe errors', () => {
  //         cy.checkA11y();
  //       });
  //     });
  //   });

  //   context(`given the toast with a close button  and action button`, () => {
  //     beforeEach(() => {
  //       h.stories.load('Components|Popups/Toast/React', 'With action link and close icon');
  //     });
  //     it('should have a role of dialog', () => {
  //       getDialogToast().should('have.attr', 'role', 'dialog');
  //     });
  //   });
});
