import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {defaultColorSet} from './defaultColorSet';
import {ResetButton} from './parts/ColorReset';
import {SwatchBook, SwatchBookColorObject} from './parts/SwatchBook';

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
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      marginBlockStart: cssVar(system.gap.md, system.space.x4),
    },
    [inputWrapperPart]: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
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
