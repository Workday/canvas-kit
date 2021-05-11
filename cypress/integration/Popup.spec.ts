import * as h from '../helpers';

describe('Popup', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the [Components/Popups/Popup/React, Simple] example is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Popup/React', 'Simple');
    });

    context('when the "Delete Item" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).click();
      });

      it('should show the popup', () => {
        cy.findByRole('dialog').should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('popup', () => {
        it('should have a role of dialog', () => {
          cy.findByRole('dialog').should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute when a heading is provided', () => {
          cy.findByRole('dialog').should('have.attr', 'aria-labelledby');
        });

        it('should be labelled by the heading', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });
      });

      context('when the close button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).click();
        });

        it('should hide the popup', () => {
          cy.findByRole('dialog').should('not.visible');
        });
      });

      context('when the escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should hide the popup', () => {
          cy.findByRole('dialog').should('not.visible');
        });
      });

      context('when outside the popup is clicked', () => {
        beforeEach(() => {
          cy.get('body').click('topLeft');
        });

        it('should close the popup', () => {
          cy.findByRole('dialog').should('not.visible');
        });
      });
    });
  });

  context('given the [Components/Popups/Popup/React, MultiplePopups] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Popup/React', 'MultiplePopups');
    });

    context('when Open Popup 1 button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Popup 1'}).click();
      });

      it('should open Popup 1', () => {
        cy.findByRole('dialog', {name: 'Popup 1'}).should('be.visible');
      });

      context('then Open Popup 2 button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Open Popup 2'}).click();
        });

        it('should open Popup 2', () => {
          cy.findByRole('dialog', {name: 'Popup 2'}).should('be.visible');
        });

        it('should close Popup 1', () => {
          cy.findAllByLabelText('Popup 1').should('not.exist');
        });
      });
    });
  });
});
