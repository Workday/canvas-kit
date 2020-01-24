import * as h from '../helpers';

const getTextArea = () => {
  return cy.get(`textarea`);
};

describe('Text Area', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/TextArea/React/Top Label', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when clicked', () => {
        beforeEach(() => {
          getTextArea().click();
        });

        it('should be focused', () => {
          getTextArea().should('be.focused');
        });
      });

      context('when text is entered', () => {
        beforeEach(() => {
          getTextArea().type('Test');
        });

        it('should reflect the text typed', () => {
          getTextArea().should('have.value', 'Test');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/TextArea/React/Top Label', 'Disabled');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getTextArea().should('be.disabled');
    });
  });
});
