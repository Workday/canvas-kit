import * as h from '../helpers';
import {Basic} from '../../modules/react/modal/stories/examples/Basic';
import {WithoutCloseIcon} from '../../modules/react/modal/stories/examples/WithoutCloseIcon';
import {CustomFocus} from '../../modules/react/modal/stories/examples/CustomFocus';
import {CustomTarget} from '../../modules/react/modal/stories/examples/CustomTarget';

import {WithRadioButtons} from '../../modules/react/modal/stories/examples/WithRadioButtons';
import {StackedModals} from '../../modules/react/modal/stories/examples/StackedModals';
import {WithTooltips} from '../../modules/react/modal/stories/examples/WithTooltips';
import {ModalWithPopup} from '../../modules/react/modal/stories/examples/ModalWithPopup';
import {IframeTest} from '../../modules/react/modal/stories/examples/IframeTest';

describe('Modal', () => {
  context(`given the Basic example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
      cy.wait(150);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open License'}).focus();
      });

      it('should be the focused item on the page', () => {
        cy.findByRole('button', {name: 'Open License'}).should('have.focus');
      });
    });

    context('when the target button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open License'}).click();
      });

      it('should open the modal', () => {
        cy.findByRole('dialog', {name: 'MIT License'}).should('be.visible');
      });

      it('should place the portal as a child of the body element', () => {
        cy.get('body').then($body => {
          cy.findByRole('dialog', {name: 'MIT License'})
            .pipe(h.modal.getOverlay)
            .parent()
            .should($el => {
              expect($el[0]).to.equal($body[0]);
            });
        });
      });

      it('should hide non-modal content from assistive technology', () => {
        cy.findByRole('dialog', {name: 'MIT License'})
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
          cy.findByRole('dialog', {name: 'MIT License'}).should('have.attr', 'role', 'dialog');
        });

        it('should have an aria-labelledby attribute', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('have.attr', 'aria-labelledby');
        });

        it('should have an aria-modal=false', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('have.attr', 'aria-modal', 'false');
        });

        it('should contain the title', () => {
          cy.findByRole('dialog', {name: 'MIT License'})
            .pipe(h.modal.getTitle)
            .should('contain', 'MIT License');
        });

        it('should be labelled by the title element', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should($modal => {
            const labelId = $modal.attr('aria-labelledby');
            const titleId = h.modal.getTitle($modal).attr('id');

            expect(labelId).to.equal(titleId);
          });
        });

        it('should transfer focus to the x icon element', () => {
          cy.findByRole('dialog', {name: 'MIT License'})
            .findByRole('button', {name: 'Close'})
            .should('have.focus');
        });

        it('should trap focus inside the modal element', () => {
          cy.tab().should('contain', 'Acknowledge').tab().should('contain', 'Cancel').tab();
          cy.findByRole('dialog', {name: 'MIT License'})
            .findByRole('button', {name: 'Close'})
            .should('have.focus');
        });
      });

      context('when clicking inside the modal', () => {
        beforeEach(() => {
          // click somewhere on the modal where there shouldn't be a close target
          cy.findByRole('dialog', {name: 'MIT License'}).click('top');
        });

        it('should not close the modal', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('be.visible');
        });
      });

      context('when the close button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).click();
        });

        it('should close the modal', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('not.exist');
        });

        it('should transfer focus back to the target button', () => {
          cy.findByRole('button', {name: 'Open License'}).should('have.focus');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close the modal', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('not.exist');
        });
      });

      context('when clicking outside the modal', () => {
        beforeEach(() => {
          cy.get('body').click('top');
        });

        it('should close the modal', () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('not.exist');
        });
      });

      context(`when clicking outside the modal on mobile view`, () => {
        beforeEach(() => {
          cy.viewport('iphone-x');
          cy.get('body').realTouch();
        });

        it(`should not close the modal`, () => {
          cy.findByRole('dialog', {name: 'MIT License'}).should('be.visible');
        });
      });
    });
  });
});

context(`given the [Testing/Popups/Modal, With Tooltips] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<WithTooltips />);
    cy.wait(150);
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
          cy.findByRole('tooltip', {name: 'Not so sure'}).should('not.exist');
        });

        it(`should close the modal`, () => {
          cy.findByRole('dialog', {name: 'Open Modal'}).should('not.exist');
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
          cy.get('[role="tooltip"]').should('be.visible');
        });

        context(`when clicking outside the modal`, () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it(`should close the 'OK' tooltip`, () => {
            cy.findByRole('tooltip', {
              name: 'Really, Really, Really, Really, Really sure',
            }).should('not.exist');
          });

          it(`should close the 'Hidable Popup' popup`, () => {
            cy.findByRole('dialog', {name: 'Hidable Popup'}).should('not.exist');
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

        it(`should be focused`, () => {
          cy.findByRole('button', {name: 'OK'}).should('have.focus');
        });

        it(`should open the 'OK' tooltip`, () => {
          cy.findByRole('tooltip', {name: 'Really, Really, Really, Really, Really sure'})
            .wait(50)
            .should('be.visible');
        });

        context(`when clicking outside the modal`, () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it(`should not close the 'Non-hidable Popup' popup`, () => {
            cy.findByRole('dialog', {name: 'Non-hidable Popup'}).should('be.visible');
          });

          it(`should close the modal`, () => {
            cy.findByRole('dialog', {name: 'Non-hidable'}).should('not.exist');
          });

          it(`should close the 'OK' tooltip`, () => {
            cy.findByRole('tooltip', {
              name: 'Really, Really, Really, Really, Really sure',
            }).should('not.exist');
          });
        });
      });
    });
  });
});

