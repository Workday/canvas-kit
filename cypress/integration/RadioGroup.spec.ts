import * as h from '../helpers';

const getInidivualRadio = (index: number) => {
  return cy
    .get('div[name="contact"]')
    .children()
    .eq(index)
    .children()
    .eq(0)
    .children()
    .eq(0);
};

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
          getInidivualRadio(0).click();
          getInidivualRadio(1).click();
        });

        it('should one have one radio selected', () => {
          getInidivualRadio(1).should('be.checked');
        });
      });
    });
  });
});
