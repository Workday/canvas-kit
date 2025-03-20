import {
  Default,
  AsAside,
  AsDiv,
  FirstFocusable,
} from '../../modules/preview-react/side-panel/stories/testingCypress.stories';

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

        it(`should have an aria-expanded attribute of 'true'`, () => {
          cy.findByRole('button', {name}).should('have.attr', 'aria-expanded', 'true');
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
          it(`should have an aria-expanded attribute of 'false'`, () => {
            cy.findByRole('button', {name}).should('have.attr', 'aria-expanded', 'false');
          });
        });
      });
    });
  });

  describe(`given the 'first focusable' story is rendered`, () => {
    context(`when focused on a focusable element preceding the Side Panel`, () => {
      beforeEach(() => {
        cy.mount(<FirstFocusable />);
        cy.findByLabelText('Avatar').focus();
      });

      context('when the tab key is pressed once', () => {
        beforeEach(() => {
          cy.tab();
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
