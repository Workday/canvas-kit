import * as h from '../helpers';

const clickedValue = 'phone';
const clickedLabel = 'Phone';

const enteredValue = 'mail';
const enteredLabel = 'Mail';

describe('Select', () => {
  before(() => {
    h.stories.visit();
  });
  ['Plain', 'Alert', 'Error'].forEach(story => {
    context(`given the "${story}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Labs|Select/React/Top Label', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when the select button is clicked', () => {
        beforeEach(() => {
          h.selectLabs.getButton().click();
        });

        context('the select button', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            h.selectLabs.getButton().should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('the listbox', () => {
          it('should be visible', () => {
            h.selectLabs.getListbox().should('be.visible');
          });

          it('should have focus', () => {
            h.selectLabs.getListbox().should('be.focused');
          });

          it('should have an aria-activedescendant attribute with the same value as the id of the first option', () => {
            h.selectLabs.getListbox().should($listbox => {
              h.selectLabs.assertADMatchesOption($listbox, 0);
            });
          });
        });

        context('the first option', () => {
          it('should have an aria-selected attribute set to "true"', () => {
            h.selectLabs.getOption(0).should('have.attr', 'aria-selected', 'true');
          });
        });

        context(
          `when the "${clickedLabel}" option (with the value "${clickedValue}") is clicked`,
          () => {
            beforeEach(() => {
              h.selectLabs.getOption(clickedValue).click();
            });

            context('the select button', () => {
              it(`should read "${clickedLabel}"`, () => {
                h.selectLabs.getButton().should('have.text', clickedLabel);
              });

              it(`should re-acquire focus`, () => {
                h.selectLabs.getButton().should('be.focused');
              });
            });

            context('the hidden text input', () => {
              it(`should have a value of "${clickedValue}"`, () => {
                h.selectLabs.getInput().should('have.value', clickedValue);
              });
            });

            context('the listbox', () => {
              it('should be dismissed', () => {
                h.selectLabs.getListbox().should('not.be.visible');
              });
            });
          }
        );
      });

      context('when the select button is focused', () => {
        beforeEach(() => {
          h.selectLabs.getButton().focus();
        });

        context('when the down key is pressed', () => {
          beforeEach(() => {
            h.selectLabs.getButton().type('{downarrow}');
          });

          context('the listbox', () => {
            it('should be visible', () => {
              h.selectLabs.getListbox().should('be.visible');
            });

            it('should have focus', () => {
              h.selectLabs.getListbox().should('be.focused');
            });

            it('should have an aria-activedescendant attribute with the same value as the id of the first option', () => {
              h.selectLabs.getListbox().should($listbox => {
                h.selectLabs.assertADMatchesOption($listbox, 0);
              });
            });
          });

          context('when the down key is pressed for a second time', () => {
            beforeEach(() => {
              h.selectLabs.getListbox().type('{downarrow}');
            });

            context('the listbox', () => {
              it('should have an aria-activedescendant attribute with the same value as the id of the second option', () => {
                h.selectLabs.getListbox().should($listbox => {
                  h.selectLabs.assertADMatchesOption($listbox, 1);
                });
              });
            });

            context('when the down key is pressed for a third time', () => {
              beforeEach(() => {
                h.selectLabs.getListbox().type('{downarrow}');
              });

              context('the listbox', () => {
                it('should have an aria-activedescendant attribute with the same value as the id of the fourth option (having skipped the third option since it was disabled)', () => {
                  h.selectLabs.getListbox().should($listbox => {
                    h.selectLabs.assertADMatchesOption($listbox, 3);
                  });
                });
              });

              context('when the enter key is pressed', () => {
                beforeEach(() => {
                  h.selectLabs.getListbox().type('{enter}');
                });

                context('the select button', () => {
                  it(`should read "${enteredLabel}"`, () => {
                    h.selectLabs.getButton().should('have.text', enteredLabel);
                  });

                  it(`should re-acquire focus`, () => {
                    h.selectLabs.getButton().should('be.focused');
                  });
                });

                context('the hidden text input', () => {
                  it(`should have a value of "${enteredValue}"`, () => {
                    h.selectLabs.getInput().should('have.value', enteredValue);
                  });
                });

                context('the listbox', () => {
                  it('should be dismissed', () => {
                    h.selectLabs.getListbox().should('not.be.visible');
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  // TODO: Re-enable these tests
  /*
  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Select/React/Top Label', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getSelect().should('be.disabled');
    });
  });
  */
});
