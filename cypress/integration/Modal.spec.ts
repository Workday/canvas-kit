import * as h from '../helpers';

describe('Modal', () => {
  before(() => {
    h.stories.visit();
  });

  ['Default', 'WithoutHook'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Popups/Modal/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when button is focused', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Delete Item'}).focus();
        });

        it('should be the focused item on the page', () => {
          cy.findByRole('button', {name: 'Delete Item'}).should('have.focus');
        });
      });

      context('when the target button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Delete Item'}).click();
        });

        it('should open the modal', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });

        it('should place the portal as a child of the body element', () => {
          cy.get('body').then($body => {
            cy.findByRole('dialog', {name: 'Delete Item'})
              .pipe(h.modal.getOverlay)
              .parent()
              .should($el => {
                expect($el[0]).to.equal($body[0]);
              });
          });
        });

        it('should hide non-modal content from assistive technology', () => {
          cy.findByRole('dialog', {name: 'Delete Item'})
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
            cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'role', 'dialog');
          });

          it('should have an aria-labelledby attribute', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-labelledby');
          });

          it('should have an aria-modal=true', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should(
              'have.attr',
              'aria-modal',
              'true'
            );
          });

          it('should contain the title', () => {
            cy.findByRole('dialog', {name: 'Delete Item'})
              .pipe(h.modal.getTitle)
              .should('contain', 'Delete Item');
          });

          it('should be labelled by the title element', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should($modal => {
              const labelId = $modal.attr('aria-labelledby');
              const titleId = h.modal.getTitle($modal).attr('id');

              expect(labelId).to.equal(titleId);
            });
          });

          it('should transfer focus to the x icon element', () => {
            cy.findByRole('dialog', {name: 'Delete Item'})
              .findByRole('button', {name: 'Close'})
              .should('have.focus');
          });

          it('should trap focus inside the modal element', () => {
            cy.tab()
              .should('contain', 'Delete')
              .tab()
              .should('contain', 'Cancel')
              .tab();
            cy.findByRole('dialog', {name: 'Delete Item'})
              .findByRole('button', {name: 'Close'})
              .should('have.focus');
          });
        });

        context('when clicking inside the modal', () => {
          beforeEach(() => {
            // click somewhere on the modal where there shouldn't be a close target
            cy.findByRole('dialog', {name: 'Delete Item'}).click('top');
          });

          it('should not close the modal', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
          });
        });

        context('when the close button is clicked', () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'Close'}).click();
          });

          it('should close the modal', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('not.be.visible');
          });

          it('should transfer focus back to the target button', () => {
            cy.findByRole('button', {name: 'Delete Item'}).should('have.focus');
          });
        });

        context('when the Escape key is pressed', () => {
          beforeEach(() => {
            cy.get('body').trigger('keydown', {
              key: 'Escape',
            });
          });

          it('should close the modal', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('not.be.visible');
          });
        });

        context('when clicking outside the modal', () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it('should close the modal', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('not.be.visible');
          });
        });
      });
    });
  });

  context(`given the 'With Tooltips' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing/React/Popups/Modal', 'With Tooltips');
    });

    context('when the modal is open', () => {
      beforeEach(() => {
        cy.findByText('Open Modal').click();
      });

      it('should open the modal', () => {
        cy.findByRole('dialog', {name: 'Open Modal'}).should('be.visible');
      });

      context(`when the 'Cancel' button is focused`, () => {
        beforeEach(() => {
          cy.contains('Cancel').focus();
        });

        it(`should open the 'Cancel' tooltip`, () => {
          cy.findByRole('tooltip', {name: 'Not so sure'}).should('be.visible');
        });

        context(`when clicking outside the modal`, () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it(`should close the 'Cancel' tooltip`, () => {
            cy.findByRole('tooltip', {name: 'Not so sure'}).should('not.be.visible');
          });

          it(`should close the modal`, () => {
            cy.findByRole('dialog', {name: 'Open Modal'}).should('not.be.visible');
          });
        });
      });

      context(`when the 'Hidable Popup' button is clicked`, () => {
        beforeEach(() => {
          cy.findByText('Hidable Popup').click();
        });

        it(`should open the 'Hidable Popup' popup`, () => {
          cy.findByRole('dialog', {name: 'Hidable Popup'}).should('be.visible');
        });

        context(`when the 'OK' button is focused`, () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'OK'}).focus();
          });
          it(`should open the 'OK' tooltip`, () => {
            cy.findByRole('tooltip', {name: 'Really, Really, Really, Really, Really sure'}).should(
              'be.visible'
            );
          });

          context(`when clicking outside the modal`, () => {
            beforeEach(() => {
              cy.get('body').click('top');
            });

            it(`should close the 'OK' tooltip`, () => {
              cy.findByRole('tooltip', {
                name: 'Really, Really, Really, Really, Really sure',
              }).should('not.be.visible');
            });

            it(`should close the 'Hidable Popup' popup`, () => {
              cy.findByRole('dialog', {name: 'Hidable Popup'}).should('not.be.visible');
            });

            it(`should keep the modal open`, () => {
              cy.findByRole('dialog', {name: 'Open Modal'}).should('be.visible');
            });
          });
        });
      });

      context(`when the 'Non-hidable Popup' button is clicked`, () => {
        beforeEach(() => {
          cy.findByText('Non-hidable Popup').click();
        });

        it(`should open the 'Non-hidable Popup' popup`, () => {
          cy.findByRole('dialog', {name: 'Non-hidable Popup'}).should('be.visible');
        });

        context(`when the 'OK' button is focused`, () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'OK'}).focus();
          });
          it(`should open the 'OK' tooltip`, () => {
            cy.findByRole('tooltip', {name: 'Really, Really, Really, Really, Really sure'}).should(
              'be.visible'
            );
          });

          context(`when clicking outside the modal`, () => {
            beforeEach(() => {
              cy.get('body').click('top');
            });

            it(`should not close the 'Non-hidable Popup' popup`, () => {
              cy.findByRole('dialog', {name: 'Non-hidable Popup'}).should('be.visible');
            });

            it(`should close the modal`, () => {
              cy.findByRole('dialog', {name: 'Non-hidable'}).should('not.be.visible');
            });

            it(`should close the 'OK' tooltip`, () => {
              cy.findByRole('tooltip', {
                name: 'Really, Really, Really, Really, Really sure',
              }).should('not.be.visible');
            });
          });
        });
      });
    });
  });

  context(`given the 'With Radio buttons' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Modal/React', 'With Radio buttons');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('test trap focus', () => {
      beforeEach(() => {
        cy.contains('With Radio Buttons').focus();
        cy.contains('With Radio Buttons').click();
      });

      it('should trap focus inside the modal element', () => {
        cy.findByLabelText('Select Item').should('be.visible');

        cy.focused()
          .tab()
          .should('have.attr', 'value', 'email')
          .tab()
          .should('have.attr', 'aria-label', 'Close')
          .tab();
      });
    });
  });

  context(`given the 'Without close icon' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Modal/React', 'Without close icon');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).focus();
      });

      it('should be the focused item on the page', () => {
        cy.findByRole('button', {name: 'Delete Item'}).should('have.focus');
      });
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).click();
      });

      it('should open the modal', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
      });

      it('should place the portal as a child of the body element', () => {
        cy.get('body').then($body => {
          cy.findByRole('dialog', {name: 'Delete Item'})
            .pipe(h.modal.getOverlay)
            .parent()
            .should($el => {
              expect($el[0]).to.equal($body[0]);
            });
        });
      });

      it('should hide non-modal content from assistive technology', () => {
        cy.findByRole('dialog', {name: 'Delete Item'})
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
        cy.findByRole('dialog', {name: 'Delete Item'})
          .pipe(h.modal.getTitle)
          .should('have.focus');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-labelledby');
        });

        it('should have an aria-modal=true', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-modal', 'true');
        });

        it('should contain the title', () => {
          cy.findByRole('dialog', {name: 'Delete Item'})
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the header element', () => {
          cy.findByRole('dialog', {name: 'Delete Item'})
            .pipe(h.modal.getTitle)
            .should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          cy.findByRole('dialog', {name: 'Delete Item'})
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
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });
      });

      context('when clicking outside the modal', () => {
        beforeEach(() => {
          cy.get('body').click('top');
        });

        it('should not close the modal', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });
      });
    });
  });

  context(`given the 'Custom focus' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Modal/React', 'Custom focus');
    });

    context('when button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).focus();
      });

      it('should be the focused item on the page', () => {
        cy.findByRole('button', {name: 'Delete Item'}).should('have.focus');
      });
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).click();
      });

      it('should open the modal', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
      });

      context('the modal', () => {
        it('should have a the role of dialog', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-labelledby');
        });

        it('should have an aria-modal=true', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-modal', 'true');
        });

        it('should contain the title', () => {
          cy.findByRole('dialog', {name: 'Delete Item'})
            .pipe(h.modal.getTitle)
            .should('contain', 'Delete Item');
        });

        it('should be labelled by the title element', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should($modal => {
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
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });
      });

      context('when clicking outside the modal', () => {
        beforeEach(() => {
          cy.get('body').click('top');
        });

        it('should not close the modal', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
        });
      });
    });
  });

  context(`given the 'StackedModals' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing/React/Popups/Modal', 'StackedModals');
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
          cy.findByRole('dialog', {name: 'Delete Item'}).should('exist');
        });
      });

      context('when clicking outside the modal', () => {
        beforeEach(() => {
          cy.get('body').click('top');
        });

        it('should close the second modal', () => {
          cy.findByLabelText('Really Delete Item').should('not.exist');
        });

        it('should not close the first modal', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('exist');
        });
      });
    });
  });

  context(`given the 'ModalWithPopup' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing/React/Popups/Modal', 'ModalWithPopup');
    });

    context('when both modal and popup are opened', () => {
      beforeEach(() => {
        cy.contains('button', 'Delete Item').click();
        cy.contains('button', 'Yes, Delete').click();
      });

      it('should open the second modal', () => {
        cy.findByLabelText('Really Delete Item').should('exist');
      });

      context('when clicking outside the modal', () => {
        beforeEach(() => {
          cy.get('body').click('top');
        });

        it('should close the popup', () => {
          cy.findByLabelText('Really Delete Item').should('not.exist');
        });

        it('should not close the modal', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('exist');
        });
      });
    });
  });
});
