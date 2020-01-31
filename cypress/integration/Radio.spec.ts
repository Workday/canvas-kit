import * as h from '../helpers';

const getRadio = () => {
  return cy.get(`[type="radio"]`);
};

describe('Radio', () => {
  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Radio/React/Left Label/Radio', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getRadio().should('be.disabled');
    });
  });
});
