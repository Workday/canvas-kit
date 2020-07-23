import * as h from '../helpers';

const getColorInput = () => cy.get('[type="text"]');

const getColorPickerPopup = () => cy.get('[role=dialog]');

const expandHex = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(shorthandRegex, function(m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });
};

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
        cy.get('button').click();
      });

      it('should pass accessibility checks', () => {
        cy.checkA11y();
      });

      it('should be open', () => {
        getColorPickerPopup().should('be.visible');
      });

      context('when a swatch is clicked', () => {
        const color = '8660d1';
        beforeEach(() => {
          cy.get(`.wdc-color-picker--color-${color}`).click();
          cy.get('button').click();
        });

        it('should have check icon', () => {
          cy.get(`.wdc-color-picker--color-${color}`)
            .find('.wd-icon')
            .should('exist');
        });
      });

      context('when color reset is clicked', () => {
        beforeEach(() => {
          cy.get(`.wdc-color-picker--color-8660d1`).click();
          cy.get('button').click();
          cy.get('[data-testid="color-picker-reset"]').click();
        });

        it('should set the color picker value to the reset color', () => {
          cy.get('button').click();
          cy.get(`.wdc-color-picker--color-0875e1`)
            .find('.wd-icon')
            .should('exist');
        });
      });

      context('when custom color is entered', () => {
        beforeEach(() => {
          getColorInput().focus();
        });

        it('should set the selected color to input value', () => {
          getColorInput().type('#123123');
          getColorPickerPopup()
            .find('button')
            .last()
            .click();
          cy.get('button').click();
          getColorInput()
            .parent()
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
        const color = '8660d1';
        beforeEach(() => {
          cy.get(`.wdc-color-picker--color-${color}`).click();
        });

        it('should update the color input to the swatch color', () => {
          getColorInput().should('have.value', color.toUpperCase());
        });

        it('should have check icon', () => {
          getColorInput().click();
          cy.get(`.wdc-color-picker--color-${color}`)
            .find('.wd-icon')
            .should('exist');
        });
      });

      context('when color reset is clicked', () => {
        beforeEach(() => {
          cy.get(`.wdc-color-picker--color-8660d1`).click();
          getColorInput().click();
          cy.get('[data-testid="color-picker-reset"]').click();
        });

        it('should set the color picker value to the reset color', () => {
          getColorInput().should('have.value', '0875e1');
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
