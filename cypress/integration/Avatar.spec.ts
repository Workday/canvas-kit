import * as h from '../helpers';

describe('Avatar', () => {
  before(() => {
    h.stories.visit();
  });

  context('given default avatar light is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar/React/Default', 'Light');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });

  context('given avatar button light is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar Button/React/Default', 'Light');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });

  context('given avatar button image is rendered', () => {
    beforeEach(() => {
      h.stories.load('Components/Indicators/Avatar/React/Avatar Button', 'Image');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
      cy.get('img').should('be.visible'); // wait for image to load
      cy.checkA11y();
    });
  });
});
