import * as h from '../helpers';

const getRadio = () => {
  return cy.get(`[type="radio"]`);
};

describe('Radio', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Radio/React/Left Label/Radio', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          cy.getByLabelText('E-mail').click();
        });

        it.only('should be checked', () => {
          getRadio().should('be.checked');
        });
      });
    });
  });

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
