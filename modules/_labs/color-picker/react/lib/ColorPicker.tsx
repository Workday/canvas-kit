import {colors, spacing} from '@workday/canvas-kit-react-core';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {ColorInput} from '@workday/canvas-kit-react-color-picker';
import {IconButton} from '@workday/canvas-kit-react-button';
import {Popup} from '@workday/canvas-kit-react-popup';
import * as React from 'react';
import FormField from '@workday/canvas-kit-react-form-field';
import styled from '@emotion/styled';

import {ResetButton} from './parts/ColorReset';
import {SwatchBook} from './parts/SwatchBook';

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
  colorSet?: string[];
  /**
   * If true, render an input for entering a custom hex color.
   * @default false
   */
  showCustomHexInput?: boolean;
  /**
   * The label text of the custom hex input. This is also used as the aria-label
   * @default 'Custom Hex Color'
   */
  customHexInputLabel?: string;
  /**
   * The function called when the submit icon is clicked.
   */
  onSubmitClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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

const defaultColors = [
  colors.cinnamon400,
  colors.peach400,
  colors.chiliMango400,
  colors.cantaloupe400,
  colors.sourLemon400,
  colors.juicyPear400,
  colors.kiwi400,
  colors.greenApple400,

  colors.watermelon400,
  colors.jewel400,
  colors.toothpaste400,
  colors.blueberry400,
  colors.plum400,
  colors.berrySmoothie400,
  colors.blackberry400,
  colors.islandPunch400,

  colors.grapeSoda400,
  colors.pomegranate400,
  colors.fruitPunch400,
  colors.rootBeer400,
  colors.toastedMarshmallow400,
  colors.licorice400,
  colors.cappuccino400,
  colors.blackPepper400,
];

const ColorInputWrapper = styled('div')({
  width: '100%',
  marginTop: spacing.s,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ColorInputAndLabel = styled(FormField)({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
});

const CheckButton = styled(IconButton)({
  alignSelf: 'flex-end',
});

const HexColorInput = styled(ColorInput)({
  width: '168px',
});

const isCustomColor = (colors: string[], hexCode?: string) => {
  if (!hexCode) {
    return false;
  }

  const lowercaseHex = hexCode.toLowerCase();
  return !colors.includes(lowercaseHex);
};

const ColorPicker = ({
  colorSet = defaultColors,
  customHexInputLabel = 'Custom Hex Color',
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
  const [customHexValue, setCustomHexValue] = React.useState(
    isCustomColor(colorSet, value) ? value : ''
  );

  const onCustomHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHexValue(event.target.value);
    setValidHexValue('');
  };

  const onValidCustomHexChange = (validHexValue: string) => setValidHexValue(validHexValue);

  const onCustomInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && validHexValue) {
      onColorChange(validHexValue);
    }
  };

  const onCheckClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onSubmitClick) {
      onSubmitClick(event);
    }
    onColorChange(validHexValue);
  };

  return (
    <Popup width={250} padding={Popup.Padding.s} data-testid="canvas-color-picker" {...elemProps}>
      {onColorReset && resetColor && (
        <ResetButton onClick={onColorReset} resetColor={resetColor} label={resetLabel} />
      )}
      <SwatchBook colors={colorSet} onSelect={onColorChange} value={value} />
      {showCustomHexInput && (
        <ColorInputWrapper>
          <ColorInputAndLabel label={customHexInputLabel}>
            <HexColorInput
              onChange={onCustomHexChange}
              onKeyDown={onCustomInputKeyDown}
              onValidColorChange={onValidCustomHexChange}
              value={customHexValue}
              showCheck={value === validHexValue || value === customHexValue}
            />
          </ColorInputAndLabel>
          <CheckButton
            aria-label={customHexInputLabel}
            variant={IconButton.Variant.CircleFilled}
            icon={checkIcon}
            onClick={onCheckClick}
          />
        </ColorInputWrapper>
      )}
    </Popup>
  );
};

export default ColorPicker;
