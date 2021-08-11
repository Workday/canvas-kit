import * as h from '../helpers';

function getBreadcrumbsNav() {
  return cy.findByRole('navigation');
}

function getBreadcrumbsList() {
  return cy.findByRole('list');
}

function getDropdownButton() {
  return cy.findByLabelText('more links');
}

function getDropdownMenu() {
  return cy.findByRole('menu');
}

function openDropdownMenu() {
  const dropdownButton = getDropdownButton();
  dropdownButton.focus();
  dropdownButton.type('{enter}');
}

describe('Breadcrumbs', () => {
  before(() => {
    h.stories.visit();
  });
  context('given the [Preview/Breadcrumbs/React, Standard List] is rendered', () => {
    beforeEach(() => {
      h.stories.load('Preview/Breadcrumbs/React', 'StandardList');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have a role of "navigation" on the <nav> element', () => {
      getBreadcrumbsNav().should('have.attr', 'role', 'navigation');
    });

    it('should have an aria-label on the <nav> element', () => {
      getBreadcrumbsNav().should('have.attr', 'aria-label');
    });

    it('should have a role of "list" on the <ul> element', () => {
      getBreadcrumbsList().should('have.attr', 'role', 'list');
    });

    context('when a breadcrumb link is focused', () => {
      it('should show tooltips for truncated link items', () => {
        cy.findAllByRole('link')
          .eq(3)
          .focus()
          .then($link => {
            const text = $link.text();
            cy.findByRole('tooltip').should('contain', text);
          });
      });

      it('should not show tooltips for truncated link items', () => {
        cy.findAllByRole('link')
          .eq(1)
          .focus();
        cy.findByRole('tooltip').should('not.exist');
      });
    });

    context('when the last breadcrumb (current item) is focused', () => {
      it('should show a tooltip for the truncated text', () => {
        cy.get('li:last')
          .focus()
          .then($currentCrumb => {
            const text = $currentCrumb.text();
            cy.findByRole('tooltip').should('contain', text);
          });
      });
    });
  });

  context('given the [Preview/Breadcrumbs/React, Collapsible List] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Preview/Breadcrumbs/React', 'CollapsibleList');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have aria-expanded set to "false" on the dropdown button', () => {
      getDropdownButton().should('have.attr', 'aria-expanded', 'false');
    });

    it('should have aria-haspopup set to "true" on the dropdown button', () => {
      getDropdownButton().should('have.attr', 'aria-haspopup', 'true');
    });

    it('should have aria-controls set to "menu" on the dropdown button', () => {
      getDropdownButton().should('have.attr', 'aria-controls', 'menu');
    });

    context('when the dropdown button is clicked', () => {
      it("should toggle the button's aria-expanded attribute", () => {
        const dropdownButton = getDropdownButton();
        dropdownButton.click();
        dropdownButton.should('have.attr', 'aria-expanded', 'true');
        dropdownButton.click();
        dropdownButton.should('have.attr', 'aria-expanded', 'false');
      });
    });
  });

  context('given the [Preview/Breadcrumbs/React, Collapsible List] menu is rendered', () => {
    beforeEach(() => {
      h.stories.load('Preview/Breadcrumbs/React', 'Collapsible List');
      openDropdownMenu();
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have role set to "menu" on the dropdown menu', () => {
      getDropdownMenu().should('have.attr', 'role', 'menu');
    });

    it('should have role set to "menuitem" for dropdown item link', () => {
      getDropdownMenu()
        .find('a')
        .each($link => {
          expect($link).to.have.attr('role', 'menuitem');
        });
    });

    context('when the dropdown menu is toggled with a keypress', () => {
      it('should set focus to the first menu item', () => {
        getDropdownMenu()
          .find('a')
          .eq(0)
          .should('have.focus');
      });
    });

    context('when the first menu item is focused', () => {
      beforeEach(() => {
        cy.focused().type('{downArrow}');
      });

      it('should toggle focus to the second menu item on down keypress', () => {
        cy.findAllByRole('menuitem')
          .eq(1)
          .should('have.focus');
      });
    });

    context('when the last menu item is focused', () => {
      beforeEach(() => {
        cy.focused().type('{downArrow}');
      });

      it('should roll the focus back to the first menu item on down keypress', () => {
        cy.focused().type('{downArrow}');
        cy.focused().type('{downArrow}');
        cy.findAllByRole('menuitem')
          .eq(0)
          .should('have.focus');
      });
    });

    context('when the down arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        cy.focused().type('{downArrow}');
      });

      it('should toggle focus to the next menu item on down keypress', () => {
        cy.findAllByRole('menuitem')
          .eq(1)
          .should('have.focus');
      });
    });

    context('when the right arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        cy.focused().type('{rightArrow}');
      });

      it('should toggle focus to the next menu item', () => {
        cy.findAllByRole('menuitem')
          .eq(1)
          .should('have.focus');
      });

      it('should roll the focus back from the last menu item to the first menu item', () => {
        cy.focused().type('{rightArrow}');
        cy.focused().type('{rightArrow}');
        cy.findAllByRole('menuitem')
          .eq(0)
          .should('have.focus');
      });
    });

    context('when the up arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        // set focus to the second menuitem
        cy.focused().type('{downArrow}');
      });
      it('should toggle focus to the previous list item', () => {
        cy.focused().type('{upArrow}');
        cy.findAllByRole('menuitem')
          .eq(0)
          .should('have.focus');
      });

      it('should return focus from the first menu item to the dropdown button', () => {
        cy.focused().type('{upArrow}');
        cy.focused().type('{upArrow}');
        getDropdownButton().should('have.focus');
      });
    });

    context('when the left arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        // set focus to the second menuitem
        cy.focused().type('{downArrow}');
      });
      it('should toggle focus to the previous menu item', () => {
        cy.focused().type('{leftArrow}');
        cy.findAllByRole('menuitem')
          .eq(0)
          .should('have.focus');
      });

      it('should return focus from the first menu item to the dropdown button', () => {
        cy.focused().type('{leftArrow}');
        cy.focused().type('{leftArrow}');
        getDropdownButton().should('have.focus');
      });
    });

    context('when the escape key is pressed on the dropdown menu', () => {
      it('should return focus to the dropdown menu button', () => {
        cy.focused().type('{esc}');
        getDropdownButton().should('have.focus');
      });
    });
  });
});
