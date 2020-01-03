import * as h from '../helpers';

const getSwitch = () => {
  return cy.get(`[type="checkbox"]`);
};

describe('Non-disabled Switch', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`Given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Switch/React/Top Label', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context('when the tab key is pressed', () => {
        beforeEach(() => {
          cy.tab();
        });
        it('should be the focused item on the page', () => {
          getSwitch().should('have.focus');
        });
      });

      context('when the switch is clicked', () => {
        beforeEach(() => {
          getSwitch().click();
        });
        it('should be checked', () => {
          getSwitch().should('be.checked');
        });
      });
    });
  });
});

describe('Disabled Switch', () => {
  before(() => {
    h.stories.visit();
  });
  context(`Given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Switch/React/Top Label', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
    it('should be disabled', () => {
      getSwitch().should('be.disabled');
    });
  });
});
