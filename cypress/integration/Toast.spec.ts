import * as h from '../helpers';

function statusToast() {
  return cy.findByRole('status');
}

function dialogToast() {
  return cy.findByRole('dialog');
}

function getToastCloseButton() {
  return cy.get('[aria-label="Close"');
}

function getToastActionButton() {
  return cy.get('[aria-label="View more details"');
}

describe('Toast', () => {
  before(() => {
    h.stories.visit();
  });

  ['Default', 'Error', 'Successful'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Popups/Toast/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });
    });
  });

  context(`given the toast with no close icon or action button`, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Toast/React', 'Default');
    });

    it('should have a role of status', () => {
      statusToast().should('have.attr', 'role', 'status');
    });

    it('should have aria live set to polite', () => {
      statusToast().should('have.attr', 'aria-live', 'polite');
    });

    it('should have aria atomic set to true', () => {
      statusToast().should('have.attr', 'aria-atomic', 'true');
    });
  });

  context(`given the toast with a close button `, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Toast/React', 'With close button');
    });

    it('should have a role of dialog', () => {
      dialogToast().should('have.attr', 'role', 'dialog');
    });

    context('when button is focused', () => {
      beforeEach(() => {
        getToastCloseButton().focus();
      });

      it('should be the focused item on the page', () => {
        getToastCloseButton().should('have.focus');
      });
    });
  });

  context(`given the toast with an action link `, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Toast/React', 'With action link');
    });

    it('should have a role of dialog', () => {
      dialogToast().should('have.attr', 'role', 'dialog');
    });

    context('when button is focused', () => {
      beforeEach(() => {
        getToastActionButton().focus();
      });

      it('should be the focused item on the page', () => {
        getToastActionButton().should('have.focus');
      });
    });
  });
});
