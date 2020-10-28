import * as h from '../helpers';

describe('Radio Group', () => {
  before(() => {
    h.stories.visit();
  });
  ['Default', 'Alert', 'Error with Grow'].forEach(story => {
    context(`given the '${story}' story is rendered`, () => {
      beforeEach(() => {
        h.stories.load('Components/Inputs/Radio/React/Top Label/Radio Group', story);
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when clicking one radio and then selecting another radio', () => {
        beforeEach(() => {
          cy.findByLabelText('E-mail').click();
          cy.findByLabelText('Mail').click();
        });

        it('should one have one radio selected', () => {
          cy.findByLabelText('Mail').should('be.checked');
        });
      });
    });
  });
});
