import * as h from '../helpers';

const getCheckbox = () => {
  return cy.get(`[type="checkbox"]`);
};

describe('Checkbox', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Checkbox', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getCheckbox().click();
        });

        it('should be checked', () => {
          getCheckbox().should('be.checked');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Checkbox', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getCheckbox().should('be.disabled');
    });
  });

  context(`given the 'Indeterminate' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Checkbox', 'Indeterminate');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should have the correct attributes', () => {
      getCheckbox()
        .eq(1)
        .click();
      getCheckbox()
        .eq(0)
        .should('have.prop', 'indeterminate', true)
        .should('have.attr', 'aria-checked', 'mixed');
    });
  });
});
