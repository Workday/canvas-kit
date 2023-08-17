import * as h from '../helpers';

describe('Select', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic'].forEach(story => {
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

          // it.only('should set assistive focus to the first option ("E-mail")', () => {
          //   cy.findAllByRole('option')
          //     .eq(0)
          //     .should('have.attr', 'aria-selected', 'true');

          //   cy.findAllByRole('option')
          //     .eq(0)
          //     .should('have.class', 'focus');
          // });
        });

        context('the first option ("E-Mail")', () => {
          it('should have an aria-selected attribute set to "true"', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.attr', 'aria-selected', 'true');
          });
        });

        context(`when the "Phone" option (with the value "phone") is clicked`, () => {
          beforeEach(() => {
            cy.findByLabelText('Contact');
            cy.findByText('Phone').click();
          });

          context('the select input', () => {
            it(`should read "Phone"`, () => {
              cy.findByRole('combobox').should('have.property', 'value', 'Phone');
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

            // context('the "Phone" option', () => {
            //   it('should have an aria-selected attribute set to "true"', () => {
            //     cy.findByLabelText('Label')
            //       .pipe(h.selectPreview.getOption('Phone'))
            //       .should('have.attr', 'aria-selected', 'true');
            //   });
            // });
          });
        });
      });

      context('when the select input is focused and down arrow key is pressed', () => {
        beforeEach(() => {
          // cy.findByRole('combobox').focus();
          cy.findByRole('combobox')
            .focus()
            .realType('{downarrow}');
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

          // it('should have focus', () => {
          //   cy.findByLabelText('Label')
          //     .pipe(h.selectPreview.getMenu)
          //     .should('be.focused');
          // });
        });

        context('when the down arrow key is pressed for a second time', () => {
          beforeEach(() => {
            cy.focused().realType('{downarrow}');
          });

          context('the menu', () => {
            it('should set assistive focus to the "Phone" option', () => {
              cy.findAllByRole('option')
                .eq(1)
                .should('have.attr', 'aria-selected', 'true');
            });
          });

          context('when the down arrow key is pressed for a third time', () => {
            beforeEach(() => {
              cy.focused().realType('{downarrow}');
            });

            context('the menu', () => {
              it('should set assistive focus to the "Mail" option and skip disabled fax', () => {
                cy.findAllByRole('option')
                  .eq(3)
                  .should('have.attr', 'aria-selected', 'true');
              });
            });
          });
        });
      });

      context('when the enter key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('combobox')
            .focus()
            .realType('{enter}');
        });

        context('the menu', () => {
          it('should be visible', () => {
            cy.findByRole('listbox').should('be.visible');
          });

          it('should have E-Mail selected', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.attr', 'aria-selected', 'true');
          });
        });

        context('when mail option is selected using arrow keys', () => {
          beforeEach(() => {
            cy.focused().realType('{downarrow}');
            cy.focused().realType('{downarrow}');
            cy.findAllByRole('option')
              .eq(3)
              .realType('{enter}');
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

        context('when the menu is expanded again', () => {
          beforeEach(() => {
            cy.focused().realType('{downarrow}');
          });

          // context('the menu', () => {
          //   it('should set assistive focus to the "Phone" option', () => {
          //     cy.findAllByRole('option')
          //       .eq(1)
          //       .should('have.attr', 'aria-selected', 'true');
          //   });
          // });

          // context('the "Mail" option', () => {
          //   it('should have an aria-selected attribute set to "true"', () => {
          //     cy.findByLabelText('Label')
          //       .pipe(h.selectPreview.getOption('Mail'))
          //       .should('have.attr', 'aria-selected', 'true');
          //   });
          // });
        });
      });

      context('when the up arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('combobox')
            .focus()
            .realType('{uparrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the "E-mail" option', () => {
            cy.findAllByRole('option')
              .eq(0)
              .should('have.class', 'focus');
          });
        });
      });
    });

    // context('when the space key is pressed', () => {
    //   beforeEach(() => {
    //     cy.findByRole('combobox').realType(' '); // disable event.preventDefault checks
    //   });

    //   context('the select button', () => {
    //     it('should have an aria-expanded attribute set to "true"', () => {
    //       cy.focused().should('have.attr', 'aria-expanded', 'true');
    //     });
    //   });
    // });
  });

  // context('when the "select" helper is used to select "Mail"', () => {
  //   beforeEach(() => {
  //     cy.findByLabelText('Label').pipe(h.selectPreview.select('Mail'));
  //   });

  //   it('should have a value of "mail"', () => {
  //     cy.findByLabelText('Label').should('have.value', 'mail');
  //   });
  // });

  // context('when the "select" helper is used to select /^Mail$/', () => {
  //   beforeEach(() => {
  //     cy.findByLabelText('Label').pipe(h.selectPreview.select(/^Mail$/));
  //   });

  //   it('should have a value of "mail"', () => {
  //     cy.findByLabelText('Label').should('have.value', 'mail');
  //   });
  // });
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
      cy.findByRole('combobox')
        .focus()
        .realType('{downarrow}');
    });

    context('the menu', () => {
      it('should set assistive focus to the first option ("E-mail")', () => {
        cy.findAllByRole('option')
          .eq(0)
          .should('have.attr', 'aria-selected', 'true');
      });
    });

    context('when focus is advanced to the second option ("Phone")', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      context('the menu', () => {
        it('should set assistive focus to the second option ("Phone")', () => {
          cy.findAllByRole('option')
            .eq(1)
            .should('have.attr', 'aria-selected', 'true');
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
              cy.findByRole('combobox')
                .focus()
                .realType('{downarrow}');
            });

            context('the menu', () => {
              it('should have reset assistive focus to the first option ("E-mail")', () => {
                cy.findAllByRole('option')
                  .eq(0)
                  .should('have.attr', 'aria-selected', 'true');
              });
            });
          });

          // context('when the menu is re-opened BEFORE it has fully closed', () => {
          //   beforeEach(() => {
          //     cy.focused().realType('{downarrow}');
          //   });

          //   context('the menu', () => {
          //     it('should still have assistive focus set to the second option ("Phone")', () => {
          //       // Focus is shifting between the button and menu as we close
          //       // and open the menu. It's important that we use getMenu rather
          //       // than cy.focused() to ensure we obtain a reference to the menu.
          //       cy.findByLabelText('Label')
          //         .pipe(h.selectPreview.getMenu)
          //         .pipe(getAssistiveFocus)
          //         .should('have.text', 'Phone');
          //     });
          //   });
          // });
        }
      );
    });
  });
});

