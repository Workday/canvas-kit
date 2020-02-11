import * as h from '../helpers';

const getSelect = () => {
  return cy.get(`select`);
};

const selectedValue = 'mail';

describe('Select', () => {
  before(() => {
    h.stories.visit();
  });
  ['Plain', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Select/React/Top Label', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context(`when '${selectedValue}' is selected`, () => {
        beforeEach(() => {
          getSelect().select(selectedValue);
        });

        it('should be focused', () => {
          getSelect().should('be.focused');
        });

        it(`should have a value of '${selectedValue}'`, () => {
          getSelect().should('have.value', selectedValue);
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Select/React/Top Label', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getSelect().should('be.disabled');
    });
  });
});
