import * as h from '../helpers';

describe('Popup', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the [Components/Popups/Popup/React, Basic] example is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Popups/Popup/React', 'Basic');
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
          cy.findByRole('dialog', {name: 'Popup 1'}).should('not.exist');
        });
      });
    });
  });

  context(
    'given the [Testing/React/Popups/Popup, PopupWithNonHidablePopup] example is rendered',
    () => {
      beforeEach(() => {
        h.stories.load('Testing/React/Popups/Popup', 'PopupWithNonHidablePopup');
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
    }
  );

  context('given the [Testing/React/Popups/Popup, MixedPopupTypes] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Testing/React/Popups/Popup', 'MixedPopupTypes');
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
          beforeEach(() => {
            cy.get('html').trigger('keydown', {
              key: 'Escape',
            });
          });

          it('should close the Tooltip', () => {
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
              }).should('not.be.visible');
            });

            it('should close the "Really Delete Item" popup', () => {
              cy.findByRole('dialog', {name: 'Really Delete Item'}).should('be.not.visible');
            });

            it('should NOT close the "Delete Item" popup', () => {
              cy.findByRole('dialog', {name: 'Delete Item'}).should('be.visible');
            });
          });
        });
      });
    });
  });
});
