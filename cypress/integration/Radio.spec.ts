import * as h from '../helpers';

describe('Radio', () => {
  before(() => {
    h.stories.visit();
  });
  ['Basic', 'Alert', 'Error'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Radio/React', story);
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      context(`when the "Gluten free" radio button is clicked`, () => {
        beforeEach(() => {
          cy.findByLabelText('Gluten free').click();
        });

        it(`the "Gluten free" radio button should be checked`, () => {
          cy.findByLabelText('Gluten free').should('be.checked');
        });
      });

      context(
        `when clicking the "Gluten free" radio button and then clicking the "Thin" radio button`,
        () => {
          beforeEach(() => {
            cy.findByLabelText('Gluten free').click();
            cy.findByLabelText('Thin').click();
          });

          it(`the "Gluten free" radio button should not be checked`, () => {
            cy.findByLabelText('Gluten free').should('not.be.checked');
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
      h.stories.load('Components/Inputs/Radio/React', 'Disabled');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });

    it(`the "Gluten free (sold out)" radio button should be disabled`, () => {
      cy.findByLabelText('Gluten free (sold out)').should('be.disabled');
    });
  });
});
