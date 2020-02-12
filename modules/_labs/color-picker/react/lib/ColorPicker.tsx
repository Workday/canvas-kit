import * as React from 'react';
import styled from '@emotion/styled';
import {ColorInput} from '@workday/canvas-kit-react-color-picker';
import {borderRadius, colors, spacing} from '@workday/canvas-kit-react-core';
import {Label} from '@workday/canvas-kit-react-form-field';
import {IconButton} from '@workday/canvas-kit-react-button';
import {checkIcon} from '@workday/canvas-system-icons-web';

import {SwatchBook} from './parts/SwatchBook';
import {ResetButton} from './parts/ColorReset';

export interface ColorPickerProps {
  ariaLabel?: string;

  onChange: (color: string) => void;
  selectedColor?: string;
  customColors?: string[];

  showCustomInput?: boolean;
  customInputLabel?: string;
  onSubmitClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  onReset?: Function;
  resetColor?: string;
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

const Container = styled('div')({
  width: 224,
  padding: spacing.s,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  background: colors.frenchVanilla100,
  border: `1px solid ${colors.soap400}`,
  borderRadius: borderRadius.m,

  boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.12)',
});

const ColorInputWrapper = styled('div')({
  width: '100%',
  marginTop: spacing.s,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ColorInputAndLabel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
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

export const ColorPicker: React.FunctionComponent<ColorPickerProps> = ({
  ariaLabel,
  customColors,
  customInputLabel,
  onChange,
  onSubmitClick,
  onReset,
  resetLabel,
  resetColor,
  selectedColor,
  showCustomInput,
}) => {
  const colorList = customColors ? customColors : defaultColors;
  const [validHexValue, setValidHexValue] = React.useState<string>('');
  const [customHexValue, setCustomHexValue] = React.useState<string>(
    isCustomColor(colorList, selectedColor) ? selectedColor! : ''
  );

  const onCustomHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomHexValue(event.target.value);
    setValidHexValue('');
  };

  const onValidHexChange = (validHexValue: string) => {
    setValidHexValue(validHexValue);
  };

  const onCustomInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && validHexValue) {
      onChange(validHexValue);
    }
  };

  const inputLabel = customInputLabel || 'Custom Hex Color';
  const placeholder = customHexValue === '' ? undefined : customHexValue.toUpperCase();

  return (
    <Container aria-label={ariaLabel}>
      {onReset && resetColor && (
        <ResetButton
          id="canvas-color-picker--reset"
          onClick={onReset}
          resetColor={resetColor}
          label={resetLabel}
        />
      )}
      <SwatchBook colors={colorList} onSelect={onChange} selectedColor={selectedColor} />
      {showCustomInput && (
        <ColorInputWrapper>
          <ColorInputAndLabel>
            <Label>{inputLabel}</Label>
            <HexColorInput
              aria-label="Color Input"
              id="#canvas-color-picker--custom-input"
              onChange={onCustomHexChange}
              onKeyDown={onCustomInputKeyDown}
              onValidColorChange={onValidHexChange}
              value={customHexValue}
              placeholder={placeholder}
              showCheck={!!placeholder}
            />
          </ColorInputAndLabel>
          <CheckButton
            aria-label={inputLabel}
            variant={IconButton.Variant.CircleFilled}
            icon={checkIcon}
            onClick={onSubmitClick}
          />
        </ColorInputWrapper>
      )}
    </Container>
  );
};
