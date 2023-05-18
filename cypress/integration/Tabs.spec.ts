import * as h from '../helpers';

describe('Tabs', () => {
  before(() => {
    h.stories.visit();
  });

  ['Basic', 'Named Tabs'].forEach(story => {
    context(`given the [Components/Containers/Tabs, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Containers/Tabs', story);
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

      it('should not have tabindex=-1 on the first tab', () => {
        cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex', '-1');
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

          it('should not have tabindex=-1 on the second tab', () => {
            cy.findByRole('tab', {name: 'Second Tab'}).should('not.have.attr', 'tabindex', '-1');
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

              it('should not have tabindex=-1 on the first tab', () => {
                cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex', '-1');
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

          it('should not have tabindex=-1 on the last tab', () => {
            cy.findByRole('tab', {name: 'Fifth Tab'}).should('not.have.attr', 'tabindex', '-1');
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

          it('should not have tabindex=-1 on the first tab', () => {
            cy.findByRole('tab', {name: 'First Tab'}).should('not.have.attr', 'tabindex', '-1');
          });

          it('should set "tabindex=-1" on the last tab', () => {
            cy.findByRole('tab', {name: 'Fifth Tab'}).should('have.attr', 'tabindex', '-1');
          });
        });
      });
    });
  });

  context('given the [Components/Containers/Tabs, DisabledTab] story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('Components/Containers/Tabs', 'DisabledTab');
    });

    context('when the Disabled Tab is clicked', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'Disabled Tab'}).click();
      });

      it('should not set "[aria-selected=true]" on the Disabled Tab', () => {
        cy.findByRole('tab', {name: 'Disabled Tab'}).should(
          'not.have.attr',
          'aria-selected',
          'true'
        );
      });

      it('should leave the first tab selected', () => {
        cy.findByRole('tabpanel').should('contain', 'Contents of First Tab');
      });
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

        it('should focus on the Disabled Tab', () => {
          cy.findByRole('tab', {name: 'Disabled Tab'}).should('have.focus');
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{enter}');
          });

          it('should not set "[aria-selected=true]" on the Disabled Tab', () => {
            cy.findByRole('tab', {name: 'Disabled Tab'}).should(
              'not.have.attr',
              'aria-selected',
              'true'
            );
          });

          it('should leave the first tab selected', () => {
            cy.findByRole('tabpanel').should('contain', 'Contents of First Tab');
          });
        });
      });
    });
  });

  context('given the [Components/Containers/Tabs, DynamicTabs] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Containers/Tabs', 'DynamicTabs');
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

      context('then the Delete key is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{del}');
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

        context('then the Delete key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{del}');
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

          context('then the Delete key is pressed again', () => {
            beforeEach(() => {
              cy.focused().type('{del}');
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

        context('then the Delete key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{del}');
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

  context('given the [Components/Containers/Tabs, LeftToRight] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Containers/Tabs', 'RightToLeft');
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

        it('should not have tabindex=-1 on the second tab', () => {
          cy.findByRole('tab', {name: 'שְׁנִיָה'}).should('not.have.attr', 'tabindex', '-1');
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

        it('should not have tabindex=-1 on the last tab', () => {
          cy.findByRole('tab', {name: 'חמישי'}).should('not.have.attr', 'tabindex', '-1');
        });

        it('should focus on the last tab', () => {
          cy.findByRole('tab', {name: 'חמישי'}).should('have.focus');
        });
      });
    });
  });

  context('when [Components/Containers/Tabs, OverflowTabs] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Containers/Tabs', 'OverflowTabs');
    });

    it('should pass axe checks', () => {
      cy.checkA11y();
    });

    it('should not show the "More" button', () => {
      cy.findByRole('button', {name: 'More'}).should('not.exist');
    });

    it('should have 7 tab items', () => {
      cy.findAllByRole('tab').should('have.length', 7);
    });

    it('should not have scroll', () => {
      cy.findByRole('tablist')
        .its('scrollX')
        .should('not.exist');
    });

    context('when the "First Tab" is focused', () => {
      beforeEach(() => {
        cy.findByRole('tab', {name: 'First Tab'})
          .click()
          .focus();
      });

      context('when the Tab key is pressed', () => {
        beforeEach(() => {
          cy.focused().tab();
        });

        it('should focus on the tab panel', () => {
          cy.findByRole('tabpanel', {name: 'First Tab'}).should('have.focus');
        });
      });
    });

    context('when tab list container is only 500px wide', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: '500px'}).click();
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should show the "More" button', () => {
        cy.findByRole('button', {name: 'More'}).should('exist');
      });

      it('should show only 3 tab items', () => {
        cy.findAllByRole('tab').should('have.length', 3);
      });

      it('should not have scroll', () => {
        cy.findByRole('tablist')
          .its('scrollX')
          .should('not.exist');
      });

      context('when the "First Tab" is focused', () => {
        beforeEach(() => {
          cy.findByRole('tab', {name: 'First Tab'})
            .click()
            .focus();
        });

        context('when the Tab key is pressed', () => {
          beforeEach(() => {
            cy.focused().tab();
          });

          it('should focus on the "More" button', () => {
            cy.findByRole('button', {name: 'More'}).should('have.focus');
          });
        });
      });

      context('when the "More" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'More'}).click();
        });

        it('should show the Tab overflow menu', () => {
          cy.findByRole('menu', {name: 'More'}).should('exist');
        });

        it('should have the fourth Tab as the first menu item', () => {
          cy.findAllByRole('menuitem')
            .eq(0)
            .should('contain', 'Fourth Tab');
        });

        context('when the "Sixth Tab" is clicked', () => {
          beforeEach(() => {
            cy.findByRole('menuitem', {name: 'Sixth Tab'}).click();
          });

          it('should select the Sixth Tab', () => {
            cy.findByRole('tab', {name: 'Sixth Tab'}).should('have.attr', 'aria-selected', 'true');
          });

          it('should move focus back to the "More" button', () => {
            cy.findByRole('button', {name: 'More'}).should('have.focus');
          });
        });
      });
    });

    context('when tab list container is only 360px wide', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: '360px'}).click();
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should show the "More" button', () => {
        cy.findByRole('button', {name: 'More'}).should('exist');
      });

      it('should not have scroll', () => {
        cy.findByRole('tablist')
          .its('scrollX')
          .should('not.exist');
      });

      it('should show only 2 tab items', () => {
        cy.findAllByRole('tab').should('have.length', 2);
      });

      context('when the "More" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'More'}).click();
        });

        it('should show the Tab overflow menu', () => {
          cy.findByRole('menu', {name: 'More'}).should('exist');
        });

        it('should have the third Tab as the first menu item', () => {
          cy.findAllByRole('menuitem')
            .eq(0)
            .should('contain', 'Third Tab');
        });
      });
    });

    context('when tab list container is only 150px wide', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: '150px'}).click();
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should show the "More" button', () => {
        cy.findByRole('button', {name: 'More'}).should('exist');
      });

      it('should not have scroll', () => {
        cy.findByRole('tablist')
          .its('scrollX')
          .should('not.exist');
      });

      it('should show no tab items', () => {
        cy.findAllByRole('tab').should('have.length', 0);
      });

      context('when the "More" button is clicked', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'More'}).click();
        });

        it('should show the Tab overflow menu', () => {
          cy.findByRole('menu', {name: 'More'}).should('exist');
        });

        it('should have the third Tab as the first menu item', () => {
          cy.findAllByRole('menuitem')
            .eq(0)
            .should('contain', 'First Tab');
        });
      });
    });

    context('mobile viewport', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
        cy.findByRole('button', {name: '500px'}).realTouch();
      });

      it('should not show the "More" button', () => {
        cy.findByRole('button', {name: 'More'}).should('not.exist');
      });

      it('should have scroll behavior', () => {
        cy.findByRole('tablist')
          .its('scrollX')
          .should('not.equal', 0);
      });
    });
  });
});
