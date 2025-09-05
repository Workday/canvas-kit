import {Autocomplete} from '../../modules/react/combobox/stories/examples/Autocomplete';

const haveAttrMatchingIdOf = (name: string, selector: string) => ($el: JQuery) => {
  const $matchingEl = Cypress.$(selector);

  expect($el).to.have.attr(name, $matchingEl.attr('id')!);
};

function waitForAutocompleteReady() {
  cy.wait(150); // debounce timer
  // wait for loading to be complete
  cy.get('[data-loading]').should('have.attr', 'data-loading', 'false');
}

describe('Autocomplete', () => {
  context(`given the 'Autocomplete' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Autocomplete />);
    });

    it('should have aria-haspopup set to listbox', () => {
      cy.findByRole('combobox').should('have.attr', 'aria-haspopup', 'listbox');
    });

    it('should have aria-expanded set to false', () => {
      cy.findByRole('combobox').should('have.attr', 'aria-expanded', 'false');
    });

    it('should not have an aria-activedescendant attribute', () => {
      cy.findByRole('combobox').should('not.have.attr', 'aria-activedescendant');
    });

    it('should have an aria-autocomplete attribute set to "list"', () => {
      cy.findByRole('combobox').should('have.attr', 'aria-autocomplete', 'list');
    });

    it('should not set aria-owns', () => {
      cy.findByRole('combobox').should('not.have.attr', 'aria-owns');
    });

    it('should not show menu', () => {
      cy.findByRole('listbox').should('not.exist');
    });

    it('should not show the clear button', () => {
      cy.findByLabelText('Reset Input').should('not.exist');
    });

    context('when the combobox is opened', () => {
      beforeEach(() => {
        cy.findByRole('combobox').click();
      });

      context('when the combobox is clicked', () => {
        beforeEach(() => {
          cy.findByRole('combobox').click();
        });

        it('should close the menu', () => {
          cy.findByRole('listbox').should('not.exist');
        });
      });

      it('should set the aria-owns to reference the listbox element', () => {
        cy.findByRole('combobox').should(haveAttrMatchingIdOf('aria-controls', '[role=listbox]'));
      });

      it('should show menu', () => {
        cy.findByRole('listbox').should('be.visible');
      });

      it('should not have activedescendant set', () => {
        cy.findByRole('combobox').should('not.have.attr', 'aria-activedescendant');
      });

      it('should not have visual focus on any element', () => {
        cy.get('[role="option"].focus').should('not.exist');
      });

      it('should not have aria-selected=true on any elements', () => {
        cy.get('[aria-selected=true]').should('not.exist');
      });

      context('when the user types a printable character "b"', () => {
        beforeEach(() => {
          cy.findByRole('combobox').clear().type('b');
          waitForAutocompleteReady();
        });

        it('should clear activedescendant', () => {
          cy.findAllByRole('combobox').should('not.have.attr', 'aria-activedescendant');
        });

        it('should not have visual focus on the first item', () => {
          cy.findAllByRole('option').eq(0).should('not.have.class', 'focus');
        });

        it('should set aria-selected=false to the first option', () => {
          cy.findAllByRole('option').eq(0).should('have.attr', 'aria-selected', 'false');
        });
      });

      context('when "Red" is typed', () => {
        beforeEach(() => {
          cy.findByRole('combobox').type('Red', {delay: 1});
          waitForAutocompleteReady();
        });

        it('should have the value entered as the value', () => {
          cy.findByRole('combobox').should('have.value', 'Red');
        });

        context('when escape key is pressed', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{esc}');
          });

          it('should close the listbox', () => {
            cy.findByRole('listbox').should('not.exist');
          });

          it('should keep focus on the combobox', () => {
            cy.findByRole('combobox').should('have.focus');
          });
        });

        context('when the clear button is clicked', () => {
          beforeEach(() => {
            // Force click because Cypress gets confused if an element had `pointer-events; none` at any point
            // in time, even if it doesn't at the point the click was attempted.
            cy.get('[data-testid=clear]').click({force: true});
          });

          it('should clear the combobox', () => {
            cy.findByRole('combobox').should('have.value', '');
          });

          it('should close the listbox', () => {
            cy.findByRole('listbox').should('not.exist');
          });

          it('should keep focus on the combobox', () => {
            cy.findByRole('combobox').should('have.focus');
          });
        });

        context('when down arrow key is pressed', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{downarrow}');
          });

          it('should have activedecendant set to the first option', () => {
            cy.findByRole('combobox').should(
              haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(0)')
            );
          });

          it('should set visual focus to the first option', () => {
            cy.findAllByRole('option').eq(0).should('have.class', 'focus');
          });

          context('when the user presses the enter key', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{enter}');
            });

            it('should set the combobox value to the option text value', () => {
              cy.findByRole('combobox').should('have.value', 'Red Apple 1');
            });

            it('should close the listbox', () => {
              cy.findByRole('listbox').should('not.exist');
            });

            context('when the user hits the "2" key', () => {
              beforeEach(() => {
                cy.findAllByRole('combobox').type('2');
                waitForAutocompleteReady();
              });

              it('should open the listbox', () => {
                cy.findByRole('listbox').should('be.visible');
              });

              it('should change the combobox value to reflect the key entered', () => {
                cy.findByRole('combobox').should('have.value', 'Red Apple 12');
              });

              it.skip('should change the filtered results', () => {
                cy.findByRole('option', {name: 'Red Apple 121'}).should('be.visible');
              });

              it('should set aria-selected to the first option', () => {
                cy.findAllByRole('option').eq(0).should('have.attr', 'aria-selected', 'true');
              });
            });
          });

          context('when the user presses metaKey + enter key', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{meta}{enter}');
            });

            it('should not set the combobox value to the option text value', () => {
              cy.findByRole('combobox').should('have.value', 'Red');
            });

            it('should not close the listbox', () => {
              cy.findByRole('listbox').should('be.visible');
            });
          });
        });

        context('when the user clicks on the first option', () => {
          beforeEach(() => {
            cy.findAllByRole('option').eq(0).click();
          });

          it('should set the combobox value to the option text value', () => {
            cy.findByRole('combobox').should('have.value', 'Red Apple 1');
          });

          it('should close the listbox', () => {
            cy.findByRole('listbox').should('not.exist');
          });

          it('should keep focus on combobox', () => {
            cy.findByRole('combobox').should('be.focused');
          });

          context('when the user clicks on the combobox', () => {
            beforeEach(() => {
              cy.findAllByRole('combobox').click();
            });

            it('should open the listbox again', () => {
              cy.findByRole('listbox').should('be.visible');
            });
          });
        });

        context('when down arrow key is pressed two times', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{downarrow}{downarrow}');
          });

          it('should have activedecendant set to the second option', () => {
            cy.findByRole('combobox').should(
              haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(1)')
            );
          });

          it('should set visual focus on the second option', () => {
            cy.findAllByRole('option').eq(1).should('have.class', 'focus');
          });

          it('should not have aria-selected=true on any elements', () => {
            cy.get('[aria-selected=true]').should('not.exist');
          });
        });

        context('when the value is "Red Apple 1"', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type(' Apple 1', {delay: 1});
            waitForAutocompleteReady();
          });

          context('when the value is "Red Apple 1" and down arrow key is pressed six times', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type(
                '{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}'
              );
            });
            it('should have activedecendant set to the first option', () => {
              cy.findByRole('combobox').should(
                haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(0)')
              );
            });

            it('should set visual focus on the first option', () => {
              cy.findAllByRole('option').eq(0).should('have.class', 'focus');
            });

            it('should not have aria-selected=true on any elements', () => {
              cy.get('[aria-selected=true]').should('not.exist');
            });
          });

          context('when up arrow key is pressed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{uparrow}');
            });

            it('should have activedecendant set to the last option', () => {
              cy.findByRole('combobox').should(
                haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(3)')
              );
            });

            it('should set visual focus on the last option', () => {
              cy.findAllByRole('option').eq(3).should('have.class', 'focus');
            });

            it('should not have aria-selected=true on any elements', () => {
              cy.get('[aria-selected=true]').should('not.exist');
            });
          });

          context('when up arrow key is pressed two times', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{uparrow}{uparrow}');
            });

            it('should have activedecendant set to the third option', () => {
              cy.findByRole('combobox').should(
                haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(2)')
              );
            });

            it('should set visual focus on the third option', () => {
              cy.findAllByRole('option').eq(2).should('have.class', 'focus');
            });

            it('should not have aria-selected=true on any elements', () => {
              cy.get('[aria-selected=true]').should('not.exist');
            });
          });

          context('when up arrow key is pressed four times', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{uparrow}{uparrow}{uparrow}{uparrow}');
            });
            it('should have activedecendant set to the first option', () => {
              cy.findByRole('combobox').should(
                haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(0)')
              );
            });

            it('should set visual focus on the first option', () => {
              cy.findAllByRole('option').eq(0).should('have.class', 'focus');
            });

            it('should not have aria-selected=true on any elements', () => {
              cy.get('[aria-selected=true]').should('not.exist');
            });
          });
        });
      });

      context('when the user types in a value not found', () => {
        beforeEach(() => {
          cy.findByRole('combobox').type('Peach');
        });

        context('when the user hits the enter key', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{enter}');
          });
        });

        it('should not clear the input', () => {
          cy.findByRole('combobox').should('have.value', 'Peach');
        });
      });
    });
  });
});
