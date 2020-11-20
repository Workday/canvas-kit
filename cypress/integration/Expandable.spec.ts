import * as h from '../helpers';

const getToggle = () => {
  return cy.get('button');
};

const getRegion = () => {
  return cy.get(`[role="region"]`);
};

describe('Expandable', () => {
  before(() => {
    h.stories.visit();
  });
  context(`given the 'Default' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Containers/Expandable/React', 'Default');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should not have the child region visible', () => {
      getRegion().should('not.be.visible');
    });

    context('when expanded', () => {
      beforeEach(() => {
        getToggle().click();
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
        getRegion().should('have.focus');
      });

      it('should be expanded', () => {
        getRegion().should('be.visible');
      });
    });
  });
});
