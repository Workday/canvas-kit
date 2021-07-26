import * as h from '../helpers';

const getTextInput = () => {
  return cy.get(`[type="text"]`);
};

describe('TextInput', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Text Input/React', story);
      });

      it('should not have any axe errors', () => {
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

      context('when text is entered', () => {
        beforeEach(() => {
          getTextInput()
            .clear()
            .type('Test');
        });

        it('should reflect the text typed', () => {
          getTextInput().should('have.value', 'Test');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Text Input/React', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getTextInput().should('be.disabled');
    });
  });

  context(`given the 'Placeholder' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Text Input/React', 'Placeholder');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render a placeholder text', () => {
      getTextInput().should('have.attr', 'placeholder', 'user@email.com');
    });

    it('should reflect the text typed', () => {
      getTextInput()
        .clear()
        .type('Test');
      getTextInput().should('have.value', 'Test');
    });
  });
});
