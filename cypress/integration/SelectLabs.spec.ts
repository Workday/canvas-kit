import * as h from '../helpers';

function getAccessibleFocus($menu: JQuery): JQuery {
  const activeId = $menu.attr('aria-activedescendant');
  return $menu.find(`[id="${activeId}"]`);
}

describe('Select', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`given the "${story}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Labs|Select/React/Top Label', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the select button is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').click();
        });

        it('should not have any axe errors', () => {
          cy.checkA11y();
        });

        context('the select button', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('the listbox', () => {
          it('should be visible', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .should('be.visible');
          });

          it('should have focus', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .should('be.focused');
          });

          it('should have an aria-activedescendant attribute with the same value as the id of the first option', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .should($menu => {
                const menuAD = $menu.attr('aria-activedescendant');
                const optionId = $menu.find(`[role=option]:eq(0)`).attr('id');

                expect(menuAD).to.equal(optionId);
              });
          });
        });

        it('should have an aria-selected attribute set to "true" on the first option', () => {
          cy.findByLabelText('Label')
            .pipe(h.selectLabs.getOption(0))
            .should('have.attr', 'aria-selected', 'true');
        });

        it('should set accessible focus to the "E-mail" option', () => {
          cy.findByLabelText('Label')
            .pipe(h.selectLabs.getMenu)
            .pipe(getAccessibleFocus)
            .should('have.text', 'E-mail');
        });

        context(`when the "Phone" option (with the value "phone") is clicked`, () => {
          beforeEach(() => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getOption('Phone'))
              .click();
          });

          context('the select button', () => {
            it(`should read "Phone"`, () => {
              cy.findByLabelText('Label').should('have.text', 'Phone');
            });

            it(`should have a value of "phone"`, () => {
              cy.findByLabelText('Label').should('have.value', 'phone');
            });

            it(`should re-acquire focus`, () => {
              cy.findByLabelText('Label').should('be.focused');
            });
          });

          context('the listbox', () => {
            it('should not be visible', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .should('not.be.visible');
            });
          });
        });
      });

      context('when the select button is focused', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').focus();
        });

        context('when the down arrow key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{downarrow}');
          });

          it('should open the menu', () => {
            cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
          });

          context('when the down arrow key is pressed for a second time', () => {
            beforeEach(() => {
              cy.focused().type('{downarrow}');
            });

            context('the listbox', () => {
              it('should set accessible focus to the "Phone" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAccessibleFocus)
                  .should('have.text', 'Phone');
              });
            });

            context('when the down arrow key is pressed for a third time', () => {
              beforeEach(() => {
                cy.focused().type('{downarrow}');
              });

              context('the listbox', () => {
                it('should set accessible focus to the "Mail" option', () => {
                  cy.findByLabelText('Label')
                    .pipe(h.selectLabs.getMenu)
                    .pipe(getAccessibleFocus)
                    .should('have.text', 'Mail');
                });
              });

              context('when the enter key is pressed', () => {
                beforeEach(() => {
                  cy.findByLabelText('Label')
                    .pipe(h.selectLabs.getMenu)
                    .type('{enter}');
                });

                context('the select button', () => {
                  it(`should read "Mail"`, () => {
                    cy.findByLabelText('Label').should('have.text', 'Mail');
                  });

                  it(`should have a value of "mail"`, () => {
                    cy.findByLabelText('Label').should('have.value', 'mail');
                  });

                  it(`should re-acquire focus`, () => {
                    cy.findByLabelText('Label').should('be.focused');
                  });
                });

                context('the listbox', () => {
                  it('should not be visible', () => {
                    cy.findByLabelText('Label')
                      .pipe(h.selectLabs.getMenu)
                      .should('not.be.visible');
                  });
                });

                context('when the listbox is expanded again', () => {
                  beforeEach(() => {
                    cy.focused().type('{downarrow}');
                  });

                  context('the fourth option', () => {
                    it('should have an aria-selected attribute set to "true"', () => {
                      cy.findByLabelText('Label')
                        .pipe(h.selectLabs.getOption(3))
                        .should('have.attr', 'aria-selected', 'true');
                    });
                  });
                });
              });
            });

            context('when the up arrow key is pressed', () => {
              beforeEach(() => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .type('{uparrow}');
              });

              context('the listbox', () => {
                it('should set accessible focus to the "E-mail" option', () => {
                  cy.findByLabelText('Label')
                    .pipe(h.selectLabs.getMenu)
                    .pipe(getAccessibleFocus)
                    .should('have.text', 'E-mail');
                });
              });
            });
          });
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type('{enter}');
          });

          it('should open the menu', () => {
            cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('when the space key is pressed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type(' ');
          });

          it('should open the menu', () => {
            cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
          });
        });
      });

      context('when "select" helper is used to select "Mail"', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').pipe(h.selectLabs.select('Mail'));
        });

        it('should have a value of "mail"', () => {
          cy.findByLabelText('Label').should('have.value', 'mail');
        });
      });

      context('when "select" helper is used to select /^Mail$/', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').pipe(h.selectLabs.select(/^Mail$/));
        });

        it('should have a value of "mail"', () => {
          cy.findByLabelText('Label').should('have.value', 'mail');
        });
      });
    });
  });

  context(`given the "Disabled" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Labs|Select/React/Top Label', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('the select button', () => {
      it('should be disabled', () => {
        cy.findByLabelText('Label').should('be.disabled');
      });
    });
  });

  context(`given the "Scrollable" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Labs|Select/React/Top Label', 'Scrollable');
    });

    context('when the select button is focused', () => {
      beforeEach(() => {
        cy.findByLabelText('Label').focus();
      });

      context('when "s" is typed', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').type('s');
        });

        context('the select button', () => {
          it('should read "San Francisco"', () => {
            cy.findByLabelText('Label').should('have.text', 'San Francisco');
          });

          it(`should have a value of "san-francisco"`, () => {
            cy.findByLabelText('Label').should('have.value', 'san-francisco');
          });
        });
      });

      context('when "sa" is typed', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').type('sa');
        });

        context('the select button', () => {
          it('should read "San Francisco"', () => {
            cy.findByLabelText('Label').should('have.text', 'San Francisco');
          });

          it(`should have a value of "san-francisco"`, () => {
            cy.findByLabelText('Label').should('have.value', 'san-francisco');
          });
        });
      });

      context('when "san " is typed', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').type('san ');
        });

        context('the select button', () => {
          it('should read "San Francisco"', () => {
            cy.findByLabelText('Label').should('have.text', 'San Francisco');
          });

          it(`should have a value of "san-francisco"`, () => {
            cy.findByLabelText('Label').should('have.value', 'san-francisco');
          });
        });

        // TODO: Figure out why this test doesn't trigger the menu on the
        // space key when using Firefox with Cypress (pressing the space key
        // in the middle of a typeahead string in normal usage of Firefox
        // triggers the menu, see SelectBase)
        // Ensure Firefox doesn't display the menu if there's a space in the
        // typeahead string
        // context('the listbox', () => {
        //   it('should not be visible', () => {
        //     cy.findByLabelText('Label')
        //       .pipe(h.selectLabs.getMenu)
        //       .should('not.be.visible');
        //   });
        // });
      });

      context('when "san m" is typed', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').type('san m');
        });

        context('the select button', () => {
          it('should read "San Mateo"', () => {
            cy.findByLabelText('Label').should('have.text', 'San Mateo');
          });

          it(`should have a value of "san-mateo"`, () => {
            cy.findByLabelText('Label').should('have.value', 'san-mateo');
          });
        });
      });

      context('when "d {500ms delay} d" is typed', () => {
        beforeEach(() => {
          // The delay for resetting the typeahead string is 500ms
          cy.findByLabelText('Label').type('dd', {delay: 500});
        });

        context('the select button', () => {
          it('should read "Denver"', () => {
            cy.findByLabelText('Label').should('have.text', 'Denver');
          });

          it(`should have a value of "denver"`, () => {
            cy.findByLabelText('Label').should('have.value', 'denver');
          });
        });
      });

      context('when the space key is pressed (to open the menu)', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').type(' ');
        });

        context('when "s" is typed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .type('s');
          });

          context('the listbox', () => {
            it('it should set accessible focus to the "San Francisco" option', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .pipe(getAccessibleFocus)
                .should('have.text', 'San Francisco');
            });
          });
        });

        context('when "sa" is typed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .type('sa');
          });

          context('the listbox', () => {
            it('it should set accessible focus to the "San Francisco" option', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .pipe(getAccessibleFocus)
                .should('have.text', 'San Francisco');
            });
          });
        });

        context('when "san " is typed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .type('san ');
          });

          context('the listbox', () => {
            it('it should set accessible focus to the "San Francisco" option', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .pipe(getAccessibleFocus)
                .should('have.text', 'San Francisco');
            });
          });
        });

        context('when "san m" is typed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .type('san m');
          });

          context('the listbox', () => {
            it('it should set accessible focus to the "San Mateo" option', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .pipe(getAccessibleFocus)
                .should('have.text', 'San Mateo');
            });
          });
        });
      });
    });
  });
});
