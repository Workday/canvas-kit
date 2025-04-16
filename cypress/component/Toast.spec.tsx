import {Basic} from '../../modules/react/toast/stories/examples/Basic';
import {ToastAlert} from '../../modules/react/toast/stories/examples/ToastAlert';
import {ToastDialog} from '../../modules/react/toast/stories/examples/ToastDialog';

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
  context(`given the toast set to the default mode of "status"`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
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
      cy.mount(<ToastAlert />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
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
      cy.mount(<ToastDialog />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
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
