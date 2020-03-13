import * as h from '../helpers';

const getColorPicker = () => {
  return cy.get('[type="text"]');
};

const expandHex = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expandHex(hex));
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
};

const colorInputStory = 'Components|Inputs/Color Picker/Color Input/React/Top Label';
const colorPreviewStory = 'Components|Inputs/Color Picker/Color Preview/React/Top Label';
const colorPickerStory = 'Labs/Color Picker/React';
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
  describe('ColorPicker', () => {
    before(() => {
      h.stories.visit();
      cy.viewport(800, 1000);
    });

    context('given the color picker is open', () => {
      beforeEach(() => {
        h.stories.load(colorPickerStory, 'Popup w/ Custom Target');
        cy.get('[data-testid="color-picker-selected-color-button"]').click();
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      context('when provided a custom hex value', () => {
        beforeEach(() => {
          cy.get(`input`)
            .click()
            .type('abc{enter}');
          cy.get('[data-testid="color-picker-selected-color-button"]').click();
        });

        it('should reflect the custom value', () => {
          cy.get(`input`).should('have.value', 'AABBCC');
        });

        it('should set the color picker value to the input color', () => {
          cy.get('[data-testid="color-picker-selected-color-button-swatch"]').should(
            'have.css',
            'background-color',
            hexToRgb('AABBCC')
          );
        });
      });

      context('when a swatch is clicked', () => {
        const color = 'f31167';
        beforeEach(() => {
          cy.get(`.wdc-color-picker--color-${color}`).click();
          cy.get('[data-testid="color-picker-selected-color-button"]').click();
        });

        it('should have active state', () => {
          cy.get(`.wdc-color-picker--color-${color}`).should('have.css', 'box-shadow');
        });

        it('should have check icon', () => {
          cy.get(`.wdc-color-picker--color-${color}`).find('.wd-icon');
        });

        it('should set the color picker value to the swatch color', () => {
          cy.get('[data-testid="color-picker-selected-color-button-swatch"]').should(
            'have.css',
            'background-color',
            hexToRgb(color)
          );
        });
      });

      context('when color reset is clicked', () => {
        const resetColor = hexToRgb('0875e1');
        beforeEach(() => {
          cy.get('[data-testid="color-picker-reset"]').click();
          cy.get('[data-testid="color-picker-selected-color-button"]').click();
        });

        it('should set the color picker value to the reset color', () => {
          cy.get('[data-testid="color-picker-selected-color-button-swatch"]').should(
            'have.css',
            'background-color',
            resetColor
          );
        });
      });
    });
  });
});
