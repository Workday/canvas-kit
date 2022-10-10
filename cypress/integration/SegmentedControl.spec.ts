import * as h from '../helpers';

describe('SegmentedControl', () => {
  before(() => {
    h.stories.visit();
  });

  ['Basic', 'Vertical'].forEach(story => {
    context(`given the [Preview/Segmented Control/React, ${story}] story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Preview/Segmented Control/React', story);
      });

      it('should pass axe checks', () => {
        cy.checkA11y();
      });

      it('should have an element with a role of "group"', () => {
        cy.findByRole('group').should('be.visible');
      });

      it('should have a group element with a aria-label attribute', () => {
        cy.findByRole('group').should('have.attr', 'aria-label', 'View type');
      });

      it('should have button elements inside the "group"', () => {
        cy.findByRole('button', {name: 'Table'}).should('be.visible');
      });

      it('should have "aria-pressed=true" for the first button', () => {
        cy.findByRole('button', {name: 'Table'}).should('have.attr', 'aria-pressed', 'true');
      });

      it('should have "aria-pressed=false" for the second button', () => {
        cy.findByRole('button', {name: 'List'}).should('have.attr', 'aria-pressed', 'false');
      });

      it('should have a data-id attribute on the first button', () => {
        cy.findByRole('button', {name: 'Table'}).should('have.attr', 'data-id', 'table');
      });

      it('should have a label', () => {
        cy.findByRole('button', {name: 'Table'}).should('have.attr', 'aria-label', 'Table');
      });

      context('when the button is hovered', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Table'}).trigger('mouseover');
        });

        it('should open the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });

      context('when the button is focused', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Table'}).focus();
        });

        it('should open the tooltip', () => {
          cy.findByRole('tooltip').should('be.visible');
        });
      });

      context('when the first button is active and focused', () => {
        beforeEach(() => {
          cy.findByRole('button', {name: 'Table'})
            .click()
            .focus();
        });

        context('when the tab key is pressed', () => {
          beforeEach(() => {
            cy.tab();
          });

          it('should focus on the second button', () => {
            cy.findByRole('button', {name: 'List'}).should('have.focus');
          });

          context('when the space key is pressed', () => {
            beforeEach(() => {
              cy.focused().type(' ');
            });

            it('should not have "aria-pressed" on the first button', () => {
              cy.findByRole('button', {name: 'Table'}).should('have.attr', 'aria-pressed', 'false');
            });

            it('should have "aria-pressed=true" on the second button', () => {
              cy.findByRole('button', {name: 'List'}).should('have.attr', 'aria-pressed', 'true');
            });
          });

          context('when the enter key is pressed', () => {
            beforeEach(() => {
              cy.focused().type('{enter}');
            });

            it('should not have "aria-pressed" on the first button', () => {
              cy.findByRole('button', {name: 'Table'}).should('have.attr', 'aria-pressed', 'false');
            });

            it('should have "aria-pressed=true" on the second button', () => {
              cy.findByRole('button', {name: 'List'}).should('have.attr', 'aria-pressed', 'true');
            });
          });
        });

        context('when the tab+shift is pressed', () => {
          beforeEach(() => {
            cy.tab({shift: true});
          });

          it('should focus on the last button', () => {
            cy.findByRole('button', {name: 'Diagram'}).should('have.focus');
          });
        });
      });
    });
  });

  context('given the [Preview/Segmented Control/React, Disabled] story is rendered', () => {
    beforeEach(() => {
      cy.loadStory('Preview/Segmented Control/React', 'Disabled');
    });

    context('all buttons should be disabled', () => {
      it('should not have "[aria-pressed]" for all buttons', () => {
        cy.findAllByRole('button').each($el => {
          expect($el).not.have.attr('aria-pressed');
        });
      });

      it('should have "[disabled]" for all buttons', () => {
        cy.findAllByRole('button').each($el => {
          expect($el).to.have.attr('disabled');
        });
      });
    });

    context('when the disabled button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'Table'}).click({force: true});
      });

      it('should not set "[aria-pressed=true]" on the disabled button', () => {
        cy.findByRole('button', {name: 'Table'}).should('not.have.attr', 'aria-pressed');
      });
    });
  });

  context('given the [Preview/Segmented Control/React, rtl] story is rendered', () => {
    beforeEach(() => {
      h.stories.load('Preview/Segmented Control/React', 'rtl');
    });

    context('when the first button is active and focused', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'שולחן'})
          .click()
          .focus();
      });

      context('when the tab key is pressed', () => {
        beforeEach(() => {
          cy.tab();
        });

        it('should focus on the second button', () => {
          cy.findByRole('button', {name: 'רשימה'}).should('have.focus');
        });

        context('when the space key is pressed', () => {
          beforeEach(() => {
            cy.focused().type(' ');
          });

          it('should not have "aria-pressed" on the first button', () => {
            cy.findByRole('button', {name: 'שולחן'}).should('have.attr', 'aria-pressed', 'false');
          });

          it('should have "aria-pressed=true" on the second button', () => {
            cy.findByRole('button', {name: 'רשימה'}).should('have.attr', 'aria-pressed', 'true');
          });
        });

        context('when the enter key is pressed', () => {
          beforeEach(() => {
            cy.focused().type('{enter}');
          });

          it('should not have "aria-pressed" on the first button', () => {
            cy.findByRole('button', {name: 'שולחן'}).should('have.attr', 'aria-pressed', 'false');
          });

          it('should have "aria-pressed=true" on the second button', () => {
            cy.findByRole('button', {name: 'רשימה'}).should('have.attr', 'aria-pressed', 'true');
          });
        });
      });

      context('when the tab+shift is pressed', () => {
        beforeEach(() => {
          cy.tab({shift: true});
        });

        it('should focus on the last button', () => {
          cy.findByRole('button', {name: 'תרשים'}).should('have.focus');
        });
      });
    });
  });
});
