import * as h from '../helpers';

function getModalTargetButton() {
  return cy.contains('Delete Item');
}

describe('Modal', () => {
  before(() => {
    cy.viewport(500, 300);
    h.stories.visit();
  });

  ['Default', 'With useModal hook'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Popups/Modal/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when button is focused', () => {
        beforeEach(() => {
          getModalTargetButton().focus();
        });

        it('should be the focused item on the page', () => {
          getModalTargetButton().should('have.focus');
        });
      });

      context('when the target button is clicked', () => {
        beforeEach(() => {
          getModalTargetButton().click();
        });

        it('should open the modal', () => {
          h.modal.get().should('be.visible');
        });

        it('should not have any axe errors', () => {
          cy.checkA11y();
        });

        context('the modal', () => {
          it('should have a the role of dialog', () => {
            h.modal.get().should('have.attr', 'role', 'dialog');
          });

          it('should have an aria-labelledby attribute', () => {
            h.modal.get().should('have.attr', 'aria-labelledby');
          });

          it('should contain the title', () => {
            h.modal
              .get()
              .pipe(h.modal.getTitle)
              .should('contain', 'Delete Item');
          });

          it('should be labelled by the title element', () => {
            h.modal.get().should($modal => {
              const labelId = $modal.attr('aria-labelledby');
              const titleId = h.modal.getTitle($modal).attr('id');

              expect(labelId).to.equal(titleId);
            });
          });

          it('should transfer focus to the x icon element', () => {
            h.modal
              .get()
              .pipe(h.modal.getCloseButton)
              .should('have.focus');
          });

          it('should trap focus inside the modal element', () => {
            cy.tab()
              .should('contain', 'Delete')
              .tab()
              .should('contain', 'Cancel')
              .tab();
            h.modal
              .get()
              .pipe(h.modal.getCloseButton)
              .should('have.focus');
          });
        });

        context('when the close button is clicked', () => {
          beforeEach(() => {
            h.modal
              .get()
              .pipe(h.modal.getCloseButton)
              .click();
          });

          it('should close the modal', () => {
            h.modal.get().should('not.be.visible');
          });

          it('should transfer focus back to the target button', () => {
            cy.contains('Delete Item').should('have.focus');
          });
        });

        context('when the Escape key is pressed', () => {
          beforeEach(() => {
            cy.get('body').trigger('keydown', {
              key: 'Escape',
            });
          });

          it('should close the modal', () => {
            h.modal.get().should('not.be.visible');
          });
        });

        context('when the overlay is clicked', () => {
          beforeEach(() => {
            h.modal
              .get()
              .parent() // overlay
              .click('top');
          });

          it('should close the modal', () => {
            h.modal.get().should('not.be.visible');
          });
        });
      });
    });
  });

  context(`given the 'Without close icon' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Modal/React', 'Without close icon');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when button is focused', () => {
      beforeEach(() => {
        getModalTargetButton().focus();
      });

      it('should be the focused item on the page', () => {
        getModalTargetButton().should('have.focus');
      });
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        getModalTargetButton().click();
      });

      it('should open the modal', () => {
        h.modal.get().should('be.visible');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should transfer focus to the header element', () => {
        h.modal
          .get()
          .pipe(h.modal.getTitle)
          .should('have.focus');
      });

      it('should not show a focus ring on the header', () => {
        h.modal
          .get()
          .pipe(h.modal.getTitle)
          .should('have.css', 'outlineStyle', 'none');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          h.modal.get().should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          h.modal.get().should('have.attr', 'aria-labelledby');
        });

        it('should contain the title', () => {
          h.modal
            .get()
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          h.modal.get().should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the header element', () => {
          h.modal
            .get()
            .pipe(h.modal.getTitle)
            .should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          h.modal
            .get()
            .pipe(h.modal.getTitle)
            .should('have.focus');
          cy.tab()
            .should('contain', 'Delete')
            .tab()
            .should('contain', 'Cancel')
            .tab();
          cy.focused().should('have.text', 'Delete');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not close the modal', () => {
          h.modal.get().should('be.visible');
        });
      });

      context('when the overlay is clicked', () => {
        beforeEach(() => {
          h.modal
            .get()
            .parent() // overlay
            .click('top');
        });

        it('should not close the modal', () => {
          h.modal.get().should('be.visible');
        });
      });
    });
  });

  context(`given the 'Custom focus' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Popups/Modal/React', 'Custom focus');
    });

    context('when button is focused', () => {
      beforeEach(() => {
        getModalTargetButton().focus();
      });

      it('should be the focused item on the page', () => {
        getModalTargetButton().should('have.focus');
      });
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        getModalTargetButton().click();
      });

      it('should open the modal', () => {
        h.modal.get().should('be.visible');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          h.modal.get().should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          h.modal.get().should('have.attr', 'aria-labelledby');
        });

        it('should contain the title', () => {
          h.modal
            .get()
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          h.modal.get().should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the Cancel button element', () => {
          h.modal
            .get()
            .find('button:contains(Cancel)')
            .should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          cy.focused().should('have.text', 'Cancel');
          cy.focused()
            .tab()
            .should('contain', 'Delete')
            .tab()
            .should('contain', 'Cancel')
            .tab();
          cy.focused().should('have.text', 'Delete');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not close the modal', () => {
          h.modal.get().should('be.visible');
        });
      });

      context('when the overlay is clicked', () => {
        beforeEach(() => {
          h.modal
            .get()
            .parent() // overlay
            .click('top');
        });

        it('should not close the modal', () => {
          h.modal.get().should('be.visible');
        });
      });
    });
  });
});
