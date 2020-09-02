import * as h from '../helpers';

const getColorInput = () => cy.get('[type="text"]');
const getColorPickerPopup = () => cy.findByRole('dialog');
const getOpenButton = () => cy.findByLabelText('Select Background Color');
const getResetButton = () => cy.contains('button', 'Reset');
const getSubmitButton = () => cy.findByLabelText('Submit');
const getSwatch = (color: string) => cy.get(`div[color="${color}"]`);

const colorInputStory = 'Components|Inputs/Color Picker/Color Input/React/Top Label';
const colorPreviewStory = 'Components|Inputs/Color Picker/Color Preview/React/Top Label';
const colorPickerStory = 'Labs/Color Picker/React';
const value = '000000';

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
          getColorInput().click();
        });

        it('should be focused', () => {
          getColorInput().should('be.focused');
        });
      });

      context('when provided a 6 digit hex value', () => {
        beforeEach(() => {
          getColorInput().type(value);
        });

        it('should reflect the hex value', () => {
          getColorInput().should('have.value', value);
        });
      });

      context('when provided a 3 digit hex', () => {
        beforeEach(() => {
          getColorInput().type('000');
        });

        it('should reflect the hex value', () => {
          getColorInput().should('have.value', '000');
        });
      });

      context('when provided a hex with a hash', () => {
        beforeEach(() => {
          getColorInput().type('#000000');
        });

        it('should strip the hash from the hex value', () => {
          getColorInput().should('have.value', value);
        });
      });

      context('when provided a hex with more than 6 characters', () => {
        beforeEach(() => {
          getColorInput().type('#123456789');
        });

        it('should truncate the value to a length of 6', () => {
          getColorInput().should('have.value', '123456');
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
      getColorInput().should('be.disabled');
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

  describe('Icon Button ColorPicker Popup', () => {
    context('when the IconButton is clicked', () => {
      beforeEach(() => {
        h.stories.load(colorPickerStory, 'Icon Button Popup');
        getOpenButton().click();
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      it('should be open', () => {
        getColorPickerPopup().should('be.visible');
      });

      context('when a swatch is clicked', () => {
        const color = '#ff5347';

        beforeEach(() => {
          getSwatch(color).click();
          getOpenButton().click();
        });

        it('should have check icon', () => {
          getSwatch(color)
            .find('.wd-icon')
            .should('exist');
        });

        context('when color reset is clicked', () => {
          const resetColor = '#0875e1';

          beforeEach(() => {
            getResetButton().click();
            getOpenButton().click();
          });

          it('should set the color picker value to the reset color', () => {
            getSwatch(resetColor!)
              .find('.wd-icon')
              .should('exist');
          });
        });
      });

      context('when a custom color is submitted', () => {
        const customColor = '#123123';

        beforeEach(() => {
          getColorInput().focus();
          getColorInput().type(customColor);
          getSubmitButton().click();
        });

        it('should set the selected color to input value', () => {
          getOpenButton().click();
          getSwatch(customColor)
            .find('.wd-icon')
            .should('exist');
        });
      });
    });
  });

  describe('Color Input ColorPicker Popup', () => {
    context('when the input is focused', () => {
      beforeEach(() => {
        h.stories.load(colorPickerStory, 'Color Input Popup');
        getColorInput().focus();
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      it('should be open', () => {
        getColorPickerPopup().should('be.visible');
      });

      context('when a swatch is clicked', () => {
        const color = '#ff5347';

        beforeEach(() => {
          getSwatch(color).click();
        });

        it('should update the color input to the swatch color', () => {
          getColorInput().should('have.value', color.slice(1).toUpperCase());
        });

        it('should have check icon', () => {
          getColorInput().focus();
          getSwatch(color)
            .find('.wd-icon')
            .should('exist');
        });

        context('when color reset is clicked', () => {
          const resetColorValue = '0875e1';

          beforeEach(() => {
            getColorInput().focus();
            getResetButton().click();
          });

          it('should set the color picker value to the reset color', () => {
            getColorInput().should('have.value', resetColorValue);
          });
        });
      });
    });
  });

  context('when the InputInteraction story is loaded', () => {
    beforeEach(() => {
      h.stories.load('Testing|React/Labs/Color Picker', 'InputInteraction');
    });

    context('when input is entered into the color input and user hits enter', () => {
      beforeEach(() => {
        cy.findByLabelText('Custom Hex Color').type('111{enter}');
      });

      it('should not enter a newline in the textarea', () => {
        cy.findByLabelText('Text Area').should('have.value', '');
      });
    });
  });
});
