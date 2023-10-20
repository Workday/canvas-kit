import * as h from '../helpers';

describe('Select', () => {
  before(() => {
    h.stories.visit();
  });
  ['Disabled Options'].forEach(story => {
    context(`given the "${story}" story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Select', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the select button is clicked', () => {
        beforeEach(() => {
          cy.findByLabelText('Contact').click();
        });

        it('should not have any axe errors', () => {
          cy.checkA11y();
        });

        context('the select', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByRole('combobox').should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('the menu', () => {
          it('should be visible', () => {
            cy.findByRole('listbox');
          });

          it('should have an aria-activedescendant attribute with the same value as the id of the first option ("E-mail")', () => {
            cy.findByRole('combobox').then($input => {
              const inputEl = $input.attr('aria-activedescendant');

              const optionId = cy.findAllByRole('option').eq(0);

              optionId.should('have.attr', 'id', inputEl);
            });
          });
        });

        context('the first option ("E-Mail")', () => {
          it('should have an aria-selected attribute set to "true"', () => {
            cy.findAllByRole('option').eq(0).should('have.attr', 'aria-selected', 'true');
          });
        });

        context(`when the "Phone" option (with the value "phone") is clicked`, () => {
          beforeEach(() => {
            cy.findByLabelText('Contact');
            cy.findByText('Phone').click();
          });

          context('the select input', () => {
            it(`should read "Phone"`, () => {
              cy.findByRole('combobox').should('have.value', 'Phone');
            });

            it(`should re-acquire focus`, () => {
              cy.findByRole('combobox').should('be.focused');
            });
          });

          context('the menu', () => {
            it('should not be visible', () => {
              cy.findByRole('listbox').should('not.exist');
            });
          });

          context('when the menu is opened again', () => {
            beforeEach(() => {
              cy.findByLabelText('Contact').click();
            });

            context('the menu', () => {
              it('should set assistive focus to the "Phone" option', () => {
                cy.findByText('Phone').should('have.attr', 'aria-selected', 'true');
              });
            });
          });
        });
      });

      context('when the select input is focused and down arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('combobox').focus().realType('{downarrow}');
        });

        context('the select input', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByRole('combobox').should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('the menu', () => {
          it('should be visible', () => {
            cy.findByRole('listbox').should('be.visible');
          });
        });

        context('when the down arrow key is pressed for a second time', () => {
          beforeEach(() => {
            cy.focused().realType('{downarrow}');
          });

          context('the menu', () => {
            it('should set assistive focus to the "Phone" option', () => {
              cy.findAllByRole('option').eq(1).should('have.attr', 'aria-selected', 'true');
            });
          });

          context('when the down arrow key is pressed for a third time', () => {
            beforeEach(() => {
              cy.focused().realType('{downarrow}');
            });

            context('the menu', () => {
              it('should set assistive focus to the "Mail" option and skip disabled fax', () => {
                cy.findAllByRole('option').eq(3).should('have.attr', 'aria-selected', 'true');
              });
            });
          });
        });
      });

      context('when the enter key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('combobox').focus().realType('{downarrow}');
        });

        context('the menu', () => {
          it('should be visible', () => {
            cy.findByRole('listbox').should('be.visible');
          });

          it('should have E-Mail selected', () => {
            cy.findAllByRole('option').eq(0).should('have.attr', 'aria-selected', 'true');
          });
        });

        context('when mail option is selected using arrow keys', () => {
          beforeEach(() => {
            cy.focused().realType('{downarrow}');
            cy.focused().realType('{downarrow}');
            cy.findAllByRole('option').eq(3).realType('{enter}');
          });
          it(`should read "Mail"`, () => {
            cy.findByRole('combobox').should('have.value', 'Mail');
          });

          it(`should re-acquire focus`, () => {
            cy.findByRole('combobox').should('be.focused');
          });

          it('the menu should not be visible after selection', () => {
            cy.findByRole('listbox').should('not.exist');
          });
        });
      });

      context('when the up arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('combobox').focus().realType('{uparrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the "E-mail" option', () => {
            cy.findAllByRole('option').eq(0).should('have.class', 'focus');
          });
        });
      });
    });
  });
});

context(`given the "Basic" story is rendered`, () => {
  before(() => {
    h.stories.visit();
  });
  beforeEach(() => {
    h.stories.load('Components/Inputs/Select', 'Basic');
  });

  context('when the menu is opened', () => {
    beforeEach(() => {
      cy.findByRole('combobox').focus().realType('{downarrow}');
    });

    context('the menu', () => {
      it('should set assistive focus to the first option ("E-mail")', () => {
        cy.findAllByRole('option').eq(0).should('have.attr', 'aria-selected', 'true');
      });
    });

    context('when focus is advanced to the second option ("Phone")', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      context('the menu', () => {
        it('should set assistive focus to the second option ("Phone")', () => {
          cy.findAllByRole('option').eq(1).should('have.attr', 'aria-selected', 'true');
        });
      });

      context(
        'when the menu is closed WITHOUT selecting the newly focused option ("Phone")',
        () => {
          beforeEach(() => {
            cy.focused().realType('{esc}');
          });

          context('when the menu is re-opened AFTER it has fully closed', () => {
            beforeEach(() => {
              // Wait for menu to fully close before we open it again (so we
              // don't interrupt the menu's closing animation and cause it to
              // re-open while it's in the middle of closing)
              cy.findByRole('listbox').should('not.exist');
              cy.findByRole('combobox').focus().realType('{downarrow}');
            });

            context('the menu', () => {
              it('should set assistive focus to the second option ("Phone") that is where the cursor was', () => {
                cy.findAllByRole('option').eq(1).should('have.attr', 'aria-selected', 'true');
              });
            });
          });
        }
      );
    });
  });
});

context(`given the "Disabled" story is rendered`, () => {
  before(() => {
    h.stories.visit();
  });
  beforeEach(() => {
    h.stories.load('Components/Inputs/Select', 'Disabled');
  });

  it('should not have any axe errors', () => {
    cy.checkA11y();
  });

  context('the select input', () => {
    it('should be disabled', () => {
      cy.findByRole('combobox').should('be.disabled');
    });
  });
});

context('given the "Disabled Options" story with a disabled option', () => {
  before(() => {
    h.stories.visit();
  });
  beforeEach(() => {
    h.stories.load('Components/Inputs/Select', 'Disabled Options');
  });

  context('when the menu is opened', () => {
    beforeEach(() => {
      cy.findByRole('combobox').focus().realType('{downarrow}');
    });

    context('the "Fax (disabled)" option', () => {
      it('should have an aria-disabled attribute set to "true"', () => {
        cy.findAllByRole('option').eq(2).should('have.attr', 'aria-disabled', 'true');
      });
    });

    context('when the down arrow key is pressed', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      context('the menu', () => {
        it('should set assistive focus to second enabled option ("Phone")', () => {
          cy.findAllByRole('option').eq(1).should('have.attr', 'aria-selected', 'true');
        });
      });

      context('when the down arrow key is pressed 1 more times', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the fourth option down ("Mail") since focus will have skipped one disabled option ("Fax")', () => {
            cy.findAllByRole('option').eq(3).should('have.attr', 'aria-selected', 'true');
          });
        });
      });
    });
  });
});
describe('Select With Menu Height', () => {
  before(() => {
    h.stories.visit();
  });
  context(`given the "Menu Height" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Select', 'Menu Height');
    });

    context('when the select input is focused', () => {
      beforeEach(() => {
        cy.findByRole('combobox').focus();
      });

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should select the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary)',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').focus().realType('s');
            });

            context('the select button', () => {
              it('should read the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByRole('combobox').should('have.value', 'San Francisco (United States)');
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').focus().realType('ss', {delay: 500});
            });

            context('the select button', () => {
              it('should read the second option beginning with "s" ("San Mateo (United States)")', () => {
                cy.findByRole('combobox').should('have.value', 'San Mateo (United States)');
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('sd', {delay: 500});
            });

            context('the select button', () => {
              it('should read the first option beginning with "d" ("Dallas (United States)")', () => {
                cy.findByRole('combobox').should('have.value', 'Dallas (United States)');
              });
            });
          });
        }
      );

      context(
        'when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain the currently selected option for as long as possible (instead of cycling selection between matching options with each keystroke)',
        () => {
          context('when "sa" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('sa');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByRole('combobox').should('have.value', 'San Francisco (United States)');
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('san ');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByRole('combobox').should('have.value', 'San Francisco (United States)');
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').focus().realType('san m');
            });

            context('the select button', () => {
              it('should read "San Mateo (United States)"', () => {
                cy.findByRole('combobox').should('have.value', 'San Mateo (United States)');
              });
            });
          });
        }
      );
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByRole('combobox').click();
      });

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should advance assistive focus to the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary) and scroll that option into view',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('s');
              cy.wait(150);
            });

            context('the menu', () => {
              it('should scroll so that the "San Francisco (United States)" option is fully visible', () => {
                cy.findByText('San Francisco (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('ss', {delay: 500});
              cy.wait(150);
            });

            context('the menu', () => {
              it('should scroll so that the "San Mateo (United States)" option is fully visible', () => {
                cy.findByText('San Mateo (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').focus().realType('sd', {delay: 500});
              cy.wait(150);
            });

            context('the menu', () => {
              it('should scroll so that the "Dallas (United States)" option is fully visible', () => {
                cy.findByText('Dallas (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });
        }
      );

      context(
        'when multiple characters are typed in rapid succession (<500ms between keystrokes), thus forming a string, and multiple options begin with that string, the select should retain assistive focus on the currently focused option for as long as possible (instead of cycling focus between matching options with each keystroke)',
        () => {
          context('when "sa" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('sa');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByText('San Francisco (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').realType('san ');
            });

            context('the select input', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByText('San Francisco (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox').focus().realType('san m');
              cy.wait(150);
            });

            context('the select input', () => {
              it('should set assistive focus to the "San Mateo (United States)" option', () => {
                cy.findByText('San Mateo (United States)').should(
                  'have.attr',
                  'aria-selected',
                  'true'
                );
              });
            });
          });
        }
      );
    });

    context(
      'when the menu is opened and the selected option is initially out of view, the menu should scroll the selected option into view and center it if possible',
      () => {
        context('when "Dallas (United States)" is selected and the menu is opened', () => {
          beforeEach(() => {
            cy.findByRole('combobox').focus().type('d').click();
          });

          context('the menu', () => {
            it('should scroll so that the "Dallas (United States)" option is centered in view', () => {
              cy.findByText('Dallas (United States)').should('have.attr', 'aria-selected', 'true');
            });
          });
        });
      }
    );
  });
});
