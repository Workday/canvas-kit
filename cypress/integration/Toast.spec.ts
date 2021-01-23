import * as h from '../helpers';

function getStatusToast() {
  return cy.findByRole('status');
}

function getDialogToast() {
  return cy.findByRole('dialog');
}

describe('Toast', () => {
  before(() => {
    h.stories.visit();
  });

  ['Error', 'Success'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Popups/Toast/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context(`given the toast with no close icon or action button`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Toast/React', 'Success');
    });

    it('should have a role of status', () => {
      getStatusToast().should('have.attr', 'role', 'status');
    });

    it('should have aria live set to polite', () => {
      getStatusToast().should('have.attr', 'aria-live', 'polite');
    });

    it('should have aria atomic set to true', () => {
      getStatusToast().should('have.attr', 'aria-atomic', 'true');
    });
  });

  context(`given the toast with a close button  and action button`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Toast/React', 'With action link and close icon');
    });

    it('should have a role of dialog', () => {
      getDialogToast().should('have.attr', 'role', 'dialog');
    });
  });
});
