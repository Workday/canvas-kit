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
  context('given the default breadcrumb list', () => {
    beforeEach(() => {
      h.stories.load('Labs|Breadcrumbs/React', 'Default');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have a role of navigation', () => {
      getBreadcrumbsNav().should('have.attr', 'role', 'navigation');
    });

    it('should have an aria-label', () => {
      getBreadcrumbsNav().should('have.attr', 'aria-label');
    });

    it('should have a ul with a role of list', () => {
      getBreadcrumbsList().should('have.attr', 'role', 'list');
    });

    it('should show tooltips on focus for truncated link items', () => {
      // should see tooltip for the first item
      cy.findAllByRole('link')
        .eq(0)
        .focus()
        .then($link => {
          const text = $link.text();
          cy.findByRole('tooltip').should('contain', text);
        });
      // should not see tooltip for the second item
      cy.findAllByRole('link')
        .eq(1)
        .focus();
      cy.findByRole('tooltip').should('not.exist');
      // should not see tooltip for the third item
      cy.findAllByRole('link')
        .eq(2)
        .focus();
      cy.findByRole('tooltip').should('not.exist');
      // should see tooltip for the fourth item
      cy.findAllByRole('link')
        .eq(3)
        .focus()
        .then($link => {
          const text = $link.text();
          cy.findByRole('tooltip').should('contain', text);
        });
      // should see tooltip for the last item (current crumb)
      cy.get('li span:last')
        .focus()
        .then($currentCrumb => {
          const text = $currentCrumb.text();
          cy.findByRole('tooltip').should('contain', text);
        });
    });
  });

  context('given the collapsible breadcrumb list', () => {
    beforeEach(() => {
      h.stories.load('Labs|Breadcrumbs/React', 'Collapsible');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have a dropdown button with the correct aria attributes', () => {
      getDropdownButton()
        .should('have.attr', 'aria-expanded', 'false')
        .and('have.attr', 'aria-haspopup', 'true')
        .and('have.attr', 'aria-controls', 'menu');
    });

    it('should toggle aria-expanded on the dropdown button', () => {
      const dropdownButton = getDropdownButton();
      dropdownButton.click();
      dropdownButton.should('have.attr', 'aria-expanded', 'true');
      dropdownButton.click();
      dropdownButton.should('have.attr', 'aria-expanded', 'false');
    });
  });

  context('given the collapsible breadcrumb list menu', () => {
    beforeEach(() => {
      h.stories.load('Labs|Breadcrumbs/React', 'Collapsible');
      openDropdownMenu();
    });

    it('should set focus to the first list item link when the dropdown menu is toggled with a keypress', () => {
      cy.findAllByRole('menuitem')
        .first()
        .should('have.focus');
    });

    it('should toggle focus to the next list item on down keypress', () => {
      // toggle to the second item
      cy.focused().type('{downArrow}');
      cy.findAllByRole('menuitem')
        .eq(1)
        .should('have.focus');
      // toggle to the third item
      cy.focused().type('{downArrow}');
      cy.findAllByRole('menuitem')
        .eq(2)
        .should('have.focus');
      // roll toggle back to the first item
      cy.focused().type('{downArrow}');
      cy.findAllByRole('menuitem')
        .eq(0)
        .should('have.focus');
    });

    it('should toggle focus to the next list item on right keypress', () => {
      // toggle to the second item
      cy.focused().type('{rightArrow}');
      cy.findAllByRole('menuitem')
        .eq(1)
        .should('have.focus');
      // toggle to the third item
      cy.focused().type('{rightArrow}');
      cy.findAllByRole('menuitem')
        .eq(2)
        .should('have.focus');
      // roll toggle back to the first item
      cy.focused().type('{rightArrow}');
      cy.findAllByRole('menuitem')
        .eq(0)
        .should('have.focus');
    });

    it('should return focus to the button from the first list item', () => {
      cy.focused().type('{upArrow}');
      getDropdownButton().should('have.focus');
    });

    it('should toggle focus to the previous list item on up or left keypress', () => {
      // toggle to third item
      cy.focused().type('{downArrow}');
      cy.focused().type('{downArrow}');
      // toggle up to the second item
      cy.focused().type('{upArrow}');
      cy.findAllByRole('menuitem')
        .eq(1)
        .should('have.focus');

      // toggle to the first item
      cy.focused().type('{upArrow}');
      cy.findAllByRole('menuitem')
        .eq(0)
        .should('have.focus');
    });

    it('should toggle focus to the previous list item on left keypress', () => {
      // toggle to third item
      cy.focused().type('{downArrow}');
      cy.focused().type('{downArrow}');
      // toggle to the second item
      cy.focused().type('{leftArrow}');
      cy.findAllByRole('menuitem')
        .eq(1)
        .should('have.focus');
      // toggle to the first item
      cy.focused().type('{leftArrow}');
      cy.findAllByRole('menuitem')
        .eq(0)
        .should('have.focus');
    });
  });
});
