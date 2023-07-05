import * as h from '../helpers';

describe('Radio Preview', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Preview/Inputs/Radio', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context(`when the "Gluten free" radio button is clicked`, () => {
        beforeEach(() => {
          cy.findByLabelText('Gluten Free').click();
        });

        it(`the "Gluten Free" radio button should be checked`, () => {
          cy.findByLabelText('Gluten Free').should('be.checked');
        });
      });

      context(
        `when clicking the "Gluten Free" radio button and then clicking the "Thin" radio button`,
        () => {
          beforeEach(() => {
            cy.findByLabelText('Gluten Free').click();
            cy.findByLabelText('Thin').click();
          });

          it(`the "Gluten Free" radio button should not be checked`, () => {
            cy.findByLabelText('Gluten Free').should('not.be.checked');
          });

          it(`the "Thin" radio button should be checked`, () => {
            cy.findByLabelText('Thin').should('be.checked');
          });
        }
      );
    });
  });

  context(`given the 'Disabled' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Preview/Inputs/Radio', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it(`the "Gluten Free (No longer Available)" radio button should be disabled`, () => {
      cy.findByLabelText('Gluten Free (No longer Available)').should('be.disabled');
    });
  });
});
