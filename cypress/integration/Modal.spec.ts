import * as h from '../helpers';

function getModalTargetButton() {
  return cy.contains('Delete Item');
}

describe('Modal', () => {
  before(() => {
    h.stories.visit();
  });

  ['Default', 'WithoutHook'].forEach(story => {
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
          cy.findByLabelText('Delete Item').should('be.visible');
        });

        it('should place the portal as a child of the body element', () => {
          cy.get('body').then($body => {
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getOverlay)
              .parent()
              .should($el => {
                expect($el[0]).to.equal($body[0]);
              });
          });
        });

        it('should hide non-modal content from assistive technology', () => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getOverlay)
            .siblings()
            .should($siblings => {
              $siblings.each((_, $sibling) => {
                expect($sibling).to.have.attr('aria-hidden', 'true');
              });
            });
        });

        it('should not have any axe errors', () => {
          cy.checkA11y();
        });

        context('the modal', () => {
          it('should have a the role of dialog', () => {
            cy.findByLabelText('Delete Item').should('have.attr', 'role', 'dialog');
          });

          it('should have an aria-labelledby attribute', () => {
            cy.findByLabelText('Delete Item').should('have.attr', 'aria-labelledby');
          });

          it('should have an aria-modal=true', () => {
            cy.findByLabelText('Delete Item').should('have.attr', 'aria-modal', 'true');
          });

          it('should contain the title', () => {
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getTitle)
              .should('contain', 'Delete Item');
          });

          it('should be labelled by the title element', () => {
            cy.findByLabelText('Delete Item').should($modal => {
              const labelId = $modal.attr('aria-labelledby');
              const titleId = h.modal.getTitle($modal).attr('id');

              expect(labelId).to.equal(titleId);
            });
          });

          it('should transfer focus to the x icon element', () => {
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getCloseButton)
              .should('have.focus');
          });

          it('should trap focus inside the modal element', () => {
            cy.tab()
              .should('contain', 'Delete')
              .tab()
              .should('contain', 'Cancel')
              .tab();
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getCloseButton)
              .should('have.focus');
          });
        });

        context('when the close button is clicked', () => {
          beforeEach(() => {
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getCloseButton)
              .click();
          });

          it('should close the modal', () => {
            cy.findByLabelText('Delete Item').should('not.be.visible');
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
            cy.findByLabelText('Delete Item').should('not.be.visible');
          });
        });

        context('when the overlay is clicked', () => {
          beforeEach(() => {
            cy.findByLabelText('Delete Item')
              .pipe(h.modal.getOverlay)
              .click('top');
          });

          it('should close the modal', () => {
            cy.findByLabelText('Delete Item').should('not.be.visible');
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
        cy.findByLabelText('Delete Item').should('be.visible');
      });

      it('should place the portal as a child of the body element', () => {
        cy.get('body').then($body => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getOverlay)
            .parent()
            .should($el => {
              expect($el[0]).to.equal($body[0]);
            });
        });
      });

      it('should hide non-modal content from assistive technology', () => {
        cy.findByLabelText('Delete Item')
          .pipe(h.modal.getOverlay)
          .siblings()
          .should($siblings => {
            $siblings.each((_, $sibling) => {
              expect($sibling).to.have.attr('aria-hidden', 'true');
            });
          });
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should transfer focus to the header element', () => {
        cy.findByLabelText('Delete Item')
          .pipe(h.modal.getTitle)
          .should('have.focus');
      });

      it('should not show a focus ring on the header', () => {
        cy.findByLabelText('Delete Item')
          .pipe(h.modal.getTitle)
          .should('have.css', 'outlineStyle', 'none');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'aria-labelledby');
        });

        it('should have an aria-modal=true', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'aria-modal', 'true');
        });

        it('should contain the title', () => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          cy.findByLabelText('Delete Item').should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the header element', () => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getTitle)
            .should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          cy.findByLabelText('Delete Item')
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
          cy.findByLabelText('Delete Item').should('be.visible');
        });
      });

      context('when the overlay is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getOverlay)
            .click('top');
        });

        it('should not close the modal', () => {
          cy.findByLabelText('Delete Item').should('be.visible');
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
        cy.findByLabelText('Delete Item').should('be.visible');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'aria-labelledby');
        });

        it('should have an aria-modal=true', () => {
          cy.findByLabelText('Delete Item').should('have.attr', 'aria-modal', 'true');
        });

        it('should contain the title', () => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          cy.findByLabelText('Delete Item').should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the Cancel button element', () => {
          cy.findByLabelText('Item name').should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          cy.focused()
            .tab()
            .should('contain', 'Delete')
            .tab()
            .should('contain', 'Cancel')
            .tab();
          cy.findByLabelText('Item name').should('have.focus');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should not close the modal', () => {
          cy.findByLabelText('Delete Item').should('be.visible');
        });
      });

      context('when the overlay is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getOverlay)
            .click('top');
        });

        it('should not close the modal', () => {
          cy.findByLabelText('Delete Item').should('be.visible');
        });
      });
    });
  });

  context(`given the 'StackedModals' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Popups/Modal', 'StackedModals');
    });

    context('when both modals are opened', () => {
      beforeEach(() => {
        cy.contains('button', 'Delete Item').click();
        cy.contains('button', 'Yes, Delete').click();
      });

      it('should open the second modal', () => {
        cy.findByLabelText('Really Delete Item').should('exist');
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the second modal', () => {
          cy.findByLabelText('Really Delete Item').should('not.exist');
        });

        it('should not close the first modal', () => {
          cy.findByLabelText('Delete Item').should('exist');
        });
      });

      context('when the overlay is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Really Delete Item')
            .pipe(h.modal.getOverlay)
            .click('top');
        });

        it('should close the second modal', () => {
          cy.findByLabelText('Really Delete Item').should('not.exist');
        });

        it('should not close the first modal', () => {
          cy.findByLabelText('Delete Item').should('exist');
        });
      });
    });
  });

  context(`given the 'ModalWithPopup' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Popups/Modal', 'ModalWithPopup');
    });

    context('when both modal and popup are opened', () => {
      beforeEach(() => {
        cy.contains('button', 'Delete Item').click();
        cy.contains('button', 'Yes, Delete').click();
      });

      it('should open the second modal', () => {
        cy.findByLabelText('Really Delete Item').should('exist');
      });

      context('when the modal overlay is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Delete Item')
            .pipe(h.modal.getOverlay)
            .click('top');
        });

        it('should close the popup', () => {
          cy.findByLabelText('Really Delete Item').should('not.exist');
        });

        it('should not close the modal', () => {
          cy.findByLabelText('Delete Item').should('exist');
        });
      });
    });
  });
});
