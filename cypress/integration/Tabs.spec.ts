import * as h from '../helpers';

describe('Tabs', () => {
  before(() => {
    h.stories.visit();
  });

  ['Basic', 'Named Keys'].forEach(story => {
    context(`given the [Components/Containers/Tabs/React, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Containers/Tabs/React', story);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "tablist"', () => {
        cy.findByRole('tablist').should('be.visible');
      });

      it('should have elements with a role of "tab" inside the "tablist"', () => {
        cy.findByRole('tablist')
          .findByRole('tab', {name: 'First Tab'})
          .should('be.visible');
      });

      it('should have "aria-selected=true" for the first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('have.attr', 'aria-selected', 'true');
      });

      it('should not have "aria-selected" for the second tab', () => {
        cy.findByRole('tab', {name: 'Second Tab'}).should('have.attr', 'aria-selected', 'false');
      });

      it('should not have tabindex on the first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex');
      });

      it('should have "tabindex=-1" on the second tab', () => {
        cy.findByRole('tab', {name: 'Second Tab'}).should('have.attr', 'tabindex', '-1');
      });

      it('should have an id on the first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('have.attr', 'id');
      });

      it('should label the tab panel "First Tab"', () => {
        cy.findByRole('tabpanel', {name: 'First Tab'}).should('be.visible');
      });

      it('should have an "aria-controls" on the first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('have.attr', 'aria-controls');
      });

      it('should have an "aria-controls" that matches the first tab panel', () => {
        cy.findByRole('tab', {name: 'First Tab'}).then($tab => {
          const id = $tab.attr('aria-controls');
          cy.findByRole('tabpanel', {name: 'First Tab'}).should('have.attr', 'id', id);
        });
      });

      it('should have a default cursor for the (active) first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('have.css', 'cursor', 'default');
      });

      it('should have a pointer cursor for the second tab', () => {
        cy.findByRole('tab', {name: 'Second Tab'}).should('have.css', 'cursor', 'pointer');
      });

      context('when the first tab is active and focused', () => {
        beforeEach(() => {
          cy.findByRole('tab', {name: 'First Tab'})
            .click()
            .focus();
        });

        context('when the tab key is pressed', () => {
          beforeEach(() => {
            cy.tab();
          });

          it('should move focus to the tabpanel', () => {
            cy.findByRole('tabpanel', {name: 'First Tab'})
              .should('have.focus')
              .and('contain', 'Contents of First Tab');
          });
        });

        context('when the right arrow key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{rightarrow}');
          });

          it('should have tabindex=-1 on the first tab', () => {
            cy.findByRole('tab', {name: 'First Tab'}).should('have.attr', 'tabindex', '-1');
          });

          it('should not have tabindex on the second tab', () => {
            cy.findByRole('tab', {name: 'Second Tab'}).should('not.have.attr', 'tabindex');
          });

          it('should focus on the second tab', () => {
            cy.findByRole('tab', {name: 'Second Tab'}).should('have.focus');
          });

          context('when the space key is pressed', () => {
            beforeEach(() => {
              cy.focused().type(' ');
            });

            it('should not have "aria-selected" on the first tab', () => {
              cy.findByRole('tab', {name: 'First Tab'}).should(
                'have.attr',
                'aria-selected',
                'false'
              );
            });

            it('should have "aria-selected=true" on the second tab', () => {
              cy.findByRole('tab', {name: 'Second Tab'}).should(
                'have.attr',
                'aria-selected',
                'true'
              );
            });
          });

          context('when the enter key is pressed', () => {
            beforeEach(() => {
              cy.focused().type('{enter}');
            });

            it('should not have "aria-selected" on the first tab', () => {
              cy.findByRole('tab', {name: 'First Tab'}).should(
                'have.attr',
                'aria-selected',
                'false'
              );
            });

            it('should have "aria-selected=true" on the second tab', () => {
              cy.findByRole('tab', {name: 'Second Tab'}).should(
                'have.attr',
                'aria-selected',
                'true'
              );
            });
          });

          context('when the tab key is pressed', () => {
            beforeEach(() => {
              cy.tab();
            });

            it('should focus on the tab panel of the first tab', () => {
              cy.findByRole('tabpanel', {name: 'First Tab'}).should('have.focus');
            });

            // verify the original intent is no longer a tab stop
            context('when shift + tab keys are pressed', () => {
              beforeEach(() => {
                cy.tab({shift: true});
              });

              it('should not have tabindex on the first tab', () => {
                cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex');
              });

              it('should set "tabindex=-1" on the second tab', () => {
                cy.findByRole('tab', {name: 'Second Tab'}).should('have.attr', 'tabindex', '-1');
              });

              it('should focus on the first tab', () => {
                cy.findByRole('tab', {name: 'First Tab'}).should('have.focus');
              });
            });
          });
        });

        context('when the left arrow is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{leftarrow}');
          });

          it('should have tabindex=-1 on the first tab', () => {
            cy.findByRole('tab', {name: 'First Tab'}).should('have.attr', 'tabindex', '-1');
          });

          it('should not have tabindex on the last tab', () => {
            cy.findByRole('tab', {name: 'Fifth Tab'}).should('not.have.attr', 'tabindex');
          });

          it('should focus on the last tab', () => {
            cy.findByRole('tab', {name: 'Fifth Tab'}).should('have.focus');
          });
        });
      });

      context('when the fifth tab is clicked', () => {
        beforeEach(() => {
          cy.findByRole('tab', {name: 'Fifth Tab'}).click();
        });

        it('should show the contents of the fifth tab', () => {
          cy.findByRole('tabpanel', {name: 'Fifth Tab'})
            .should('be.visible')
            .and('contain', 'Contents of Fifth Tab');
        });

        context('when the right arrow key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{rightarrow}');
          });

          it('should not have tabindex on the first tab', () => {
            cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex');
          });

          it('should set "tabindex=-1" on the last tab', () => {
            cy.findByRole('tab', {name: 'Fifth Tab'}).should('have.attr', 'tabindex', '-1');
          });
        });
      });
    });
  });

  context('given the [Components/Containers/Tabs/React, DisabledTab] story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('Components/Containers/Tabs/React', 'DisabledTab');
    });

    context('when the first tab is active and focused', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'First Tab'})
          .click()
          .focus();
      });

      context('when the right arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{rightarrow}');
        });

        it('should skip over the second tab and focus on the third tab', () => {
          cy.findByRole('tab', {name: 'Third Tab'}).should('have.focus');
        });
      });
    });
  });

  context('given the [Components/Containers/Tabs/React, DynamicTabs] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Containers/Tabs/React', 'DynamicTabs');
    });

    context('when "Add Tab" is clicked', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'Add Tab'}).click();
      });

      it('should focus on "Add Tab"', () => {
        cy.findByRole('tab', {name: 'Add Tab'}).should('have.focus');
      });

      context('when the left arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{leftarrow}');
        });

        it('should focus on Tab 4', () => {
          cy.findByRole('tab', {name: 'Tab 4'}).should('be.focused');
        });
      });
    });

    context('when "Tab 1" is activated', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'Tab 1'}).click();
      });

      context('then the Backspace/Delete key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{backspace}');
        });

        // Tab activation should move to the right if activated tab is removed
        it('should have "aria-selected=true" for "Tab 2"', () => {
          cy.findByRole('tab', {name: 'Tab 2'}).should('have.attr', 'aria-selected', 'true');
        });

        it('should show "Tab 2" contents', () => {
          cy.findByRole('tabpanel', {name: 'Tab 2'}).should('contain', 'Contents of Tab 2');
        });
      });
    });

    context('when "Tab 3" is activated', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'Tab 3'}).click();
      });

      context('then the left arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{leftarrow}');
        });

        context('then the Backspace/Delete key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{backspace}');
          });

          it('should remove "Tab 2"', () => {
            cy.findByRole('tab', {name: 'Tab 2'}).should('not.exist');
          });

          // Focus moves to the right if focused tab is deleted
          it('should move focus to "Tab 3"', () => {
            cy.findByRole('tab', {name: 'Tab 3'}).should('have.focus');
          });

          // Tab activation should not change if a non-activated tab is deleted
          it('should have "aria-selected=true" for "Tab 3"', () => {
            cy.findByRole('tab', {name: 'Tab 3'}).should('have.attr', 'aria-selected', 'true');
          });

          it('should show "Tab 3" contents', () => {
            cy.findByRole('tabpanel', {name: 'Tab 3'}).should('contain', 'Contents of Tab 3');
          });

          context('then the Backspace/Delete key is pressed again', () => {
            beforeEach(() => {
              cy.focused().type('{backspace}');
            });

            // Focus moves to the right if focused tab is deleted again
            it('should move focus to "Add Tab"', () => {
              cy.findByRole('tab', {name: 'Add Tab'}).should('have.focus');
            });
          });
        });
      });

      context('then the left arrow key is pressed twice', () => {
        beforeEach(() => {
          cy.focused().type('{leftarrow}{leftarrow}');
        });

        context('then the Backspace/Delete key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{backspace}');
          });

          it('should remove "Tab 1"', () => {
            cy.findByRole('tab', {name: 'Tab 1'}).should('not.exist');
          });

          it('should move focus to "Tab 2"', () => {
            cy.findByRole('tab', {name: 'Tab 2'}).should('have.focus');
          });

          // Tab activation should not change if a non-activated tab is deleted
          it('should have "aria-selected=true" for "Tab 3"', () => {
            cy.findByRole('tab', {name: 'Tab 3'}).should('have.attr', 'aria-selected', 'true');
          });

          it('should show "Tab 3" contents', () => {
            cy.findByRole('tabpanel', {name: 'Tab 3'}).should('contain', 'Contents of Tab 3');
          });
        });
      });
    });
  });

  context('given the [Components/Containers/Tabs/React, LeftToRight] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Containers/Tabs/React', 'RightToLeft');
    });

    context('when the first tab is active and focused', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'ראשון'})
          .click()
          .focus();
      });

      context('when the tab key is pressed', () => {
        beforeEach(() => {
          cy.tab();
        });

        it('should move focus to the tabpanel', () => {
          cy.findByRole('tabpanel', {name: 'ראשון'})
            .should('have.focus')
            .and('contain', 'תוכן הראשון');
        });
      });

      context('when the left arrow key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{leftarrow}');
        });

        it('should have tabindex=-1 on the first tab', () => {
          cy.findByRole('tab', {name: 'ראשון'}).should('have.attr', 'tabindex', '-1');
        });

        it('should not have tabindex on the second tab', () => {
          cy.findByRole('tab', {name: 'שְׁנִיָה'}).should('not.have.attr', 'tabindex');
        });

        it('should focus on the second tab', () => {
          cy.findByRole('tab', {name: 'שְׁנִיָה'}).should('have.focus');
        });

        context('when the space key is pressed', () => {
          beforeEach(() => {
            cy.focused().type(' ');
          });

          it('should not have "aria-selected" on the first tab', () => {
            cy.findByRole('tab', {name: 'ראשון'}).should('have.attr', 'aria-selected', 'false');
          });

          it('should have "aria-selected=true" on the second tab', () => {
            cy.findByRole('tab', {name: 'שְׁנִיָה'}).should('have.attr', 'aria-selected', 'true');
          });
        });
      });

      context('when the right arrow is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{rightarrow}');
        });

        it('should have tabindex=-1 on the first tab', () => {
          cy.findByRole('tab', {name: 'ראשון'}).should('have.attr', 'tabindex', '-1');
        });

        it('should not have tabindex on the last tab', () => {
          cy.findByRole('tab', {name: 'חמישי'}).should('not.have.attr', 'tabindex');
        });

        it('should focus on the last tab', () => {
          cy.findByRole('tab', {name: 'חמישי'}).should('have.focus');
        });
      });
    });
  });
});
