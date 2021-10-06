import * as h from '../helpers';

function getAssistiveFocus($menu: JQuery): JQuery {
  const activeId = $menu.attr('aria-activedescendant');
  return $menu.find(`[id="${activeId}"]`);
}

function assertOptionInView($option: JQuery) {
  const option = $option[0];
  const menu = option.parentElement!;

  const optionBox = option.getBoundingClientRect();
  const menuBox = menu.getBoundingClientRect();

  expect(optionBox)
    .property('top')
    .to.be.gte(menuBox.top);
  expect(optionBox)
    .property('bottom')
    .to.be.lte(menuBox.bottom);
}

describe('Menu', () => {
  before(() => {
    h.stories.visit();
  });

  context('given the [Preview/Menu/React, Basic] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Preview/Menu/React', 'Basic');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when the menu is opened', () => {
      beforeEach(() => {
        cy.findByText('Open Menu').click();
      });

      context('when the up arrow is pressed', () => {
        beforeEach(() => {
          cy.focused().type('{uparrow}');
        });

        it('should scroll the menu to show the active menu item', () => {
          cy.findByRole('menu')
            .pipe(getAssistiveFocus)
            .should(assertOptionInView);
        });
      });
    });
  });
});
