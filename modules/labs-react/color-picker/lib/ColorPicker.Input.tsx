/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react';
import {
  expandHex,
  GrowthBehavior,
  ErrorType,
  styled,
  ContentDirection,
  ExtractProps,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import TextInput from '@workday/canvas-kit-react/text-input';
import {colors, space, type, inputColors} from '@workday/canvas-kit-react/tokens';
import * as React from 'react';

import {ColorPicker} from './ColorPicker';
import {useColorPickerModel} from './useColorPickerModel';

export interface ColorInputProps extends ExtractProps<typeof TextInput>, GrowthBehavior {
  /**
   * The value of the ColorInput.
   * @default ''
   */
  value?: string;
  /**
   * If true, show a checkmark in the swatch tile when a custom hex color is entered in the ColorInput.
   * @default false
   */
  showCheck?: boolean;
  /**
   * The placeholder text of the ColorInput.
   * @default FFFFFF
   */
  placeholder?: string;
  /**
   * The type of error associated with the ColorInput (if applicable).
   */
  error?: ErrorType;
  /**
   * The function called when the ColorInput state changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The function called when a valid hex value is entered in the ColorInput. The `color` argument passed to the callback function is prefixed with a hash and expanded if necessary (e.g., `03F` is converted to `#0033FF`).
   */
  onValidColorChange?: (color: string) => void;
}

const colorInputWidth = 116;

const CustomHexInput = styled(TextInput)<Pick<ColorInputProps, 'disabled' | 'grow'>>(
  {
    boxSizing: 'border-box',
    minWidth: colorInputWidth,
    width: colorInputWidth,
    fontFamily: type.properties.fontFamilies.monospace,

    '&:focus::placeholder': {
      color: 'transparent',
    },
  },
  ({grow}) =>
    grow && {
      minWidth: '100%',
      width: '100%',
    },
  ({disabled}) => ({
    backgroundColor: disabled ? colors.soap200 : '',
  }),
  ({theme}) => ({
    paddingLeft:
      theme.canvas.direction === ContentDirection.LTR ? '46px' : 'calc(100% - 86px) /* @noflip */',
    // We're using @noflip because ColorInput should stay LTR, therefore, we need to adjust the padding using ContentDirection, not using rtl-css-js.
  })
);

const StyledInputContainer = styled('div')<Pick<ColorInputProps, 'grow'>>(
  {
    position: 'relative',
    width: colorInputWidth,
    display: 'inline-flex',
  },
  ({grow}) =>
    grow && {
      minWidth: '100%',
      width: '100%',
    }
);

const PoundSignPrefix = styled('span')<Pick<ColorInputProps, 'disabled'>>(
  {
    position: 'absolute',
    top: 10,
    ...type.levels.subtext.large,
    fontFamily: type.properties.fontFamilies.monospace,
  },
  ({disabled}) => ({
    color: disabled ? inputColors.disabled.text : undefined,
  }),
  ({theme}) => ({
    left: theme.canvas.direction === ContentDirection.LTR ? '36px' : '88px',
    //    - LTR -> left: 36px;
    //    - RTL -> right: 88px;
    //
    // It's because we're changing the value of this attribute based on ContentDirection but the attribute itself is getting flipped by rtl-css-js.
    // We're doing this to adjust the spacing of the # sign as it should always stay on the left of the input in both LTR and RTL.
  })
);

const swatchTileStyles = css({
  position: 'absolute',
  top: 0,
  left: space.xxs,
  marginTop: '10px', // Fix vertical alignment on IE11
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
  pointerEvents: 'none',
});

export default createSubcomponent('input')({
  displayName: 'ColorInput',
  modelHook: useColorPickerModel,
})<ColorInputProps>(
  (
    {
      placeholder = 'FFFFFF',
      value = '',
      showCheck,
      onChange,
      onValidColorChange,
      disabled,
      error,
      grow,
      ...elemProps
    },
    _,
    model
  ) => {
    const formatValue = (value: string) => {
      return value.replace(/#/g, '').substring(0, 6);
    };

    const isValidHex = (value: string) => {
      return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = formatValue(e.currentTarget.value);

      if (onChange) {
        onChange(e);
      }
      model.events.setCustomColor(e.target.value);

      if (isValidHex(value) && onValidColorChange) {
        onValidColorChange(`#${expandHex(value)}`);
      }
    };

    const formattedValue = formatValue(value || model.state.customColor);
    return (
      <StyledInputContainer grow={grow}>
        <CustomHexInput
          dir="ltr"
          onChange={handleChange}
          type="text"
          placeholder={value ? undefined : placeholder}
          value={formattedValue}
          error={error}
          spellCheck={false}
          disabled={disabled}
          grow={grow}
          maxLength={7} // 7 to allow pasting with a hash
          {...elemProps}
        />
        <ColorPicker.Swatch
          css={swatchTileStyles}
          showCheck={showCheck}
          color={isValidHex(formattedValue) ? `#${formattedValue}` : ''}
        />
        <PoundSignPrefix aria-hidden={true} disabled={disabled}>
          #
        </PoundSignPrefix>
      </StyledInputContainer>
    );
  }
);
