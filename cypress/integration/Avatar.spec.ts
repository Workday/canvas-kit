import * as h from '../helpers';

describe('Avatar', () => {
  before(() => {
    h.stories.visit();
  });

  context('given default avatar is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar', 'Basic');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });

  context('given avatar button light is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar', 'Button');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });

  context('given avatar button image is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar/Avatar', 'Image');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
      cy.get('img').should('be.visible'); // wait for image to load
      cy.checkA11y();
    });
  });
});
