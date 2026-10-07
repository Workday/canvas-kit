import {
  AsAside,
  AsDiv,
  Default,
  FirstFocusable,
} from '../../modules/react/side-panel/stories/testingCypress.stories';

describe('Side Panel', () => {
  const name = /Accessible Label Name/i;

  [
    {name: 'Default', role: 'region', example: Default},
    {name: 'AsAside', role: 'complementary', example: AsAside},
    {name: 'AsDiv', role: 'region', example: AsDiv},
  ].forEach(story => {
    const Example = story.example;
    context(`given the "${story.name}" story is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('the button', () => {
        it(`should have an accessible name`, () => {
          cy.findByRole('button', {name}).should('exist');
        });

        it(`should have an aria-pressed attribute of 'false'`, () => {
          cy.findByRole('button', {name}).should('have.attr', 'aria-pressed', 'false');
        });

        it(`should have an aria-controls attribute equal to the id of the panel`, () => {
          cy.findByRole('button', {name}).then(button => {
            const buttonAriaControlsValue = button.attr('aria-controls');
            cy.findByRole(story.role, {name}).should('have.attr', 'id', buttonAriaControlsValue);
          });
        });
      });

      it(`should have a panel with a landmark role`, () => {
        cy.findByRole(story.role, {name}).should('exist');
      });

      context(`when collapsing the panel`, () => {
        beforeEach(() => {
          cy.findByRole('button', {name}).click();
        });

        context('the button', () => {
          it(`should still have an aria-pressed attribute of 'false' while collapsing`, () => {
            cy.findByRole('button', {name}).should('have.attr', 'aria-pressed', 'false');
          });
        });

        context(`when the panel's width transition finishes`, () => {
          beforeEach(() => {
            // Transitions are disabled for Cypress in `component-index.html`, so the width
            // transition never runs and `transitionend` never fires on its own. Dispatch it so the
            // model settles from `collapsing` into `collapsed`. `eventConstructor` matters here:
            // the default `Event` cannot carry `propertyName`, which the model checks for.
            cy.findByRole(story.role, {name}).trigger('transitionend', {
              eventConstructor: 'TransitionEvent',
              propertyName: 'width',
            });
          });

          context('the button', () => {
            it(`should have an aria-pressed attribute of 'true'`, () => {
              cy.findByRole('button', {name}).should('have.attr', 'aria-pressed', 'true');
            });
          });
        });
      });
    });
  });

  describe(`given the 'first focusable' story is rendered`, () => {
    context(`when focused on a focusable element preceding the Side Panel`, () => {
      beforeEach(() => {
        cy.mount(<FirstFocusable />);
        cy.findByRole('button', {name: 'Open'}).focus();
      });

      context('when the tab key is pressed once', () => {
        beforeEach(() => {
          cy.realPress('Tab');
        });

        context('the expand/collapse control button', () => {
          it(`should be focused first`, () => {
            cy.findByRole('button', {name}).should('have.focus');
          });
        });
      });
    });
  });
});
