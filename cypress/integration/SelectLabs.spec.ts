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

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the select button is clicked', () => {
        beforeEach(() => {
          h.selectLabs.getButton().click();
        });

        h.selectLabs.testOpenListboxInitialState();

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

        context('when the down arrow key is pressed', () => {
          beforeEach(() => {
            h.selectLabs.getButton().type('{downarrow}');
          });

          h.selectLabs.testOpenListboxInitialState();

          context('when the down arrow key is pressed for a second time', () => {
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

            context('when the down arrow key is pressed for a third time', () => {
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

            context('when the up arrow key is pressed', () => {
              beforeEach(() => {
                h.selectLabs.getListbox().type('{uparrow}');
              });

              context('the listbox', () => {
                it('should have an aria-activedescendant attribute with the same value as the id of the first option', () => {
                  h.selectLabs.getListbox().should($listbox => {
                    h.selectLabs.assertADMatchesOption($listbox, 0);
                  });
                });
              });
            });
          });
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            h.selectLabs.getButton().type('{enter}');
          });

          h.selectLabs.testOpenListboxInitialState();
        });

        context('when the space key is pressed', () => {
          beforeEach(() => {
            h.selectLabs.getButton().type(' ');
          });

          h.selectLabs.testOpenListboxInitialState();
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
