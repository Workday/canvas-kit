import * as h from '../helpers';

const haveAttrMatchingIdOf = (name: string, selector: string) => ($el: JQuery) => {
  const $matchingEl = Cypress.$(selector);

  expect($el).to.have.attr(name, $matchingEl.attr('id')!);
};

describe('Combobox Labs', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the 'Autocomplete' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Combobox', 'Autocomplete');
    });

    it('should have aria-haspopup set to true', () => {
      cy.findByRole('combobox').should('have.attr', 'aria-haspopup', 'true');
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

      it('should set the aria-owns to reference the listbox element', () => {
        cy.findByRole('combobox').should(haveAttrMatchingIdOf('aria-controls', '[role=listbox]'));
      });

      it('should show menu', () => {
        cy.findByRole('listbox').should('be.visible');
      });

      it('should not have activedescendant set', () => {
        cy.findByRole('combobox').should('not.have.attr', 'aria-activedescendant');
      });

      it('should not have aria-selected=true on any elements', () => {
        cy.get('[aria-selected=true]').should('not.exist');
      });

      context('when a value is entered', () => {
        beforeEach(() => {
          cy.findByRole('combobox').type('Test', {delay: 1});
        });

        it('should have the value entered as the value', () => {
          cy.findByRole('combobox').should('have.value', 'Test');
        });

        context('when escape key is pressed', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{esc}');
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

          it.only('should not show the clear button', () => {
            cy.get('[data-testid=clear]').should('not.be.visible');
          });
        });

        // no clear button yet
        //   context('when the clear button is clicked', () => {
        //     beforeEach(() => {
        //       cy.findByLabelText('Reset Search Input').click();
        //     });

        //     it('should clear the combobox', () => {
        //       cy.findByRole('combobox').should('have.value', '');
        //     });

        //     it('should close the listbox', () => {
        //       cy.findByRole('listbox').should('not.exist');
        //     });

        //     it('should keep focus on the combobox', () => {
        //       cy.findByRole('combobox').should('have.focus');
        //     });
        //   });

        context('when down arrow key is pressed', () => {
          beforeEach(() => {
            cy.findByRole('combobox').type('{downarrow}');
          });

          it('should have activedecendant set to the first option', () => {
            cy.findByRole('combobox').should(
              haveAttrMatchingIdOf('aria-activedescendant', '[role=option]:eq(0)')
            );
          });

          it('should set aria-selected to the first option', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.attr', 'aria-selected', 'true');
          });

          // No group/section support yet
          // it('should announce a group was entered', () => {
          //   cy.findAllByRole('option')
          //     .eq(0)
          //     .should('contain', 'Entering group Animals, with 2 options');
          // });

          // Not hooked up to autocomplete yet
          // context('when the user types a printable character "b"', () => {
          //   beforeEach(() => {
          //     cy.findByRole('combobox').type('b');
          //   });

          //   it('should clear activedescendant', () => {
          //     cy.findAllByRole('combobox').should('not.have.attr', 'aria-activedescendant');
          //   });

          //   it('should not set aria-selected to the first option', () => {
          //     cy.findAllByRole('option')
          //       .eq(0)
          //       .should('have.not.attr', 'aria-selected');
          //   });
          // });

          context('when the user presses the enter key', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{enter}');
            });

            it('should set the combobox value to the option text value', () => {
              cy.findByRole('combobox').should('have.value', 'First Option');
            });

            it('should close the listbox', () => {
              cy.findByRole('listbox').should('not.exist');
            });

            context('when the use hits the "a" key', () => {
              beforeEach(() => {
                cy.findAllByRole('combobox').type('a');
              });

              // Not hooked up to autocomplete yet
              // it('should open the listbox', () => {
              //   cy.findByRole('listbox').should('be.visible');
              // });

              it('should change the combobox value to reflect the key entered', () => {
                cy.findByRole('combobox').should('have.value', 'First Optiona');
              });
            });
          });

          context('when the user presses metaKey + enter key', () => {
            beforeEach(() => {
              cy.findByRole('combobox').type('{meta}{enter}');
            });

            it('should not set the combobox value to the option text value', () => {
              cy.findByRole('combobox').should('have.value', 'Test');
            });

            it('should not close the listbox', () => {
              cy.findByRole('listbox').should('be.visible');
            });
          });
        });

        // No groups/sections yet
        //   context('when the user clicks on the "Animals" group', () => {
        //     beforeEach(() => {
        //       cy.findByText('Animals').click({force: true});
        //     });

        //     it('should not close the listbox', () => {
        //       cy.findByRole('listbox').should('be.visible');
        //     });

        //     it('should not change the combobox value', () => {
        //       cy.findByRole('combobox').should('have.value', 'Test');
        //     });
        //   });

        context('when the user clicks on the first option', () => {
          beforeEach(() => {
            cy.findAllByRole('option')
              .eq(0)
              .click();
          });

          it('should set the combobox value to the option text value', () => {
            cy.findByRole('combobox').should('have.value', 'First Option');
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

          it('should set aria-selected to the second option', () => {
            cy.findAllByRole('option')
              .eq(1)
              .should('have.attr', 'aria-selected', 'true');
          });
        });

        context('when down arrow key is pressed five times', () => {
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

          it('should set aria-selected to the first option', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.attr', 'aria-selected', 'true');
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

          it('should set aria-selected to the last option', () => {
            cy.findAllByRole('option')
              .eq(3)
              .should('have.attr', 'aria-selected', 'true');
          });

          // No group/section yet
          // it('should announce a group was entered', () => {
          //   cy.findAllByRole('option')
          //     .eq(2)
          //     .should('contain', 'Entering group Cars, with 1 option');
          // });
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

          it('should set aria-selected to the third option', () => {
            cy.findAllByRole('option')
              .eq(2)
              .should('have.attr', 'aria-selected', 'true');
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

          it('should set aria-selected to the first option', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.attr', 'aria-selected', 'true');
          });
        });
      });
    });
  });
});
