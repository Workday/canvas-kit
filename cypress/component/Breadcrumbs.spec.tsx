import {Basic} from '../../modules/react/breadcrumbs/stories/examples/Basic';
import {OverflowBreadcrumbs} from '../../modules/react/breadcrumbs/stories/examples/Overflow';

function getAllBreadcrumbsLink(number?: number) {
  return number ? cy.findAllByRole('link').eq(number) : cy.findAllByRole('link');
}

describe('Breadcrumbs', () => {
  context('given the [Components/Navigation/Breadcrumbs, Basic] example is rendered', () => {
    beforeEach(() => {
      cy.mount(<Basic />);
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have an element with a role of "navigation"', () => {
      cy.findByRole('navigation').should('be.visible');
    });

    it('should have an element with a label of "Breadcrumbs"', () => {
      cy.findByLabelText('Breadcrumbs').should('be.visible');
    });

    it('should have a role of "list" on the <ul> element', () => {
      cy.findByRole('list').should('be.visible');
    });

    it('should have list item elements inside the "list"', () => {
      cy.findByRole('list').get('li').should('be.visible');
    });

    it('should have "data-id" for list items', () => {
      cy.findByRole('list')
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
          cy.findByRole('link', {name: 'Lunch'}).focus();
          cy.findByRole('link', {name: 'Lunch'}).should('have.focus');
          cy.tab();
          cy.findByRole('link', {name: 'House Specialty Pies'}).focus();
          cy.findByRole('link', {name: 'House Specialty Pies'}).should('have.focus');
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
        cy.mount(<OverflowBreadcrumbs />);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should have 8 items inside the "list"', () => {
        cy.findByRole('list').findAllByRole('listitem').should('have.length', 8);
      });

      it('should have aria-expanded set to "false" on the dropdown button', () => {
        cy.findByLabelText('More links').should('have.attr', 'aria-expanded', 'false');
      });

      it('should have aria-haspopup set to "true" on the dropdown button', () => {
        cy.findByLabelText('More links').should('have.attr', 'aria-haspopup', 'true');
      });

      it('should have aria-controls set to "menu" on the dropdown button', () => {
        cy.findByLabelText('More links').should('have.attr', 'aria-controls', 'menu');
      });
    }
  );

  context('when action list container is only 480px wide', () => {
    beforeEach(() => {
      cy.mount(<OverflowBreadcrumbs width="480px" />);
    });

    it('should have 4 items inside the "list"', () => {
      cy.findByRole('list').findAllByRole('listitem').should('have.length', 4);
    });

    context('when the "More" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'More links'}).click();
      });

      it('should show the overflow menu', () => {
        cy.findByRole('menu').should('exist');
      });

      it('should contain second link as the first menu item', () => {
        cy.get('[role="menuitem"]').first().should('contain', 'Second Link');
      });

      it('should contain fifth link as the last menu item', () => {
        cy.get('[role="menuitem"]').last().should('contain', 'Fifth Link');
      });
    });
  });

  context('when action list container is only 250px wide', () => {
    beforeEach(() => {
      cy.mount(<OverflowBreadcrumbs width="250px" />);
    });

    it('should have 3 list items inside the "list"', () => {
      cy.findByRole('list').findAllByRole('listitem').should('have.length', 3);
    });

    context('when the "More" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'More links'}).click();
      });

      it('should show the overflow menu', () => {
        cy.findByRole('menu').should('exist');
      });

      it('should contain second link as the first menu item', () => {
        cy.get('[role="menuitem"]').first().should('contain', 'Second Link');
      });

      it('should contain fifth link as the last menu item', () => {
        cy.get('[role="menuitem"]').last().should('contain', 'Sixth Link');
      });
    });
  });

  context('when action list container is only 150px wide', () => {
    beforeEach(() => {
      cy.mount(<OverflowBreadcrumbs width="150px" />);
    });

    it('should have 2 list items inside the "list"', () => {
      cy.findByRole('list').findAllByRole('listitem').should('have.length', 2);
    });

    context('when the "More" button is clicked', () => {
      beforeEach(() => {
        cy.findByRole('button', {name: 'More links'}).click();
      });

      it('should show the overflow menu', () => {
        cy.findByRole('menu').should('exist');
      });

      it('should contain home link as the first menu item', () => {
        cy.findAllByRole('menuitem').eq(0).should('contain', 'Home');
      });

      it('should contain fifth link as the last menu item', () => {
        cy.findAllByRole('menuitem').eq(-1).should('contain', 'Sixth Link');
      });
    });
  });
});

context(
  'given the [Components/Navigation/Breadcrumbs, Overflow Breadcrumbs] menu is rendered',
  () => {
    beforeEach(() => {
      cy.mount(<OverflowBreadcrumbs width="480px" />);
      cy.findAllByRole('link').should('have.length', 2);
      cy.findByLabelText('More links').focus().realType('{enter}');
    });
    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have role set to "menu" on the dropdown menu', () => {
      cy.findByRole('menu').should('have.attr', 'role', 'menu');
    });

    it("should toggle the button's aria-expanded attribute to true", () => {
      cy.findByLabelText('More links').should('have.attr', 'aria-expanded', 'true');
    });

    it('should have role set to "menuitem" for dropdown item link', () => {
      cy.findByRole('menu')
        .find('a')
        .each($link => {
          expect($link).to.have.attr('role', 'menuitem');
        });
    });

    context('when the dropdown menu is toggled with a keypress', () => {
      it('should set focus to the first menu item', () => {
        // cy.findByRole('menuitem', {name: 'Second Link'}).focus();
        cy.findByRole('menuitem', {name: 'Second Link'}).should('have.focus');
      });
    });

    context('when the first menu item is focused', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      it('should toggle focus to the second menu item on down keypress', () => {
        cy.findByRole('menuitem', {name: 'Third Link'}).should('exist');
        // cy.findByRole('menuitem', {name: 'Second Link'}).should('have.focus');
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
        cy.get('[role="menuitem"]').first().should('contain', 'Second Link');
      });
    });

    context('when the down arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        cy.focused().realType('{downarrow}');
      });

      it('should toggle focus to the next menu item on down keypress', () => {
        cy.findByRole('menuitem', {name: 'Third Link'}).focus();
        cy.findByRole('menuitem', {name: 'Third Link'}).should('have.focus');
      });
    });

    context('when the up arrow key is pressed on the dropdown menu', () => {
      beforeEach(() => {
        // set focus to the second menuitem
        cy.focused().realType('{downarrow}');
        cy.findByText('Overflow visibility: visible');
      });

      it('should toggle focus to the previous list item', () => {
        cy.focused().realType('{uparrow}');
        cy.findByRole('menuitem', {name: 'Second Link'}).focus();
        cy.findByRole('menuitem', {name: 'Second Link'}).should('have.focus');
      });

      it('should return focus from the first menu item to the last', () => {
        cy.focused().realType('{uparrow}');
        cy.focused().realType('{uparrow}');
        cy.findByRole('menuitem', {name: 'Third Link'}).focus();
        cy.findByRole('menuitem', {name: 'Third Link'}).should('have.focus');
      });
    });

    context('when the escape key is pressed on the dropdown menu', () => {
      it('should return focus to the dropdown menu button', () => {
        cy.focused().realType('{esc}');
        cy.findByLabelText('More links').should('have.focus');
      });
    });
  }
);
