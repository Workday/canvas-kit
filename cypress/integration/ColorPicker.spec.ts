import * as h from '../helpers';

const getColorPicker = () => {
  return cy.get('[type="text"]');
};

const colorInputStory = 'Components|Inputs/Color Picker/Color Input/React/Top Label';
const colorPreviewStory = 'Components|Inputs/Color Picker/Color Preview/React/Top Label';
const value = '000000';

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

        it('should pass accessibility checks', () => {
          cy.checkA11y();
        });

        context('when clicked', () => {
          beforeEach(() => {
            getColorPicker().click();
          });

          it('should be focused', () => {
            getColorPicker().should('be.focused');
          });
        });

        context('when provided a 6 digit hex value', () => {
          beforeEach(() => {
            getColorPicker().type(value);
          });

          it('should reflect the hex value', () => {
            getColorPicker().should('have.value', value);
          });
        });

        context('when provided a 3 digit hex', () => {
          beforeEach(() => {
            getColorPicker().type('000');
          });

          it('should reflect the hex value', () => {
            getColorPicker().should('have.value', '000');
          });
        });

        context('when provided a hex with a hash', () => {
          beforeEach(() => {
            getColorPicker().type('#000000');
          });

          it('should strip the hash from the hex value', () => {
            getColorPicker().should('have.value', value);
          });
        });

        context('when provided a hex with more than 6 characters', () => {
          beforeEach(() => {
            getColorPicker().type('#123456789');
          });

          it('should truncate the value to a length of 6', () => {
            getColorPicker().should('have.value', '123456');
          });
        });
      });
    });

    context('given the `Disabled` story is rendered', () => {
      beforeEach(() => {
        h.stories.load(colorInputStory, 'Disabled');
      });

      it('should pass accessibility checks', () => {
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

    it('should pass accessibility checks', () => {
      cy.checkA11y();
    });
  });
});
