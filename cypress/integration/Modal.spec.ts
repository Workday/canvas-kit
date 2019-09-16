import * as h from '../helpers';

function getModalTargetButton() {
  return cy.contains('Delete Item');
}

describe('Modal', () => {
  before(() => {
    h.stories.visit();
  });

  ['Default', 'UseModal'].forEach(story => {
    context(`given the ${story} story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Modal', story);
        // cy.visit(`http://localhost:9001/iframe.html?id=modal--${story.toLowerCase()}`);
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
              keyCode: 27, // Escape
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
  context(`given the ModalNoX story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('modal', 'ModalNoX');
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        getModalTargetButton().click();
      });

      it('should transfer focus to the header element', () => {
        h.modal
          .get()
          .pipe(h.modal.getTitle)
          .should('have.focus');
      });
    });
  });
});
