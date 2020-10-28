import * as h from '../helpers';

const getCheckbox = () => {
  return cy.get(`[type="checkbox"]`);
};

describe('Checkbox', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Checkbox/React/Top Label', story);
      });

      it('should pass accessibility checks', () => {
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
      h.stories.load('Components/Inputs/Checkbox/React/Top Label', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getCheckbox().should('be.disabled');
    });
  });
});