context(`given the [Testing/Popups/Modal, With Radio buttons] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<WithRadioButtons />);
    cy.wait(150);
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

context(`given the [Components/Popups/Modal, Without close icon] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<WithoutCloseIcon />);
    cy.wait(150);
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

    it('should transfer focus to the cancel button', () => {
      cy.findByRole('button', {name: 'Cancel'}).should('have.focus');
    });

    context('the modal', () => {
      it('should have a the role of dialog', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'role', 'dialog');
      });

      it('should have an aria-labelledby attribute', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-labelledby');
      });

      it('should have an aria-modal=false', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('have.attr', 'aria-modal', 'false');
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

      it('should transfer focus to the cancel button', () => {
        cy.findByRole('button', {name: 'Cancel'}).should('have.focus');
      });

      it('should trap focus inside the modal element', () => {
        cy.findByRole('button', {name: 'Cancel'}).should('have.focus');
        cy.tab()
          .should('contain', 'Delete')
          .tab()
          .should('contain', 'Delete Item')
          .tab()
          .should('contain', 'Cancel');
        cy.focused().should('have.text', 'Cancel');
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

context(`given the [Components/Popups/Modal, Custom focus] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<CustomFocus />);
  });

  context('when button is focused', () => {
    beforeEach(() => {
      cy.findByRole('button', {name: 'Acknowledge License'}).focus();
    });

    it('should be the focused item on the page', () => {
      cy.findByRole('button', {name: 'Acknowledge License'}).should('have.focus');
    });
  });

  context('when the target button is clicked', () => {
    beforeEach(() => {
      cy.findByRole('button', {name: 'Acknowledge License'}).focus().should('exist').click();
    });

    it('should open the modal', () => {
      cy.findByRole('dialog', {name: 'Acknowledge License'}).should('be.visible');
    });

    context('the modal', () => {
      it('should have a the role of dialog', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'}).should(
          'have.attr',
          'role',
          'dialog'
        );
      });

      it('should have an aria-labelledby attribute', () => {
        cy.get('[role="dialog"]').should('exist');
        cy.get('[role="dialog"]').should('have.attr', 'aria-labelledby');
      });

      it('should have an aria-modal=false', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'}).should(
          'have.attr',
          'aria-modal',
          'false'
        );
      });

      it('should contain the title', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'})
          .pipe(h.modal.getTitle)
          .should('contain', 'Acknowledge');
      });

      it('should be labelled by the title element', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'}).should($modal => {
          const labelId = $modal.attr('aria-labelledby');
          const titleId = h.modal.getTitle($modal).attr('id');

          expect(labelId).to.equal(titleId);
        });
      });

      it('should transfer focus to the Acknowledge button element', () => {
        cy.findByLabelText('Initials').should('have.focus');
      });

      it('should trap focus inside the modal element', () => {
        cy.focused()
          .tab()
          .should('contain', 'Acknowledge')
          .tab()
          .should('contain', 'Cancel')
          .tab()
          .should('have.attr', 'aria-label', 'Close')
          .tab();
        cy.findByLabelText('Initials').should('have.focus');
      });
    });

    context('when the Escape key is pressed', () => {
      beforeEach(() => {
        cy.get('body').trigger('keydown', {
          key: 'Escape',
        });
      });

      it('should close the modal', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'}).should('not.exist');
      });
    });

    context('when clicking outside the modal', () => {
      beforeEach(() => {
        cy.get('body').click('top');
      });

      it('should close the modal', () => {
        cy.findByRole('dialog', {name: 'Acknowledge License'}).should('not.exist');
      });
    });
  });
});

context(`given the [Testing/Popups/Modal, StackedModals] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<StackedModals />);
    cy.wait(150);
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

context(`given the [Testing/Popups/Modal, ModalWithPopup] story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<ModalWithPopup />);
    cy.wait(150);
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

context(`given the [Components/Popups/Modal, CustomTarget] example is rendered`, () => {
  beforeEach(() => {
    cy.mount(<CustomTarget />);
    cy.wait(150);
  });

  context('when the "Open" button is clicked', () => {
    beforeEach(() => {
      // cy.findByRole('button', {name: 'Open'}) is failing for some reason
      cy.contains('button', 'Open').click();
    });

    it('should show the modal', () => {
      cy.findByRole('dialog', {name: 'Modal Heading'}).should('be.visible');
    });

    context('when the "Close" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Close'}).click();
      });

      it('should hide the modal', () => {
        cy.findByRole('dialog', {name: 'Modal'}).should('not.exist');
      });

      it('should move focus back to the "Open" button', () => {
        cy.contains('button', 'Open').should('have.focus');
      });
    });
  });
});

context(`given the 'Iframe Test' story is rendered`, () => {
  beforeEach(() => {
    cy.mount(<IframeTest />);
    cy.wait(150);
  });

  context('when the modal is opened', () => {
    beforeEach(() => {
      cy.contains('button', 'Delete Item').click();
    });

    context('when Shift + Tab key is pressed', () => {
      beforeEach(() => {
        cy.focused().tab({shift: true});
      });

      it('should focus in the iframe', () => {
        cy.get('iframe').should('exist');
      });

      // iframes have been an issue with the cypress component specs. This can be done manually as an alternative
      it.skip('should focus on the last button in the iframe', () => {
        cy.findByRole('iframe').its('0.contentDocument.body').should('exist');
        cy.findByRole('iframe')
          .its('0.contentDocument.body')
          .findByTestId('button2')
          .should('have.focus');
      });

      // skipping because the cy.tab plugin isn't capable of starting inside an iframe. We have to test this manually
      context.skip('when the Tab key is pressed', () => {
        beforeEach(() => {
          cy.get('iframe').its('0.contentDocument.body').then(cy.wrap).focused().tab();
        });

        it('should focus on the close button', () => {
          cy.get('button[aria-label="Close"]').should('have.focus');
        });
      });
    });
  });
});
