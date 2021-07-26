import * as h from '../helpers';

const getTextArea = () => {
  return cy.get(`textarea`);
};

describe('Text Area', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/TextArea/React', story);
      });

      it('should not have any axe errors', () => {
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
          getTextArea()
            .clear()
            .type('Test');
        });

        it('should reflect the text typed', () => {
          getTextArea().should('have.value', 'Test');
        });
      });
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/TextArea/React', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should be disabled', () => {
      getTextArea().should('be.disabled');
    });
  });

  context(`given the 'Placeholder' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/TextArea/React', 'Placeholder');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('should render a placeholder text', () => {
      getTextArea().should('have.attr', 'placeholder', 'Let us know how we did!');
    });

    it('should reflect the text typed', () => {
      getTextArea()
        .clear()
        .type('Test');
      getTextArea().should('have.value', 'Test');
    });
  });
});
