import * as h from '../helpers';

function getBreadcrumbsNav() {
  return cy.findByRole('navigation');
}

function getBreadcrumbsList() {
  return cy.findByRole('list');
}

function getAllBreadcrumbsLink(number?: number) {
  return number ? cy.findAllByRole('link').eq(number) : cy.findAllByRole('link');
}

function getDropdownButton() {
  return cy.findByLabelText('More links');
}

function getDropdownMenu() {
  return cy.findByRole('menu');
}

function getDropdownMenuItem(number?: number) {
  return number ? cy.findAllByRole('menuitem').eq(number) : cy.findAllByRole('menuitem');
}

function openDropdownMenu() {
  const dropdownButton = getDropdownButton();
  dropdownButton.focus();
  dropdownButton.realType('{enter}');
}

describe('Breadcrumbs', () => {
  before(() => {
    h.stories.visit();
  });

  context('given the [Components/Navigation/Breadcrumbs, Basic] example is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Navigation/Breadcrumbs', 'Basic');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have an element with a role of "navigation"', () => {
      getBreadcrumbsNav().should('be.visible');
    });

    it('should have an element with a label of "Breadcrumbs"', () => {
      cy.findByLabelText('Breadcrumbs').should('be.visible');
    });

    it('should have a role of "list" on the <ul> element', () => {
      getBreadcrumbsList().should('be.visible');
    });

    it('should have list item elements inside the "list"', () => {
      getBreadcrumbsList()
        .get('li')
        .should('be.visible');
    });

    it('should have "data-id" for list items', () => {
      getBreadcrumbsList()
        .find('li')
        .each($link => {
          expect($link).to.have.attr('data-id');
        });
    });

    context('when a breadcrumb link is focused', () => {
      it('should show tooltips for truncated link items', () => {
        getAllBreadcrumbsLink(3)
          .focus()
          .then($link => {
            const text = $link.text();
            cy.findByRole('tooltip').should('contain', text);
          });
      });

      it('should not show tooltips for not truncated link items', () => {
        getAllBreadcrumbsLink(1).focus();
        cy.findByRole('tooltip').should('not.exist');
      });

      context('when the tab key is pressed', () => {
        beforeEach(() => {
          cy.tab();
        });

        it('should move focus to the next link', () => {
          getAllBreadcrumbsLink(1).focus();
          cy.tab();
          getAllBreadcrumbsLink(2).should('have.focus');
        });
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

  context(
    'given the [Components/Navigation/Breadcrumbs, Overflow Breadcrumbs] example is rendered',
    () => {
      beforeEach(() => {
        h.stories.load('Components/Navigation/Breadcrumbs', 'Overflow Breadcrumbs');
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
        beforeEach(() => {
          getDropdownButton().click();
        });

        it("should toggle the button's aria-expanded attribute to true", () => {
          getDropdownButton().should('have.attr', 'aria-expanded', 'true');
        });
      });
    }
  );

  context(
    'given the [Components/Navigation/Breadcrumbs, Overflow Breadcrumbs] menu is rendered',
    () => {
      beforeEach(() => {
        h.stories.load('Components/Navigation/Breadcrumbs', 'Overflow Breadcrumbs');
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
          getDropdownMenuItem(0).should('have.focus');
        });
      });

      context('when the first menu item is focused', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        it('should toggle focus to the second menu item on down keypress', () => {
          getDropdownMenuItem(1).should('have.focus');
        });
      });

      context('when the last menu item is focused', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        it('should roll the focus back to the first menu item on down keypress', () => {
          cy.focused().realType('{downarrow}');
          cy.focused().realType('{downarrow}');
          cy.focused().realType('{downarrow}');
          getDropdownMenuItem(0).should('have.focus');
        });
      });

      context('when the down arrow key is pressed on the dropdown menu', () => {
        beforeEach(() => {
          cy.focused().realType('{downarrow}');
        });

        it('should toggle focus to the next menu item on down keypress', () => {
          getDropdownMenuItem(1).should('have.focus');
        });
      });

      context('when the up arrow key is pressed on the dropdown menu', () => {
        beforeEach(() => {
          // set focus to the second menuitem
          cy.focused().realType('{downarrow}');
        });

        it('should toggle focus to the previous list item', () => {
          cy.focused().realType('{uparrow}');
          getDropdownMenuItem(0).should('have.focus');
        });

        it('should return focus from the first menu item to the last', () => {
          cy.focused().realType('{uparrow}');
          cy.focused().realType('{uparrow}');
          getDropdownMenuItem(3).should('have.focus');
        });
      });

      context('when the escape key is pressed on the dropdown menu', () => {
        it('should return focus to the dropdown menu button', () => {
          cy.focused().realType('{esc}');
          getDropdownButton().should('have.focus');
        });
      });
    }
  );
});
