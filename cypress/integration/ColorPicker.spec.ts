import * as h from '../helpers';

const getColorPicker = () => {
  return cy.get('[type="text"]');
};

const colorInputStory = 'Components|Inputs/Color Picker/Color Input/React/Top Label';
const colorPreviewStory = 'Components|Inputs/Color Picker/Color Preview/React/Top Label';

describe('ColorPicker', () => {
  describe('ColorInput', () => {
    before(() => {
      h.stories.visit();
    });
    ['Default', 'Alert', 'Error', 'Checked', 'Grow', 'Grow with Error'].forEach(story => {
      context(`given the '${story}' story is rendered`, () => {
        beforeEach(() => {
          h.stories.load(colorInputStory, story);
        });

        it('should not have any axe errors', () => {
          cy.checkA11y();
        });
      });
    });

    context('given the `Disabled` story is rendered', () => {
      beforeEach(() => {
        h.stories.load(colorInputStory, 'Disabled');
      });

      it('should not have any axe errors', () => {
        cy.checkA11y();
      });

      it('should be disabled', () => {
        getColorPicker().should('be.disabled');
      });
    });
  });
  describe('ColorPreview', () => {
    beforeEach(() => {
      h.stories.load(colorPreviewStory, 'Default');
    });

    it('should not have any axe errors', () => {
      cy.checkA11y();
    });
  });
});