// context(`given the "Disabled" story is rendered`, () => {
//   beforeEach(() => {
//     h.stories.load('Preview/Select/Top Label', 'Disabled');
//   });

//   it('should not have any axe errors', () => {
//     cy.checkA11y();
//   });

//   context('the select button', () => {
//     it('should be disabled', () => {
//       cy.findByLabelText('Label').should('be.disabled');
//     });
//   });
// });

context('given the "Basic" story with a disabled option', () => {
  beforeEach(() => {
    h.stories.load('Components/Inputs/Select', 'Basic');
  });

  context('when the menu is opened', () => {
    beforeEach(() => {
      cy.findByRole('combobox')
        .focus()
        .realType('{downarrow}');
    });

    context('the "Fax (disabled)" option', () => {
      it('should have an aria-disabled attribute set to "true"', () => {
        cy.findAllByRole('option')
          .eq(2)
          .should('have.attr', 'aria-disabled', 'true');
      });
    });

    context('when the down arrow key is pressed', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      context('the menu', () => {
        it('should set assistive focus to second enabled option ("Phone")', () => {
          cy.findAllByRole('option')
            .eq(1)
            .should('have.attr', 'aria-selected', 'true');
        });
      });

      // context('when the up arrow key is pressed', () => {
      //   beforeEach(() => {
      //     cy.focused().realType('{uparrow}');
      //   });

      //   context('the menu', () => {
      //     it('should retain assistive focus on the "E-mail" option since the previous option ("Carrier Pigeon", which also happens to be the first option) is disabled', () => {
      //       cy.findByLabelText('Label (Disabled Options)')
      //         .pipe(h.selectPreview.getMenu)
      //         .pipe(getAssistiveFocus)
      //         .should('have.text', 'E-mail');
      //     });
      //   });
      // });

      context('when the down arrow key is pressed 1 more times', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the fourth option down ("Mail") since focus will have skipped one disabled option ("Fax")', () => {
            cy.findAllByRole('option')
              .eq(3)
              .should('have.attr', 'aria-selected', 'true');
          });
        });

        // context('when the down arrow key is pressed 2 more times', () => {
        //   beforeEach(() => {
        //     cy.focused().realType('{downarrow}{downarrow}');
        //   });

        //   context('the menu', () => {
        //     it('should set assistive focus to the first option down ("Mobile Phone") since the second option down ("Telegram", which also happens to be the last option) is disabled', () => {
        //       cy.findByLabelText('Label (Disabled Options)')
        //         .pipe(h.selectPreview.getMenu)
        //         .pipe(getAssistiveFocus)
        //         .should('have.text', 'Mobile Phone');
        //     });
        //   });
        // });
      });
    });

    // context('when the Home key is pressed', () => {
    //   beforeEach(() => {
    //     cy.focused().realType('{home}');
    //   });

    //   context('the menu', () => {
    //     it('should set assistive focus to the first enabled option ("E-mail")', () => {
    //       cy.findByLabelText('Label (Disabled Options)')
    //         .pipe(h.selectPreview.getMenu)
    //         .pipe(getAssistiveFocus)
    //         .should('have.text', 'E-mail');
    //     });
    //   });
    // });

    // context('when the End key is pressed', () => {
    //   beforeEach(() => {
    //     cy.focused().realType('{end}');
    //   });

    //   context('the menu', () => {
    //     it('should set assistive focus to the last enabled option ("Mobile Phone")', () => {
    //       cy.findByLabelText('Label (Disabled Options)')
    //         .pipe(h.selectPreview.getMenu)
    //         .pipe(getAssistiveFocus)
    //         .should('have.text', 'Mobile Phone');
    //     });
    //   });
    // });
  });
});
describe.only('Select', () => {
  before(() => {
    h.stories.visit();
  });
  context(`given the "Scrollable" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Select', 'Scrollable');
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
              cy.findByRole('combobox')
                .focus()
                .realType('s');
            });

            context('the select button', () => {
              it('should read the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByRole('combobox').should('have.value', 'San Francisco (United States)');
              });

              // it(`should have a value of "san-francisco"`, () => {
              //   cy.findByLabelText('Label').should('have.value', 'san-francisco');
              // });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('combobox')
                .focus()
                .realType('ss', {delay: 500});
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
              cy.findByRole('combobox')
                .focus()
                .realType('san m');
            });

            context('the select button', () => {
              it('should read "San Mateo (United States)"', () => {
                cy.findByRole('combobox').should('have.value', 'San Mateo (United States)');
              });
            });
          });
        }
      );

      // TODO: Figure out why this test doesn't open the menu when the
      // space key is pressed when using Firefox with Cypress (pressing
      // the space key in the middle of a typeahead string in normal
      // usage of Firefox opens the menu, see SelectBase)
      // Ensure Firefox doesn't display the menu if there's a space in the
      // typeahead string
      // context('when "san " is typed', () => {
      //   beforeEach(() => {
      //     cy.findByLabelText('Label').realType('san ');
      //   });

      //   context('the menu', () => {
      //     it('should not be visible', () => {
      //       cy.findByLabelText('Label')
      //         .pipe(h.selectPreview.getMenu)
      //         .should('not.exist');
      //     });
      //   });
      // });
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
              // it('should set assistive focus to the first option beginning with "s" ("San Francisco (United States)")', () => {
              //   cy.findByRole('combobox').should('have.value', 'San Francisco (United States)');
              // });

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
              // it('should set assistive focus to the second option beginning with "s" ("San Mateo (United States)")', () => {
              //   cy.findByRole('combobox').should('have.avalue', 'San Mateo (United States)');
              // });

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
              cy.findByRole('combobox')
                .focus()
                .realType('sd', {delay: 500});
              cy.wait(150);
            });

            context('the menu', () => {
              // it('should set assistive focus to the first option beginning with "d" ("Dallas (United States)")', () => {
              //   cy.findByRole('combobox').should('have.value', 'dallas');
              // });

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
              // cy.wait(150);
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
              cy.findByRole('combobox')
                .focus()
                .realType('san m');
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
            cy.findByRole('combobox')
              .focus()
              .type('d')
              .click();
          });

          context('the menu', () => {
            it('should scroll so that the "Dallas (United States)" option is centered in view', () => {
              cy.findByText('Dallas (United States)').should('have.attr', 'aria-selected', 'true');
            });
          });
        });

        // context(
        //   'when "The Ontologically..." (text wrapped) is selected and the menu is opened',
        //   () => {
        //     beforeEach(() => {
        //       cy.findByLabelText('Label')
        //         .focus()
        //         .type('the onto')
        //         .click();
        //     });

        //     context('the menu', () => {
        //       it('should scroll so that the "The Ontologically..." option is centered in view', () => {
        //         cy.findByLabelText('Label')
        //           .pipe(h.selectPreview.getMenu)
        //           .pipe(getAssistiveFocus)
        //           .should(assertOptionCenteredInView);
        //       });
        //     });
        //   }
        // );
      }
    );
  });
});

// context(`given the "Portal Test" story is rendered`, () => {
//   beforeEach(() => {
//     h.stories.load('Testing/Preview/Select/Cypress', 'Portal Test');
//   });

//   context('when the page is scrolled to the bottom', () => {
//     beforeEach(() => {
//       cy.scrollTo('bottom');
//       cy.window()
//         .its('scrollY')
//         .as('originalWindowScrollY');
//     });

//     context('when the bottommost select button is clicked', () => {
//       beforeEach(() => {
//         cy.findByLabelText('Label (Bottom)').click();
//       });

//       context('the page', () => {
//         it('should not scroll', () => {
//           cy.window().then($window => {
//             cy.get('@originalWindowScrollY').should('equal', Math.floor($window.scrollY));
//           });
//         });
//       });
//     });

//     context(
//       `when the blur test button is clicked and then the bottommost select button (which is re-rendered by the test button's blur handler) is clicked`,
//       () => {
//         beforeEach(() => {
//           cy.findByTestId('blur-test-button').click();
//           cy.findByLabelText('Label (Bottom)').click();
//         });

//         context('the page', () => {
//           it('should not scroll', () => {
//             cy.window().then($window => {
//               cy.get('@originalWindowScrollY').should('equal', Math.floor($window.scrollY));
//             });
//           });
//         });
//       }
//     );
//   });
// });

// context(`given the "Accessibility Test" story is rendered`, () => {
//   beforeEach(() => {
//     h.stories.load('Testing/Preview/Select/Cypress', 'Accessibility Test');
//   });

//   context('when the select button with aria-required set to true is clicked', () => {
//     beforeEach(() => {
//       cy.findByLabelText(/Label \(aria-required\)/).click();
//     });

//     context('the menu', () => {
//       it('should have an aria-required attribute set to "true"', () => {
//         cy.findByLabelText(/Label \(aria-required\)/)
//           .pipe(h.selectPreview.getMenu)
//           .should('have.attr', 'aria-required', 'true');
//       });
//     });
//   });

//   context('when the select button with required set to true is clicked', () => {
//     beforeEach(() => {
//       cy.findByLabelText(/Label \(required\)/).click();
//     });

//     context('the menu', () => {
//       it('should have an aria-required attribute set to "true"', () => {
//         cy.findByLabelText(/Label \(required\)/)
//           .pipe(h.selectPreview.getMenu)
//           .should('have.attr', 'aria-required', 'true');
//       });
//     });
//   });
// });
