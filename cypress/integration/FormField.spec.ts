import * as h from '../helpers';

const getInput = () => {
  return cy.get(`input`);
};

describe('Form Field', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the Basic story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Form Field/React', 'Basic');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    context('when clicking on the label', () => {
      beforeEach(() => {
        getInput().click();
      });

      it('should focus the input', () => {
        getInput().should('be.focused');
      });
    });
  });

  ['Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Form Field/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should connect the input with the hint text', () => {
        getInput().should('have.attr', 'aria-describedby');
      });
    });
  });

  context(`given the Required story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components/Inputs/Form Field/React', 'Required');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it('the asterisk should a title attribute set to "required"', () => {
      cy.get('abbr').should('have.attr', 'title', 'required');
    });
  });
});
