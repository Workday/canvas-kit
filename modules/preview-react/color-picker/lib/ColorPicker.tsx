import {checkIcon} from '@workday/canvas-system-icons-web';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import * as React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';

import {ResetButton} from './parts/ColorReset';
import {SwatchBook, SwatchBookColorObject} from './parts/SwatchBook';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

const defaultColorSet = {
  blueberry600: '#004387',
  grapeSoda600: '#7c3882',
  pomegranate600: '#99003a',
  cinnamon600: '#a31b12',
  cantaloupe600: '#c06c00',
  sourLemon600: '#bd9100',
  greenApple600: '#217a37',
  jewel600: '#156973',

  blueberry500: '#005cb9',
  grapeSoda500: '#97499e',
  pomegranate500: '#c70550',
  cinnamon500: '#de2e21',
  cantaloupe500: '#f38b00',
  sourLemon500: '#ebb400',
  greenApple500: '#319c4c',
  jewel500: '#1a818c',

  blueberry400: '#0875e1',
  grapeSoda400: '#c860d1',
  pomegranate400: '#f31167',
  cinnamon400: '#ff5347',
  cantaloupe400: '#ffa126',
  sourLemon400: '#ffc629',
  greenApple400: '#43c463',
  jewel400: '#1ea4b3',

  blueberry300: '#40a0ff',
  grapeSoda300: '#de8ae6',
  pomegranate300: '#ff5c9a',
  cinnamon300: '#ff867d',
  cantaloupe300: '#ffbc63',
  sourLemon300: '#ffda61',
  greenApple300: '#5fe380',
  jewel300: '#44c8d7',

  blueberry200: '#a6d2ff',
  grapeSoda200: '#fac0ff',
  pomegranate200: '#ffbdd6',
  cinnamon200: '#fcc9c5',
  cantaloupe200: '#fcd49f',
  sourLemon200: '#ffecab',
  greenApple200: '#acf5be',
  jewel200: '#acecf3',

  blueberry100: '#d7eafc',
  grapeSoda100: '#feebff',
  pomegranate100: '#ffebf3',
  cinnamon100: '#ffefee',
  cantaloupe100: '#ffeed9',
  sourLemon100: '#fff9e6',
  greenApple100: '#ebfff0',
  jewel100: '#ebfdff',

  blackPepper600: '#000000',
  blackPepper400: '#333333',
  blackPepper300: '#494949',
  blackPepper100: '#787878',
  frenchVanilla500: '#a6a6a6',
  frenchVanilla400: '#bdbdbd',
  frenchVanilla200: '#ebebeb',
  frenchVanilla100: '#ffffff',
};

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
  colorSet = Object.values(defaultColorSet),
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
