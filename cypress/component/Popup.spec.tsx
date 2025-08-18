import * as h from '../helpers';

import {Basic} from '../../modules/react/popup/stories/examples/Basic';
import {CustomTarget} from '../../modules/react/popup/stories/examples/CustomTarget';
import {FocusRedirect} from '../../modules/react/popup/stories/examples/FocusRedirect';
import {MixedPopupTypes} from '../../modules/react/popup/stories/examples/MixedPopupTypes';
import {PopupWithNonHidablePopup} from '../../modules/react/popup/stories/examples/PopupWithNonHidablePopup';
import {ReturnFocusTest} from '../../modules/react/popup/stories/examples/ReturnFocusTest';
import {MultiplePopups} from '../../modules/react/popup/stories/examples/MultiplePopups';
import {CloseOnTargetHiddenTest} from '../../modules/react/popup/stories/examples/CloseOnTargetHiddenTest';
import {TooltipReturnFocus} from '../../modules/react/popup/stories/examples/TooltipReturnFocus';
import {ComboboxWithinPopup} from '../../modules/react/popup/stories/examples/ComboboxWithinPopup';
import {PopupWithFallbackPlacements} from '../../modules/react/popup/stories/examples/PopupWithFallbackPlacements';

describe('Popup', () => {
  context(`given the Basic example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Basic />);
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
          cy.findByRole('dialog').should('not.exist');
        });
      });

      context('when the escape key is pressed', () => {
        beforeEach(() => {
          cy.get('body').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should hide the popup', () => {
          cy.findByRole('dialog').should('not.exist');
        });
      });

      context('when outside the popup is clicked', () => {
        beforeEach(() => {
          cy.get('body').click('topLeft');
        });

        it('should close the popup', () => {
          cy.findByRole('dialog').should('not.exist');
        });
      });
    });
  });

  context('given the MultiplePopups example is rendered', () => {
    beforeEach(() => {
      cy.mount(<MultiplePopups />);
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
          cy.findByRole('dialog', {name: 'Popup 1'}).should('not.exist');
        });
      });
    });
  });

  context(`given the CustomTarget example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<CustomTarget />);
    });

    context('when the "Open" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open'}).click();
      });

      it('should show the popup', () => {
        cy.findByRole('dialog', {name: 'Popup'}).should('be.visible');
      });

      context('when the "Close" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).click();
        });

        it('should hide the popup', () => {
          cy.findByRole('dialog', {name: 'Popup'}).should('not.exist');
        });

        it('should move focus back to the "Open" button', () => {
          cy.findByRole('button', {name: 'Open'}).should('have.focus');
        });
      });
    });
  });

  context('given the FocusRedirect example is rendered', () => {
    beforeEach(() => {
      cy.mount(<FocusRedirect />);
    });

    context('when the "Delete Item" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Delete Item'}).realClick();
      });

      it('should show the popup', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
      });

      context('when the "Delete" button has focus and the tab key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Delete'}).focus().realPress('Tab');
        });

        it('should hide the popup', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('not.exist');
        });

        it('should redirect focus to the "Next Focusable Button" button', () => {
          cy.findByRole('button', {name: 'Next Focusable Button'}).should('have.focus');
        });
      });
    });
  });

  context('given the PopupWithNonHidablePopup example is rendered', () => {
    beforeEach(() => {
      cy.mount(<PopupWithNonHidablePopup />);
    });

    context('when Open Popup 1 button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Popup 1'}).click();
      });

      it('should open Popup 1', () => {
        cy.findByRole('dialog', {name: 'Popup 1'}).should('be.visible');
      });

      context('then Open Popup 2 button is clicked', () => {
        const Popup3Title = 'Popup 2 (Not hidable on outside click)';
        beforeEach(() => {
          cy.findByText('Open Popup 2').click();
        });

        it('should open Popup 2 in front of Popup 1', () => {
          cy.findByRole('dialog', {name: Popup3Title}).should('be.visible');
          cy.findByRole('dialog', {name: 'Popup 1'}).should('be.visible');

          cy.findByRole('dialog', {name: Popup3Title}).should(
            h.popup.beOnTopOfLabelledByText('Popup 1')
          );
        });

        context('then the close button in Popup 2 is clicked', () => {
          beforeEach(() => {
            cy.findByRole('dialog', {name: Popup3Title})
              .findByRole('button', {name: 'Close'})
              .click();
          });

          it('should close Popup 2', () => {
            cy.findByRole('dialog', {name: Popup3Title}).should('not.exist');
          });

          it('should not close Popup 1', () => {
            cy.findByRole('dialog', {name: 'Popup 1'}).should('be.visible');
          });
        });
      });
    });
  });

  context('given the MixedPopupTypes story is rendered', () => {
    beforeEach(() => {
      cy.mount(<MixedPopupTypes />);
    });

    it('should start with Window 3 stacked on top of 3 Windows', () => {
      cy.findByRole('dialog', {name: 'Window 3'})
        .should(h.popup.beOnTopOfLabelledByText('Window 2'))
        .should(h.popup.beOnTopOfLabelledByText('Window 4'))
        .should(h.popup.beOnTopOfLabelledByText('Window 1'));
    });

    context('when Window 2 is clicked', () => {
      beforeEach(() => {
        cy.findByLabelText('Window 2').click();
      });

      it('should place Window 2 above others', () => {
        cy.findByRole('dialog', {name: 'Window 2'})
          .should(h.popup.beOnTopOfLabelledByText('Window 3'))
          .should(h.popup.beOnTopOfLabelledByText('Window 1'));
      });
    });

    context('when "Contents of Window 1" text is hovered', () => {
      beforeEach(() => {
        cy.findByText('Contents of Window 1').trigger('mouseover');
      });

      it('should place Window 1 Tooltip above all other stacked UI elements', () => {
        cy.findByRole('tooltip', {name: 'Really long tooltip showing how popup stacks overlap 1'})
          .should(h.popup.beOnTopOfLabelledByText('Window 1'))
          .should(h.popup.beOnTopOfLabelledByText('Window 2'))
          .should(h.popup.beOnTopOfLabelledByText('Window 4'));
      });
    });

    context('when "Delete Item" button is clicked', () => {
      beforeEach(() => {
        cy.contains('button', 'Delete Item').click();
      });

      it('should open "Delete Item" popup', () => {
        cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
      });

      context('when Window 2 is clicked', () => {
        beforeEach(() => {
          cy.findByRole('dialog', {name: 'Window 2'}).click();
        });

        it('should close "Delete Item" popup', () => {
          cy.findByLabelText('Delete Item').should('not.exist');
        });

        it('should place Window 2 above others', () => {
          cy.findByRole('dialog', {name: 'Window 2'})
            .should(h.popup.beOnTopOfLabelledByText('Window 1'))
            .should(h.popup.beOnTopOfLabelledByText('Window 3'));
        });
      });

      context('when Window 2 Tooltip is hovered', () => {
        beforeEach(() => {
          cy.findByText('Contents of Window 2').trigger('mouseover');
        });

        context('when "Contents of Window 2" text is clicked', () => {
          beforeEach(() => {
            cy.findByText('Contents of Window 2').click();
          });

          it('should close "Delete Item" popup', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('not.exist');
          });

          it('should place Window 2 above others', () => {
            cy.findByRole('dialog', {name: 'Window 2'})
              .should(h.popup.beOnTopOfLabelledByText('Window 1'))
              .should(h.popup.beOnTopOfLabelledByText('Window 3'));
          });
        });

        context('when the Escape key is pressed', () => {
          it('should close the Tooltip', () => {
            cy.clock();
            cy.tick(300); // advance the timer by the amount of default delay time
            cy.get('html').trigger('keydown', {
              key: 'Escape',
            });
            cy.findByRole('tooltip', {
              name: 'Really long tooltip showing how popup stacks overlap 1',
            }).should('not.exist');
          });

          it('should not close the "Delete Item" popup', () => {
            cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
          });

          context('when the Escape key is pressed again', () => {
            beforeEach(() => {
              cy.get('html').trigger('keydown', {
                key: 'Escape',
              });
            });

            it('should close the "Delete Item" popup', () => {
              cy.findByRole('dialog', {name: 'Delete Item'}).should('not.exist');
            });
          });
        });
      });

      context('when an area outside popups is clicked', () => {
        beforeEach(() => {
          cy.get('html').click('bottomRight');
        });

        it('should close "Delete Item" popup', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('not.exist');
        });
      });

      context('when the Escape key is pressed', () => {
        beforeEach(() => {
          cy.get('html').trigger('keydown', {
            key: 'Escape',
          });
        });

        it('should close "Delete Item" popup', () => {
          cy.findByRole('dialog', {name: 'Delete Item'}).should('not.exist');
        });
      });

      context('when the "Delete" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Delete'}).click();
        });

        it('should open the "Really Delete Item" popup', () => {
          cy.findByRole('dialog', {name: 'Really Delete Item'}).should('be.visible');
        });

        context('when "Contents of Window 2" text is focused', () => {
          beforeEach(() => {
            cy.findByText('Contents of Window 2').focus();
          });

          it('should open the tooltip', () => {
            cy.findByRole('tooltip', {
              name: 'Really long tooltip showing how popup stacks overlap 2',
            }).should('be.visible');
          });

          context('when an area outside popups is clicked', () => {
            beforeEach(() => {
              cy.get('html').click();
            });

            it('should close the tooltip', () => {
              cy.findByRole('tooltip', {
                name: 'Really long tooltip showing how popup stacks overlap 2',
              }).should('not.exist');
            });

            it('should close the "Really Delete Item" popup', () => {
              cy.findByRole('dialog', {name: 'Really Delete Item'}).should('not.exist');
            });

            it('should NOT close the "Delete Item" popup', () => {
              cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
            });
          });
        });
      });
    });
  });

  context('given the ReturnFocusTest story is rendered', () => {
    beforeEach(() => {
      cy.mount(<ReturnFocusTest />);
    });

    // We disable the default scroll behavior so we can tightly control how these specs scroll. This
    // means we'll have to manually add `scrollIntoView` to get Cypress to scroll only where we want
    context('when the "Open Popup" is clicked', {scrollBehavior: false}, () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Popup'}).scrollIntoView().click();
      });

      context('when the user clicks outside', () => {
        beforeEach(() => {
          cy.get('body').click('bottom');
        });

        it('should focus the "Open Popup" button', () => {
          cy.findByRole('button', {name: 'Open Popup'}).should('have.focus');
        });
      });

      context('when the user clicks the input', () => {
        beforeEach(() => {
          cy.findByRole('textbox', {name: 'Name'}).scrollIntoView().click();
        });

        it('should not focus the "Open Popup" button', () => {
          cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
        });
      });

      context('when the user clicks on the tabindex button', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Button with TabIndex=-1'}).should('not.have.focus');
        });

        it('should not focus the "Open Popup" button', () => {
          cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
        });
      });

      context('when the user scrolls to the top', () => {
        beforeEach(() => {
          cy.findByTestId('scroll-area').scrollTo('top');
        });

        context('when the user clicks outside', () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it('should not focus the "Open Popup" button', () => {
            cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
          });
        });
      });

      context('when the user scrolls to the bottom', () => {
        beforeEach(() => {
          cy.findByTestId('scroll-area').scrollTo('bottom');
        });

        context('when the user clicks outside', () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it('should not focus the "Open Popup" button', () => {
            cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
          });
        });
      });

      context('when the user scrolls to the left', () => {
        beforeEach(() => {
          cy.findByTestId('scroll-area').scrollTo('left');
        });

        context('when the user clicks outside', () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it('should not focus the "Open Popup" button', () => {
            cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
          });
        });
      });

      context('when the user scrolls to the left', () => {
        beforeEach(() => {
          cy.findByTestId('scroll-area').scrollTo('left');
        });

        context('when the user clicks outside', () => {
          beforeEach(() => {
            cy.get('body').click('top');
          });

          it('should not focus the "Open Popup" button', () => {
            cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
          });
        });
      });

      context('when the user closes the popup using the link', () => {
        beforeEach(() => {
          cy.findByTestId('focus-text-input-link').click();
        });

        it('should focus the "Name" input', () => {
          cy.findByRole('button', {name: 'Open Popup'}).should('not.have.focus');
          cy.findByLabelText('Name').should('have.focus');
        });
      });
    });
  });

  context('given the CloseOnTargetHiddenTest story is rendered', () => {
    beforeEach(() => {
      cy.mount(<CloseOnTargetHiddenTest />);
    });

    // We disable the default scroll behavior so we can tightly control how these specs scroll. This
    // means we'll have to manually add `scrollIntoView` to get Cypress to scroll only where we want
    context('when the "Open Popup" is clicked', {scrollBehavior: false}, () => {
      beforeEach(() => {
        cy.findByTestId('scroll-area').scrollTo('center');
        cy.findByRole('button', {name: 'Open Popup'}).click();
      });

      it('should open the popup', () => {
        cy.findByRole('dialog').should('exist');
      });

      [
        {
          property: 'scrollTop',
          value: 100,
        },
        {
          property: 'scrollTop',
          value: 450,
        },
        {
          property: 'scrollLeft',
          value: 400,
        },
        {
          property: 'scrollLeft',
          value: 150,
        },
      ].forEach(io => {
        context(`when the scrollable area is scrolled to ${io.property}: ${io.value}`, () => {
          beforeEach(() => {
            cy.findByTestId('scroll-area').pipe($el => $el.prop(io.property, io.value));
          });

          it('should not close the popup', () => {
            cy.findByRole('dialog').should('exist');
          });
        });
      });

      [
        {
          property: 'scrollTop',
          value: 70,
        },
        {
          property: 'scrollTop',
          value: 480,
        },
        {
          property: 'scrollLeft',
          value: 70,
        },
        {
          property: 'scrollLeft',
          value: 480,
        },
      ].forEach(io => {
        context(`when the scrollable area is scrolled to ${io.property}: ${io.value}`, () => {
          beforeEach(() => {
            cy.findByTestId('scroll-area').pipe($el => $el.prop(io.property, io.value));
          });

          it('should close the popup', () => {
            cy.findByRole('dialog').should('not.exist');
          });
        });
      });
    });
  });

  context(`given the TooltipReturnFocus example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<TooltipReturnFocus />);
    });

    context('when the icon button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Popup'}).click();
      });

      it('should show the popup', () => {
        cy.findByRole('dialog', {name: 'Popup'}).should('be.visible');
      });

      context('when the "Close" icon button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Close'}).click();
        });

        it('should focus on the icon button', () => {
          cy.findByRole('button', {name: 'Open Popup'}).should('have.focus');
        });

        it('should show the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });
    });
  });

  context(`given the ComboboxWithinPopup example is rendered`, () => {
    beforeEach(() => {
      cy.mount(<ComboboxWithinPopup />);
    });

    context('when the button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Open Popup'}).click();
      });

      it('should show the popup', () => {
        cy.findByRole('dialog').should('be.visible');
      });

      context('when is open and the first item is clicked', () => {
        beforeEach(() => {
          cy.findByRole('combobox').click();
          cy.findAllByRole('option').eq(0).click();
        });

        it('should not close the popup on select', () => {
          cy.findByRole('dialog').should('be.visible');
        });
      });
    });
  });

  context(
    `given the [Testing/Popups/Popup, PopupWithFallbackPlacements] example is rendered`,
    () => {
      beforeEach(() => {
        cy.mount(<PopupWithFallbackPlacements />);
      });

      context('check the fallback placements', () => {
        [
          {
            placement: 'top',
            fallbackPlacement: 'bottom',
            buttonName: 'Placement Top',
            isMovedToSide: false,
          },
          {
            placement: 'left',
            fallbackPlacement: 'right',
            buttonName: 'Placement Left',
            isMovedToSide: true,
          },
          {
            placement: 'right',
            fallbackPlacement: 'left',
            buttonName: 'Placement Right',
            isMovedToSide: true,
          },
          {
            placement: 'bottom',
            fallbackPlacement: 'top',
            buttonName: 'Placement Bottom',
            isMovedToSide: false,
          },
        ].forEach(io => {
          context(`when the preferred placement is set to ${io.placement}`, () => {
            it(`should show the fallback placement: ${io.fallbackPlacement}`, () => {
              cy.findByRole('button', {name: io.buttonName}).click();
              cy.findByRole('dialog')
                .parents('div[data-popper-placement]')
                .should('have.attr', 'data-popper-placement', io.fallbackPlacement);
            });
          });
        });
      });
    }
  );
});
