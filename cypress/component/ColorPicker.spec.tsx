import {Basic} from '../../modules/react/color-picker/stories/color-input/examples/Basic';
import {Caution} from '../../modules/react/color-picker/stories/color-input/examples/Caution';
import {Error} from '../../modules/react/color-picker/stories/color-input/examples/Error';
import {Checked} from '../../modules/react/color-picker/stories/color-input/examples/Checked';
import {Grow} from '../../modules/react/color-picker/stories/color-input/examples/Grow';
import {Disabled} from '../../modules/react/color-picker/stories/color-input/examples/Disabled';

import {Basic as BasicColorPreview} from '../../modules/react/color-picker/stories/color-preview/examples/Basic';

import {IconButtonPopup} from '../../modules/preview-react/color-picker/stories/examples/IconButtonPopup';
import {ColorInputPopup} from '../../modules/preview-react/color-picker/stories/examples/ColorInputPopup';
import {InputInteraction} from '../../modules/preview-react/color-picker/stories/examples/InputInteraction';

const getColorInput = () => cy.get('[type="text"]');
const getColorPickerPopup = () => cy.findByRole('dialog');
const getOpenButton = () => cy.findByLabelText('Select Background Color');
const getResetButton = () => cy.contains('button', 'Reset');
const getSubmitButton = () => cy.findByLabelText('Submit');
const getSwatch = (color: string) => cy.get(`div[data-color="${color}"]`);

const value = '000000';

describe('ColorInput', () => {
  [Basic, Caution, Error, Checked, Grow].forEach(Example => {
    context(`given the '${Example.name}' example is rendered`, () => {
      beforeEach(() => {
        cy.mount(<Example />);
      });

      it('should not have any axe errors', () => {
        // This component needs to be looked at for accessibility before doing a checka11y consistently
        // cy.checkA11y();
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

  context('given the `Disabled` example is rendered', () => {
    beforeEach(() => {
      cy.mount(<Disabled />);
    });

    it('should not have any axe errors', () => {
      // This component needs to be looked at for accessibility before doing a checka11y consistently
      // cy.checkA11y();
    });

    it('should be disabled', () => {
      getColorInput().should('be.disabled');
    });
  });
});

describe('ColorPreview', () => {
  context(`given the 'Basic' story is rendered`, () => {
    beforeEach(() => {
      cy.mount(<BasicColorPreview />);
    });

    it('should not have any axe errors', () => {
      // This component needs to be looked at for accessibility before doing a checka11y consistently
      // cy.checkA11y();
    });
  });
});

describe('ColorPicker', () => {
  before(() => {
    cy.viewport(800, 1000);
  });

  describe('Icon button ColorPicker Popup', () => {
    context('when the SecondaryButton is clicked', () => {
      beforeEach(() => {
        cy.mount(<IconButtonPopup />);
        getOpenButton().click();
      });

      it('should not have any axe errors', () => {
        // This component needs to be looked at for accessibility before doing a checka11y consistently
        // cy.checkA11y();
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
          getSwatch(color).find('.wd-icon').should('exist');
        });

        context('when color reset is clicked', () => {
          const resetColor = '#0875e1';

          beforeEach(() => {
            getResetButton().click();
            getOpenButton().click();
          });

          it('should set the color picker value to the reset color', () => {
            getSwatch(resetColor!).find('.wd-icon').should('exist');
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
          getSwatch(customColor).find('.wd-icon').should('exist');
        });
      });
    });
  });

  describe('Color Input ColorPicker Popup', () => {
    context('when the input is focused', () => {
      beforeEach(() => {
        cy.mount(<ColorInputPopup />);
        getColorInput().focus();
      });

      it('should not have any axe errors', () => {
        // This component needs to be looked at for accessibility before doing a checka11y consistently
        // cy.checkA11y();
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
          getSwatch(color).find('.wd-icon').should('exist');
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
      cy.mount(<InputInteraction />);
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
