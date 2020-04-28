import * as h from '../helpers';

const typeAheadSingleString = 'm';
const typeAheadSingleValue = 'mail';
const typeAheadSingleLabel = 'Mail';

const typeAheadMultipleShortString = 'mo';
const typeAheadMultipleLongString = 'mobile p';
const typeAheadMultipleValue = 'mobile_phone';
const typeAheadMultipleLabel = 'Mobile Phone';

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
                    cy.findByLabelText('Label')
                      .pipe(h.selectLabs.getMenu)
                      .type('{downarrow}');
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

          context(`when "${typeAheadSingleString}" is typed`, () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type(typeAheadSingleString);
            });

            context('the listbox', () => {
              it('should set accessible focus to the "Mail" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAccessibleFocus)
                  .should('have.text', 'Mail');
              });
            });
          });

          context(`when "${typeAheadMultipleShortString}" is typed`, () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type(typeAheadMultipleShortString);
            });

            context('the listbox', () => {
              it('should set accessible focus to the "Mobile Phone" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAccessibleFocus)
                  .should('have.text', 'Mobile Phone');
              });
            });
          });
        });

        context(`when "${typeAheadSingleString}" is typed`, () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type(typeAheadSingleString);
          });

          context('the select button', () => {
            it(`should read "${typeAheadSingleLabel}"`, () => {
              cy.findByLabelText('Label').should('have.text', typeAheadSingleLabel);
            });

            it(`should have a value of "${typeAheadSingleValue}"`, () => {
              cy.findByLabelText('Label').should('have.value', typeAheadSingleValue);
            });
          });
        });

        context(`when "${typeAheadMultipleShortString}" is typed`, () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type(typeAheadMultipleShortString);
          });

          context('the select button', () => {
            it(`should read "${typeAheadMultipleLabel}"`, () => {
              cy.findByLabelText('Label').should('have.text', typeAheadMultipleLabel);
            });

            it(`should have a value of "${typeAheadMultipleValue}"`, () => {
              cy.findByLabelText('Label').should('have.value', typeAheadMultipleValue);
            });
          });
        });

        context(`when "${typeAheadMultipleLongString}" is typed`, () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type(typeAheadMultipleLongString);
          });

          context('the select button', () => {
            it(`should read "${typeAheadMultipleLabel}"`, () => {
              cy.findByLabelText('Label').should('have.text', typeAheadMultipleLabel);
            });

            it(`should have a value of "${typeAheadMultipleValue}"`, () => {
              cy.findByLabelText('Label').should('have.value', typeAheadMultipleValue);
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
});
