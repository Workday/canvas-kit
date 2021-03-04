import * as h from '../helpers';

describe('Tabs', () => {
  before(() => {
    h.stories.visit();
  });

  ['Simple', 'Named Keys'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Labs/Tabs/React', story);
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
        cy.findByRole('tab', {name: 'Second Tab'}).should('not.have.attr', 'aria-selected');
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
              cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'aria-selected');
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
              cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'aria-selected');
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

  context('given the DisabledTab story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('Labs/Tabs/React', 'DisabledTab');
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

  context('given the LeftToRight story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Labs/Tabs/React', 'RightToLeft');
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
            cy.findByRole('tab', {name: 'ראשון'}).should('not.have.attr', 'aria-selected');
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
