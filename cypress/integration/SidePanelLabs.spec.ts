import * as h from '../helpers';

describe('Side Panel', () => {
  before(() => {
    h.stories.visit();
  });
  context(`given the 'Default' story is rendered`, () => {
    beforeEach(() => {
      h.stories.load('Labs|Side Panel/React', 'Default');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });
});
