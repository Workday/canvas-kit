import * as h from '../helpers';

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

        context('the menu', () => {
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

          it('should have an aria-activedescendant attribute with the same value as the id of the first option ("E-mail")', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .should($menu => {
                const menuAD = $menu.attr('aria-activedescendant');
                const optionId = $menu.find(`[role=option]:eq(0)`).attr('id');

                expect(menuAD).to.equal(optionId);
              });
          });

          it('should set assistive focus to the first option ("E-mail")', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getMenu)
              .pipe(getAssistiveFocus)
              .should('have.text', 'E-mail');
          });
        });

        context('the first option ("Mail")', () => {
          it('should have an aria-selected attribute set to "true"', () => {
            cy.findByLabelText('Label')
              .pipe(h.selectLabs.getOption(0))
              .should('have.attr', 'aria-selected', 'true');
          });
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

          context('the menu', () => {
            it('should not be visible', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .should('not.be.visible');
            });
          });

          context('when the menu is opened again', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').click();
            });

            context('the menu', () => {
              it('should set assistive focus to "Phone" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'Phone');
              });
            });

            context('the "Phone" option', () => {
              it('should have an aria-selected attribute set to "true"', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getOption('Phone'))
                  .should('have.attr', 'aria-selected', 'true');
              });
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

          context('the select button', () => {
            it('should have an aria-expanded attribute set to "true"', () => {
              cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
            });
          });

          context('the menu', () => {
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
          });

          context('when the down arrow key is pressed for a second time', () => {
            beforeEach(() => {
              cy.focused().type('{downarrow}');
            });

            context('the menu', () => {
              it('should set assistive focus to the "Phone" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'Phone');
              });
            });

            context('when the down arrow key is pressed for a third time', () => {
              beforeEach(() => {
                cy.focused().type('{downarrow}');
              });

              context('the menu', () => {
                it('should set assistive focus to the "Mail" option', () => {
                  cy.findByLabelText('Label')
                    .pipe(h.selectLabs.getMenu)
                    .pipe(getAssistiveFocus)
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

                context('the menu', () => {
                  it('should not be visible', () => {
                    cy.findByLabelText('Label')
                      .pipe(h.selectLabs.getMenu)
                      .should('not.be.visible');
                  });
                });

                context('when the menu is expanded again', () => {
                  beforeEach(() => {
                    cy.focused().type('{downarrow}');
                  });

                  context('the menu', () => {
                    it('should set assistive focus to "Mail" option', () => {
                      cy.findByLabelText('Label')
                        .pipe(h.selectLabs.getMenu)
                        .pipe(getAssistiveFocus)
                        .should('have.text', 'Mail');
                    });
                  });

                  context('the "Mail" option', () => {
                    it('should have an aria-selected attribute set to "true"', () => {
                      cy.findByLabelText('Label')
                        .pipe(h.selectLabs.getOption('Mail'))
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

              context('the menu', () => {
                it('should set assistive focus to the "E-mail" option', () => {
                  cy.findByLabelText('Label')
                    .pipe(h.selectLabs.getMenu)
                    .pipe(getAssistiveFocus)
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

          context('the select button', () => {
            it('should have an aria-expanded attribute set to "true"', () => {
              cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
            });
          });
        });

        context('when the space key is pressed', () => {
          beforeEach(() => {
            cy.findByLabelText('Label').type(' ');
          });

          context('the select button', () => {
            it('should have an aria-expanded attribute set to "true"', () => {
              cy.findByLabelText('Label').should('have.attr', 'aria-expanded', 'true');
            });
          });
        });
      });

      context('when the "select" helper is used to select "Mail"', () => {
        beforeEach(() => {
          cy.findByLabelText('Label').pipe(h.selectLabs.select('Mail'));
        });

        it('should have a value of "mail"', () => {
          cy.findByLabelText('Label').should('have.value', 'mail');
        });
      });

      context('when the "select" helper is used to select /^Mail$/', () => {
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

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should select the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary)',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').type('s');
            });

            context('the select button', () => {
              it('should read the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByLabelText('Label').should('have.text', 'San Francisco (United States)');
              });

              it(`should have a value of "san-francisco"`, () => {
                cy.findByLabelText('Label').should('have.value', 'san-francisco');
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').type('ss', {delay: 500});
            });

            context('the select button', () => {
              it('should read the second option beginning with "s" ("San Mateo (United States)")', () => {
                cy.findByLabelText('Label').should('have.text', 'San Mateo (United States)');
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').type('sd', {delay: 500});
            });

            context('the select button', () => {
              it('should read the first option beginning with "d" ("Dallas (United States)")', () => {
                cy.findByLabelText('Label').should('have.text', 'Dallas (United States)');
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
              cy.findByLabelText('Label').type('sa');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByLabelText('Label').should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').type('san ');
            });

            context('the select button', () => {
              it('should read "San Francisco (United States)"', () => {
                cy.findByLabelText('Label').should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label').type('san m');
            });

            context('the select button', () => {
              it('should read "San Mateo (United States)"', () => {
                cy.findByLabelText('Label').should('have.text', 'San Mateo (United States)');
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
      //     cy.findByLabelText('Label').type('san ');
      //   });

      //   context('the menu', () => {
      //     it('should not be visible', () => {
      //       cy.findByLabelText('Label')
      //         .pipe(h.selectLabs.getMenu)
      //         .should('not.be.visible');
      //     });
      //   });
      // });
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByLabelText('Label').click();
      });

      context(
        'when a character is typed (provided no other characters have been typed in the last 500ms), the select should advance assistive focus to the first matching option beyond the currently selected option (cycling back to the beginning of the options if necessary) and scroll that option into view',
        () => {
          context('when "s" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('s');
            });

            context('the menu', () => {
              it('should set assistive focus to the first option beginning with "s" ("San Francisco (United States)")', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });

              it('should scroll so that the "San Francisco (United States)" option is fully visible', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "s{500ms delay}s" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('ss', {delay: 500});
            });

            context('the menu', () => {
              it('should set assistive focus to the second option beginning with "s" ("San Mateo (United States)")', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Mateo (United States)');
              });

              it('should scroll so that the "San Mateo (United States)" option is fully visible', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "s{500ms delay}d" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('sd', {delay: 500});
            });

            context('the menu', () => {
              it('should set assistive focus to the first option beginning with "d" ("Dallas (United States)")', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'Dallas (United States)');
              });

              it('should scroll so that the "Dallas (United States)" option is fully visible', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionInView);
              });
            });
          });

          context('when "the onto" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('the onto');
            });

            context('the menu', () => {
              it('should set assistive focus to "The Ontologically..."', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(
                    'have.text',
                    'The Ontologically Anthropocentric Sensory Immersive Simulation (Virtual Reality)'
                  );
              });

              it('should scroll so that the "The Ontologically..." (text wrapped) option is fully visible', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
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
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('sa');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san " is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('san ');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Francisco (United States)" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should('have.text', 'San Francisco (United States)');
              });
            });
          });

          context('when "san m" is typed', () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .type('san m');
            });

            context('the menu', () => {
              it('should set assistive focus to the "San Mateo (United States)" option', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
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
            cy.findByLabelText('Label')
              .focus()
              .type('d')
              .click();
          });

          context('the menu', () => {
            it('should scroll so that the "Dallas (United States)" option is centered in view', () => {
              cy.findByLabelText('Label')
                .pipe(h.selectLabs.getMenu)
                .pipe(getAssistiveFocus)
                .should(assertOptionCenteredInView);
            });
          });
        });

        context(
          'when "The Ontologically..." (text wrapped) is selected and the menu is opened',
          () => {
            beforeEach(() => {
              cy.findByLabelText('Label')
                .focus()
                .type('the onto')
                .click();
            });

            context('the menu', () => {
              it('should scroll so that the "The Ontologically..." option is centered in view', () => {
                cy.findByLabelText('Label')
                  .pipe(h.selectLabs.getMenu)
                  .pipe(getAssistiveFocus)
                  .should(assertOptionCenteredInView);
              });
            });
          }
        );
      }
    );
  });

  context(`given the "Portal Test" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Labs/Select', 'Portal Test');
    });

    context(
      'when the page is scrolled to the bottom and the bottommost select button is clicked',
      () => {
        beforeEach(() => {
          cy.scrollTo('bottom');
          cy.window()
            .its('scrollY')
            .as('originalWindowScrollY');
          cy.findByLabelText('Label (Bottom)').click();
        });

        context('the page', () => {
          it('should not scroll', () => {
            cy.window().then($window => {
              cy.get('@originalWindowScrollY').should('equal', $window.scrollY);
            });
          });
        });
      }
    );
  });

  context(`given the "Accessibility Test" story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Labs/Select', 'Accessibility Test');
    });

    context('when the select button with aria-required set to true is clicked', () => {
      beforeEach(() => {
        cy.findByLabelText(/Label \(aria-required\)/).click();
      });

      context('the menu', () => {
        it('should have an aria-required attribute set to "true"', () => {
          cy.findByLabelText(/Label \(aria-required\)/)
            .pipe(h.selectLabs.getMenu)
            .should('have.attr', 'aria-required', 'true');
        });
      });
    });

    context('when the select button with required set to true is clicked', () => {
      beforeEach(() => {
        cy.findByLabelText(/Label \(required\)/).click();
      });

      context('the menu', () => {
        it('should have an aria-required attribute set to "true"', () => {
          cy.findByLabelText(/Label \(required\)/)
            .pipe(h.selectLabs.getMenu)
            .should('have.attr', 'aria-required', 'true');
        });
      });
    });
  });
});
