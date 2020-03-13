import * as h from '../helpers';

const getInput = () => {
  return cy.get(`input`);
};

describe('Form Field', () => {
  before(() => {
    h.stories.visit();
  });

  context(`given the Default story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Form Field/React', 'Default');
    });

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });

    context('when clicking on the label', () => {
      beforeEach(() => {
        cy.findByLabelText('Label').click();
      });

      it('should focus the input', () => {
        getInput().should('be.focused');
      });
    });
  });

  ['Hint Alert', 'Hint Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Form Field/React', story);
      });

      it('should pass accessibility and connect the input with the hint text', () => {
        cy.checkA11y();
        getInput().should('have.attr', 'aria-describedby');
      });
    });
  });

  context(`given the Label Required story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Components|Inputs/Form Field/React', 'Label Required');
    });

    it('should pass accessibility and connect the input with the hint text', () => {
      cy.get('abbr').should('have.attr', 'title', 'required');
    });
  });
});
