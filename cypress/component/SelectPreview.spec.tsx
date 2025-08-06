import * as h from '../helpers';
// Top Examples
import {
  Default,
  Disabled,
  Scrollable,
} from '../../modules/preview-react/select/stories/examples/Top Label';
import {
  AccessibilityTest,
  DisabledOptionsTest,
  PortalTest,
} from '../../modules/preview-react/select/stories/stories_CypressTesting';

function getAssistiveFocus($menu: JQuery): JQuery {
  const activeId = $menu.attr('aria-activedescendant');
  return $menu.find(`[id="${activeId}"]`);
}

function assertOptionInView($option: JQuery) {
  const option = $option[0];
  const $menu = $option.parent();
  const menu = $menu[0];

  const menuBorderTopWidth = parseInt($menu.css('borderTopWidth'), 10);

  const menuViewTop = menu.scrollTop + menuBorderTopWidth;
  const menuViewBottom = menuViewTop + menu.clientHeight;
  const optionTop = option.offsetTop;
  const optionBottom = optionTop + option.offsetHeight;

  const optionInView = optionTop >= menuViewTop && optionBottom <= menuViewBottom;

  expect(optionInView).to.equal(true);
}

function assertOptionCenteredInView($option: JQuery) {
  const option = $option[0];
  const $menu = $option.parent();
  const menu = $menu[0];

  const menuBorderTopWidth = parseInt($menu.css('borderTopWidth'), 10);

  const expectedMenuScrollTop = Math.floor(
    option.offsetTop - menu.clientHeight / 2 - menuBorderTopWidth + option.clientHeight / 2
  );

  expect(menu.scrollTop).to.equal(expectedMenuScrollTop);
}
// TODO: Remove this file when we remove SelectPreview.
describe.skip('Select', () => {
  context(`given the "Default" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Default />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when the select button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).click();
      });

      it('should not have any axe errors', () => {
        cy.checkA11y('[role="listbox"]', {
          rules: {
            'aria-input-field-name': {enabled: false},
            'scrollable-region-focusable': {enabled: false},
          },
        });
      });

      context('the select button', () => {
        it('should have an aria-expanded attribute set to "true"', () => {
          cy.findByRole('button', {name: 'Label'}).should('have.attr', 'aria-expanded', 'true');
        });
      });

      context('the menu', () => {
        it('should be visible', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .should('be.visible');
        });

        it('should have focus', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .should('have.focus');
        });

        it('should have an aria-activedescendant attribute with the same value as the id of the first option ("E-mail")', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .should($menu => {
              const menuAD = $menu.attr('aria-activedescendant');
              const optionId = $menu.find(`[role=option]:eq(0)`).attr('id');

              expect(menuAD).to.equal(optionId);
            });
        });

        it('should set assistive focus to the first option ("E-mail")', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .pipe(getAssistiveFocus)
            .should('have.text', 'E-mail');
        });
      });

      context('the first option ("Mail")', () => {
        it('should have an aria-selected attribute set to "true"', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getOption(0))
            .should('have.attr', 'aria-selected', 'true');
        });
      });

      context(`when the "Phone" option (with the value "phone") is clicked`, () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'}).pipe(h.selectPreview.getOption('Phone')).click();
        });

        context('the select button', () => {
          it(`should read "Phone"`, () => {
            cy.findByRole('button', {name: 'Label'}).should('have.text', 'Phone');
          });

          it(`should have a value of "phone"`, () => {
            cy.findByRole('button', {name: 'Label'}).should('have.value', 'phone');
          });

          it(`should re-acquire focus`, () => {
            cy.findByRole('button', {name: 'Label'}).should('be.focused');
          });
        });

        context('the menu', () => {
          it('should not be visible', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('not.exist');
          });
        });

        context('when the menu is opened again', () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'Label'}).click();
          });

          context('the menu', () => {
            it('should set assistive focus to the "Phone" option', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should('have.text', 'Phone');
            });
          });

          context('the "Phone" option', () => {
            it('should have an aria-selected attribute set to "true"', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getOption('Phone'))
                .should('have.attr', 'aria-selected', 'true');
            });
          });
        });
      });
    });

    context('when the select button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).focus();
      });

      it('the button should have focus', () => {
        cy.findByRole('button', {name: 'Label'}).should('have.focus');
      });

      context('when the down arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'}).should('exist').type('{downArrow}');
        });

        context('the select button', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByRole('button', {name: 'Label'}).should('have.attr', 'aria-expanded', 'true');
          });
        });

        context('the menu', () => {
          it('should be visible', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('be.visible');
          });

          it('should have focus', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('have.focus');
          });
        });
      });

      context('when the down arrow key is pressed for a second time', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'})
            .should('exist')
            .type('{downArrow}', {delay: 50})
            .pipe(h.selectPreview.getMenu)
            .type('{downArrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the "Phone" option', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('exist')
              .pipe(getAssistiveFocus)
              .should('have.text', 'Phone');
          });
        });
        context('when the up arrow key is pressed', () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('exist')
              .type('{upArrow}');
          });

          context('the menu', () => {
            it('should set assistive focus to the "E-mail" option', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .should('exist')
                .pipe(getAssistiveFocus)
                .should('have.text', 'E-mail');
            });
          });
        });
      });

      context('when the down arrow key is pressed for a third time', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'})
            .should('exist')
            .type('{downArrow}', {delay: 50})
            .pipe(h.selectPreview.getMenu)
            .type('{downArrow}', {delay: 50})
            .type('{downArrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the "Mail" option', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'Mail');
          });
        });
      });

      context('when the enter key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'})
            .should('exist')
            .type('{downArrow}', {delay: 50})
            .pipe(h.selectPreview.getMenu)
            .type('{downArrow}', {delay: 50})
            .type('{downArrow}', {delay: 50})
            .type('{enter}');
        });

        context('the select button', () => {
          it(`should read "Mail"`, () => {
            cy.findByRole('button', {name: 'Label'}).should('have.text', 'Mail');
          });

          it(`should have a value of "mail"`, () => {
            cy.findByRole('button', {name: 'Label'}).should('have.value', 'mail');
          });

          it(`should re-acquire focus`, () => {
            cy.findByRole('button', {name: 'Label'}).should('have.focus');
          });
        });

        context('the menu', () => {
          it('should not be visible', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .should('not.exist');
          });
        });

        context('when the menu is expanded again', () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'Label'}).realPress('{downarrow}');
          });

          context('the menu', () => {
            it('should set assistive focus to the "Mail" option', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should('have.text', 'Mail');
            });
          });

          context('the "Mail" option', () => {
            it('should have an aria-selected attribute set to "true"', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should('have.attr', 'aria-selected', 'true');
            });
          });
        });
      });

      context('when the enter key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'}).realPress('{enter}');
        });

        context('the select button', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByRole('button', {name: 'Label'}).should('have.attr', 'aria-expanded', 'true');
          });
        });
      });

      context('when the space key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'}).type(' ', {force: true}); // disable event.preventDefault checks
        });

        context('the select button', () => {
          it('should have an aria-expanded attribute set to "true"', () => {
            cy.findByRole('button', {name: 'Label'}).should('have.attr', 'aria-expanded', 'true');
          });
        });
      });
    });

    context('when the "select" helper is used to select "Mail"', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).pipe(h.selectPreview.select('Mail'));
      });

      it('should have a value of "mail"', () => {
        cy.findByRole('button', {name: 'Label'}).should('have.value', 'mail');
      });
    });

    context('when the "select" helper is used to select /^Mail$/', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).pipe(h.selectPreview.select(/^Mail$/));
      });

      it('should have a value of "mail"', () => {
        cy.findByRole('button', {name: 'Label'}).should('have.value', 'mail');
      });
    });
  });

  context(`given the "Default" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Default />);
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).focus().type('{downArrow}');
      });

      context('the menu', () => {
        it('should set assistive focus to the first option ("E-mail")', () => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .pipe(getAssistiveFocus)
            .should('have.text', 'E-mail');
        });
      });

      context('when focus is advanced to the second option ("Phone")', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label'})
            .pipe(h.selectPreview.getMenu)
            .should('exist')
            .type('{downArrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to the second option ("Phone")', () => {
            cy.findByRole('button', {name: 'Label'})
              .pipe(h.selectPreview.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'Phone');
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
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .should('not.exist');
                cy.findByRole('button', {name: 'Label'}).focus().realType('{downarrow}');
              });

              context('the menu', () => {
                it('should have reset assistive focus to the first option ("E-mail")', () => {
                  cy.findByRole('button', {name: 'Label'})
                    .pipe(h.selectPreview.getMenu)
                    .pipe(getAssistiveFocus)
                    .should('have.text', 'E-mail');
                });
              });
            });

            context('when the menu is re-opened BEFORE it has fully closed', () => {
              beforeEach(() => {
                cy.focused().realType('{downarrow}');
              });

              context('the menu', () => {
                it('should still have assistive focus set to the second option ("Phone")', () => {
                  // Focus is shifting between the button and menu as we close
                  // and open the menu. It's important that we use getMenu rather
                  // than cy.focused() to ensure we obtain a reference to the menu.
                  cy.findByRole('button', {name: 'Label'})
                    .pipe(h.selectPreview.getMenu)
                    .pipe(getAssistiveFocus)
                    .should('have.text', 'Phone');
                });
              });
            });
          }
        );
      });
    });
  });

  context(`given the "Disabled" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('the select button', () => {
      it('should be disabled', () => {
        cy.findByRole('button', {name: 'Label'}).should('be.disabled');
      });
    });
  });

  context('given the "Disabled Options Test" story is rendered', () => {
    beforeEach(() => {
      cy.mount(<DisabledOptionsTest />);
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label (Disabled Options)'}).focus().type('{downArrow}');
      });

      context('the "Carrier Pigeon" option', () => {
        it('should have an aria-disabled attribute set to "true"', () => {
          cy.findByRole('button', {name: 'Label (Disabled Options)'})
            .pipe(h.selectPreview.getOption('Carrier Pigeon'))
            .should('have.attr', 'aria-disabled', 'true');
        });
      });

      context('when the down arrow key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label (Disabled Options)'})
            .pipe(h.selectPreview.getMenu)
            .should('exist')
            .type('{downArrow}');
        });

        context('the menu', () => {
          it('should set assistive focus to first enabled option ("E-mail")', () => {
            cy.findByRole('button', {name: 'Label (Disabled Options)'})
              .pipe(h.selectPreview.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'E-mail');
          });
        });

        context('when the up arrow key is pressed', () => {
          beforeEach(() => {
            cy.realPress('{uparrow}');
          });

          context('the menu', () => {
            it('should retain assistive focus on the "E-mail" option since the previous option ("Carrier Pigeon", which also happens to be the first option) is disabled', () => {
              cy.findByRole('button', {name: 'Label (Disabled Options)'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should('have.text', 'E-mail');
            });
          });
        });

        context('when the down arrow key is pressed 2 more times', () => {
          beforeEach(() => {
            cy.findByRole('button', {name: 'Label (Disabled Options)'})
              .pipe(h.selectPreview.getMenu)
              .should('exist')
              .type('{downArrow}', {delay: 100})
              .type('{downArrow}');
          });

          context('the menu', () => {
            it('should set assistive focus to the third option down ("Mail") since focus will have skipped one disabled option ("Fax")', () => {
              cy.findByRole('button', {name: 'Label (Disabled Options)'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should('have.text', 'Mail');
            });
          });

          context('when the down arrow key is pressed 2 more times', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label (Disabled Options)'})
                .pipe(h.selectPreview.getMenu)
                .should('exist')
                .type('{downArrow}', {delay: 100})
                .type('{downArrow}');
            });

            context('the menu', () => {
              it('should set assistive focus to the first option down ("Mobile Phone") since the second option down ("Telegram", which also happens to be the last option) is disabled', () => {
                cy.findByRole('button', {name: 'Label (Disabled Options)'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'Mobile Phone');
              });
            });
          });
        });
      });

      context('when the Home key is pressed', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label (Disabled Options)'})
            .pipe(h.selectPreview.getMenu)
            .should('exist')
            .type('{home}');
        });

        context('the menu', () => {
          it('should set assistive focus to the first enabled option ("E-mail")', () => {
            cy.findByRole('button', {name: 'Label (Disabled Options)'})
              .pipe(h.selectPreview.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'E-mail');
          });
        });
      });

      context('when the End key is pressed', () => {
        beforeEach(() => {
          cy.realPress('{end}');
        });

        context('the menu', () => {
          it('should set assistive focus to the last enabled option ("Mobile Phone")', () => {
            cy.findByRole('button', {name: 'Label (Disabled Options)'})
              .pipe(h.selectPreview.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'Mobile Phone');
          });
        });
      });
    });
  });

  context(`given the "Scrollable" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<Scrollable />);
    });

    context('when the select button is focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).focus();
      });

      it('button should have focus', () => {
        cy.findByRole('button', {name: 'Label'}).should('have.focus');
      });

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should select the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary)',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).realType('s');
            });

            context('the select button', () => {
              it('should read the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'San Francisco (United States)'
                );
              });

              it(`should have a value of "san-francisco"`, () => {
                cy.findByRole('button', {name: 'Label'}).should('have.value', 'san-francisco');
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).should('exist').type('ss', {delay: 500});
            });

            context('the select button', () => {
              it('should read the second option beginning with "s" ("San Mateo (United States)")', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'San Mateo (United States)'
                );
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).realType('s', {delay: 500});
              cy.findByRole('button', {name: 'Label'}).realType('d');
            });

            context('the select button', () => {
              it('should read the first option beginning with "d" ("Dallas (United States)")', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'Dallas (United States)'
                );
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
              cy.findByRole('button', {name: 'Label'}).realType('sa');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'San Francisco (United States)'
                );
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).realType('san ');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'San Francisco (United States)'
                );
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).realType('san m');
            });

            context('the select button', () => {
              it('should read "San Mateo (United States)"', () => {
                cy.findByRole('button', {name: 'Label'}).should(
                  'have.text',
                  'San Mateo (United States)'
                );
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
      //     cy.findByRole('button', {name: 'Label'}).realType('san ');
      //   });

      //   context('the menu', () => {
      //     it('should not be visible', () => {
      //       cy.findByRole('button', {name: 'Label'})
      //         .pipe(h.selectPreview.getMenu)
      //         .should('not.exist');
      //     });
      //   });
      // });
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Label'}).click();
      });

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should advance assistive focus to the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary) and scroll that option into view',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).pipe(h.selectPreview.getMenu).realType('s');
            });

            context('the menu', () => {
              it('should set assistive focus to the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });

              it('should scroll so that the "San Francisco (United States)" option is fully visible', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .realType('ss', {delay: 500});
            });

            context('the menu', () => {
              it('should set assistive focus to the second option beginning with "s" ("San Mateo (United States)")', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Mateo (United States)');
              });

              it('should scroll so that the "San Mateo (United States)" option is fully visible', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .should('exist')
                .type('sd', {delay: 500});
            });

            context('the menu', () => {
              it('should set assistive focus to the first option beginning with "d" ("Dallas (United States)")', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'Dallas (United States)');
              });

              it('should scroll so that the "Dallas (United States)" option is fully visible', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "the onto" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .realType('the onto');
            });

            context('the menu', () => {
              it('should set assistive focus to "The Ontologically..."', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(
                    'have.text',
                    'The Ontologically Anthropocentric Sensory Immersive Simulation (Virtual Reality)'
                  );
              });

              it('should scroll so that the "The Ontologically..." (text wrapped) option is fully visible', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
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
              cy.findByRole('button', {name: 'Label'}).pipe(h.selectPreview.getMenu).realType('sa');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .realType('san ');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .type('san m', {delay: 50});
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Mateo (United States)" option', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Mateo (United States)');
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
            cy.findByRole('button', {name: 'Label'}).focus().type('d').click();
          });

          context('the menu', () => {
            // Asserting specific pixels is incredibly hard
            it.skip('should scroll so that the "Dallas (United States)" option is centered in view', () => {
              cy.findByRole('button', {name: 'Label'})
                .pipe(h.selectPreview.getMenu)
                .pipe(getAssistiveFocus)
                .should(assertOptionCenteredInView);
            });
          });
        });

        context(
          'when "The Ontologically..." (text wrapped) is selected and the menu is opened',
          () => {
            beforeEach(() => {
              cy.findByRole('button', {name: 'Label'}).focus().type('the onto').click();
            });

            context('the menu', () => {
              // Skipping this, trying to assert specific pixel values and it's always off
              it.skip('should scroll so that the "The Ontologically..." option is centered in view', () => {
                cy.findByRole('button', {name: 'Label'})
                  .pipe(h.selectPreview.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionCenteredInView);
              });
            });
          }
        );
      }
    );
  });

  context.skip(`given the "Portal Test" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<PortalTest />);
    });

    context('when the page is scrolled to the bottom', () => {
      beforeEach(() => {
        cy.scrollTo('bottom');
        cy.window().its('scrollY').as('originalWindowScrollY');
      });

      context('when the bottommost select button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Label (Bottom)'}).click();
        });

        context('the page', () => {
          it('should not scroll', () => {
            cy.window().then($window => {
              cy.get('@originalWindowScrollY').should('equal', Math.floor($window.scrollY));
            });
          });
        });
      });

      context(
        `when the blur test button is clicked and then the bottommost select button (which is re-rendered by the test button's blur handler) is clicked`,
        () => {
          beforeEach(() => {
            cy.findByTestId('blur-test-button').click();
            cy.findByRole('button', {name: 'Label (Bottom)'}).click();
          });

          context('the page', () => {
            it('should not scroll', () => {
              cy.window().then($window => {
                cy.get('@originalWindowScrollY').should('equal', Math.floor($window.scrollY));
              });
            });
          });
        }
      );
    });
  });

  context(`given the "Accessibility Test" story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<AccessibilityTest />);
    });

    context('when the select button with aria-required set to true is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: /Label \(aria-required\)/}).click();
      });

      context('the menu', () => {
        it('should have an aria-required attribute set to "true"', () => {
          cy.findByRole('button', {name: /Label \(aria-required\)/})
            .pipe(h.selectPreview.getMenu)
            .should('have.attr', 'aria-required', 'true');
        });
      });
    });

    context('when the select button with required set to true is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: /Label \(required\)/}).click();
      });

      context('the menu', () => {
        it('should have an aria-required attribute set to "true"', () => {
          cy.findByRole('button', {name: /Label \(required\)/})
            .pipe(h.selectPreview.getMenu)
            .should('have.attr', 'aria-required', 'true');
        });
      });
    });
  });
});
