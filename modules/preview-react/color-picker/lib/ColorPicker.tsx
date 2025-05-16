// import {colors} from '@workday/canvas-kit-react/tokens';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import * as React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {ResetButton} from './parts/ColorReset';
import {SwatchBook, SwatchBookColorObject} from './parts/SwatchBook';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface ColorPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The function called when the ColorPicker state changes.
   */
  onColorChange: (color: string) => void;
  /**
   * The value of the ColorPicker.
   */
  value?: string;
  /**
   * The array of colors to be rendered in the swatchbook.
   */
  colorSet?: string[] | SwatchBookColorObject[];
  /**
   * If true, render an input for entering a custom hex color.
   * @default false
   */
  showCustomHexInput?: boolean;
  /**
   * The label text of the custom hex input.
   * @default 'Custom Hex Color'
   */
  customHexInputLabel?: string;
  /**
   * The label of the custom hex color submit icon button.
   * @default 'Submit'
   */
  submitLabel?: string;
  /**
   * The function called when the submit icon is clicked.
   */
  onSubmitClick?: (event: React.FormEvent) => void;
  /**
   * The function called when the color rest button is selected.
   * It is required to be set for the reset button to render.
   */
  onColorReset?: (color: string) => void;
  /**
   * The color that the reset button resets to.
   * It is required to be set for the reset button to render.
   */
  resetColor?: string;
  /**
   * The label text of the reset button.
   * @default 'Reset'
   */
  resetLabel?: string;
}

const defaultColorSet = [
  base.blueberry600,
  base.grapeSoda600,
  base.pomegranate600,
  base.cinnamon600,
  base.cantaloupe600,
  base.sourLemon600,
  base.greenApple600,
  base.jewel600,

  base.blueberry500,
  base.grapeSoda500,
  base.pomegranate500,
  base.cinnamon500,
  base.cantaloupe500,
  base.sourLemon500,
  base.greenApple500,
  base.jewel500,

  base.blueberry400,
  base.grapeSoda400,
  base.pomegranate400,
  base.cinnamon400,
  base.cantaloupe400,
  base.sourLemon400,
  base.greenApple400,
  base.jewel400,

  base.blueberry300,
  base.grapeSoda300,
  base.pomegranate300,
  base.cinnamon300,
  base.cantaloupe300,
  base.sourLemon300,
  base.greenApple300,
  base.jewel300,

  base.blueberry200,
  base.grapeSoda200,
  base.pomegranate200,
  base.cinnamon200,
  base.cantaloupe200,
  base.sourLemon200,
  base.greenApple200,
  base.jewel200,

  base.blueberry100,
  base.grapeSoda100,
  base.pomegranate100,
  base.cinnamon100,
  base.cantaloupe100,
  base.sourLemon100,
  base.greenApple100,
  base.jewel100,

  base.blackPepper600,
  base.blackPepper400,
  base.blackPepper300,
  base.blackPepper100,
  base.frenchVanilla500,
  base.frenchVanilla400,
  base.frenchVanilla200,
  base.frenchVanilla100,
];

export const colorPickerStencil = createStencil({
  parts: {
    button: 'color-picker-button',
    form: 'color-picker-form',
    hexInput: 'color-picker-hex-input',
    inputWrapper: 'color-picker-input-wrapper',
  },
  base: ({buttonPart, formPart, hexInputPart, inputWrapperPart}) => ({
    width: px2rem(216),
    [formPart]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBlockStart: system.space.x4,
    },
    [inputWrapperPart]: {
      display: 'flex',
      flexDirection: 'column',
      margin: system.space.zero,
    },
    [buttonPart]: {
      alignSelf: 'flex-end',
    },
    [hexInputPart]: {
      width: px2rem(168),
    },
  }),
});

const isCustomColor = (colors: (string | SwatchBookColorObject)[], hexCode?: string) => {
  if (!hexCode) {
    return false;
  }

  const lowercaseHex = hexCode.toLowerCase();
  return !colors.some((color: string | SwatchBookColorObject) => {
    if (typeof color === 'string') {
      return color.toLowerCase() === lowercaseHex;
    } else {
      return color.value.toLowerCase() === lowercaseHex;
    }
  });
};

export const ColorPicker = ({
  colorSet = defaultColorSet,
  customHexInputLabel = 'Custom Hex Color',
  submitLabel = 'Submit',
  onColorChange,
  onColorReset,
  onSubmitClick,
  resetLabel = 'Reset',
  resetColor,
  value = '',
  showCustomHexInput = false,
  ...elemProps
}: ColorPickerProps) => {
  const [validHexValue, setValidHexValue] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [customHexValue, setCustomHexValue] = React.useState(
    isCustomColor(colorSet, value) ? value : ''
  );

  const onCustomHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHexValue(event.target.value);
    setValidHexValue('');
    setDisabled(true);
  };

  const onValidCustomHexChange = (validHexValue: string) => {
    setValidHexValue(validHexValue);
    setDisabled(false);
  };

  const onSubmit = (event: React.FormEvent) => {
    if (onSubmitClick) {
      onSubmitClick(event);
    }
    onColorChange(validHexValue);
    event.preventDefault(); // don't submit the form - default action is to reload the page
  };

  return (
    <div {...handleCsProp(elemProps, colorPickerStencil())}>
      {onColorReset && resetColor && (
        <ResetButton onClick={onColorReset} resetColor={resetColor} label={resetLabel} />
      )}
      <SwatchBook colors={colorSet} onSelect={onColorChange} value={value} />
      {showCustomHexInput && (
        <form onSubmit={onSubmit} {...colorPickerStencil.parts.form}>
          <FormField {...colorPickerStencil.parts.inputWrapper}>
            <FormField.Label>{customHexInputLabel}</FormField.Label>
            <FormField.Input
              as={ColorInput}
              onChange={onCustomHexChange}
              onValidColorChange={onValidCustomHexChange}
              value={customHexValue}
              showCheck={value === validHexValue || value === customHexValue}
              {...colorPickerStencil.parts.hexInput}
            />
          </FormField>
          <SecondaryButton
            aria-label={submitLabel}
            icon={checkIcon}
            type="submit"
            disabled={disabled}
            {...colorPickerStencil.parts.button}
          />
        </form>
      )}
    </div>
  );
};

ColorPicker.defaultColorSet = defaultColorSet;
