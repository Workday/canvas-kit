import styled from '@emotion/styled';
import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {checkIcon} from '@workday/canvas-system-icons-web';

import {ResetButton} from './parts/ColorReset';
import {SwatchBook, SwatchBookColorObject} from './parts/SwatchBook';

export interface ColorPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * This handler is called when the user selects a color through either a mouse or keyboard event.
   * It is called with the hex value of the color selected by the user, or with a custom hex value
   * entered by the user in the custom input.
   */
  onColorChange: (color: string) => void;
  /**
   * The hex value of the color to display styled in a selected state. If the value doesn't match
   * one of the available colors, the hex value will be displayed in the custom input.
   */
  value?: string;
  /**
   * The hex values of the colors to display in the color picker grid. If no custom colors are
   * provided, a default set will be rendered.
   */
  colorSet?: string[] | SwatchBookColorObject[];
  /**
   * When `true` the `ColorInput` component and a submit button will be displayed at the bottom of
   * the picker allowing the user to enter a custom hex value.
   *
   * @default false
   */
  showCustomHexInput?: boolean;
  /**
   * The text to display abover the custom input. It is strongly recommended that consumers provide
   * a properly globalized value.
   *
   * **Note:** This prop is only used when `showCustomHexInput` is `true`.
   *
   * @default 'Custom Hex Color'
   */
  customHexInputLabel?: string;
  /**
   * The label of the custom hex color submit icon button.
   * @default 'Submit'
   */
  submitLabel?: string;
  /**
   * When this handler is provided, an action can be tied to clicking the check button provided.
   * This handler is called when the check button is selected through a keyboard event only.
   *
   * **Note:** This prop is only used when `showCustomHexInput` is `true`.
   */
  onSubmitClick?: (event: React.FormEvent) => void;
  /**
   * When this handler is provided, a Reset button will be displayed at the top of the picker using
   * the `resetLabel` provided. This handler is called when the reset button is selected through
   * either a mouse or keyboard event.
   */
  onColorReset?: (color: string) => void;
  /**
   * The color to display as part of the Reset button. It is strongly recommended that consumers
   * provide a properly globalized value.
   *
   * **Note:** This prop is only necessary when the `onColorReset` handler is provided.
   */
  resetColor?: string;
  /**
   * The text to display as part of the Reset button. It is strongly recommended that consumers
   * provide a properly globalized value.
   *
   * **Note:** This prop is only necessary when the `onColorReset` handler is provided.
   *
   * @default 'Reset'
   */
  resetLabel?: string;
}

const defaultColorSet = [
  colors.blueberry600,
  colors.grapeSoda600,
  colors.pomegranate600,
  colors.cinnamon600,
  colors.cantaloupe600,
  colors.sourLemon600,
  colors.greenApple600,
  colors.jewel600,

  colors.blueberry500,
  colors.grapeSoda500,
  colors.pomegranate500,
  colors.cinnamon500,
  colors.cantaloupe500,
  colors.sourLemon500,
  colors.greenApple500,
  colors.jewel500,

  colors.blueberry400,
  colors.grapeSoda400,
  colors.pomegranate400,
  colors.cinnamon400,
  colors.cantaloupe400,
  colors.sourLemon400,
  colors.greenApple400,
  colors.jewel400,

  colors.blueberry300,
  colors.grapeSoda300,
  colors.pomegranate300,
  colors.cinnamon300,
  colors.cantaloupe300,
  colors.sourLemon300,
  colors.greenApple300,
  colors.jewel300,

  colors.blueberry200,
  colors.grapeSoda200,
  colors.pomegranate200,
  colors.cinnamon200,
  colors.cantaloupe200,
  colors.sourLemon200,
  colors.greenApple200,
  colors.jewel200,

  colors.blueberry100,
  colors.grapeSoda100,
  colors.pomegranate100,
  colors.cinnamon100,
  colors.cantaloupe100,
  colors.sourLemon100,
  colors.greenApple100,
  colors.jewel100,

  colors.blackPepper600,
  colors.blackPepper400,
  colors.blackPepper300,
  colors.blackPepper100,
  colors.frenchVanilla500,
  colors.frenchVanilla400,
  colors.frenchVanilla200,
  colors.frenchVanilla100,
];

const ColorPickerContainer = styled('div')({
  width: 216,
});

const ColorInputWrapper = styled('form')({
  width: '100%',
  marginTop: space.s,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ColorInputAndLabel = styled(FormField)({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
});

const CheckButton = styled(SecondaryButton)({
  alignSelf: 'flex-end',
});

const HexColorInput = styled(ColorInput)({
  width: '168px',
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
    <ColorPickerContainer {...elemProps}>
      {onColorReset && resetColor && (
        <ResetButton onClick={onColorReset} resetColor={resetColor} label={resetLabel} />
      )}
      <SwatchBook colors={colorSet} onSelect={onColorChange} value={value} />
      {showCustomHexInput && (
        <ColorInputWrapper onSubmit={onSubmit}>
          <ColorInputAndLabel>
            <FormField.Label>{customHexInputLabel}</FormField.Label>
            <FormField.Input
              as={HexColorInput}
              onChange={onCustomHexChange}
              onValidColorChange={onValidCustomHexChange}
              value={customHexValue}
              showCheck={value === validHexValue || value === customHexValue}
            />
          </ColorInputAndLabel>
          <CheckButton
            aria-label={submitLabel}
            icon={checkIcon}
            type="submit"
            disabled={disabled}
          />
        </ColorInputWrapper>
      )}
    </ColorPickerContainer>
  );
};

ColorPicker.defaultColorSet = defaultColorSet;
