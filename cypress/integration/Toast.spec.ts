import * as h from '../helpers';

function getStatusToast() {
  return cy.findByRole('status');
}

function getDialogToast() {
  return cy.findByRole('dialog');
}

function getAlertToast() {
  return cy.findByRole('alert');
}

describe('Toast', () => {
  before(() => {
    h.stories.visit();
  });

  ['Basic', 'Toast Alert', 'Toast Dialog'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Popups/Toast', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context(`given the toast set to the default mode of "status"`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Toast', 'Basic');
    });

    it('should have a role of status', () => {
      getStatusToast().should('have.attr', 'role', 'status');
    });

    it('should have aria-live set to polite', () => {
      getStatusToast().should('have.attr', 'aria-live', 'polite');
    });

    it('should have aria-atomic set to true', () => {
      getStatusToast().should('have.attr', 'aria-atomic', 'true');
    });
  });

  context(`given the toast with an alert`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Toast', 'Toast Alert');
    });

    it('should have a role of alert', () => {
      getAlertToast().should('have.attr', 'role', 'alert');
    });

    it('should have aria-live set to assertive', () => {
      getAlertToast().should('have.attr', 'aria-live', 'assertive');
    });

    it('should have aria-atomic set to true', () => {
      getAlertToast().should('have.attr', 'aria-atomic', 'true');
    });
  });

  context(`given the toast with a close button and action link`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Toast', 'Toast Dialog');
    });

    it('should have a role of dialog', () => {
      getDialogToast().should('have.attr', 'role', 'dialog');
    });

    it('should have aria-label set to notification', () => {
      getDialogToast().should('have.attr', 'aria-label', 'notification');
    });

    it('should have aria-describedby', () => {
      getDialogToast().should('have.attr', 'aria-describedby');
    });
  });
});
