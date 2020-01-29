import * as h from '../helpers';

describe('Radio Group', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error with Grow'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components|Inputs/Radio/React/Top Label/Radio Group', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when clicking one radio and then selecting another radio', () => {
        beforeEach(() => {
          cy.getByLabelText('E-mail').click();
          cy.getByLabelText('Mail').click();
        });

        it('should one have one radio selected', () => {
          cy.getByLabelText('Mail').should('be.checked');
        });
      });
    });
  });
});
