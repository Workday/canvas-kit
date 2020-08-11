import * as h from '../helpers';

function getBreadcrumbsNav() {
  return cy.findByRole('navigation');
}

function getBreadcrumbsList() {
  return cy.findByRole('list');
}

function getBreadcrumbsDropdownButton() {
  return cy.findByLabelText('more links');
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

    it('should have truncated items with tooltips', () => {
      cy.findAllByRole('link').last($link => {
        const linkText = $link.text();
        $link.focus();
        cy.findByRole('tooltip').should('contain', linkText);
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
      const dropdownButton = getBreadcrumbsDropdownButton();
      dropdownButton.should('have.attr', 'aria-expanded', 'false');
      dropdownButton.should('have.attr', 'aria-haspopup', 'true');
      dropdownButton.should('have.attr', 'aria-controls', 'menu');
    });

    it('should toggle aria-expanded on the dropdown button', () => {
      getBreadcrumbsDropdownButton().click();
      getBreadcrumbsDropdownButton().should('have.attr', 'aria-expanded', 'true');
      getBreadcrumbsDropdownButton().click();
      getBreadcrumbsDropdownButton().should('have.attr', 'aria-expanded', 'false');
    });
  });
});
