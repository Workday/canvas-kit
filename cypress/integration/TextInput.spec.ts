import * as h from '../helpers';

const getTextInput = () => {
  return cy.get(`[type="text"]`);
};

describe('TextInput', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Text Input/React/Top Label', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getTextInput().click();
        });

        it('should be focused', () => {
          getTextInput().should('be.focused');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Text Input/React/Top Label', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getTextInput().should('be.disabled');
    });
  });
});
