import * as React from 'react';
import {styled, Themeable, ContentDirection} from '@workday/canvas-kit-labs-react-core';
import {expandHex, GrowthBehavior, ErrorType} from '@workday/canvas-kit-react-common';
import {colors, spacing, type, inputColors} from '@workday/canvas-kit-react-core';
import TextInput, {TextInputProps} from '@workday/canvas-kit-react-text-input';
import {ColorSwatch} from './parts/ColorSwatch';

export interface ColorInputProps extends Themeable, TextInputProps, GrowthBehavior {
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
    ...type.variant.mono,
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
      theme.direction === ContentDirection.LTR ? '46px' : 'calc(100% - 86px) /* @noflip */',
    // We're using @noflip because ColorInput should stay LTR, therefore, we need to adjust the padding using ContentDirection, not using rtl-css-js.
  })
);

const ColorInputContainer = styled('div')<Pick<ColorInputProps, 'grow'>>(
  {
    position: 'relative',
    width: colorInputWidth,
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
    ...type.body,
    ...type.variant.mono,
  },
  ({disabled}) => ({
    color: disabled ? inputColors.disabled.text : undefined,
  }),
  ({theme}) => ({
    left: theme.direction === ContentDirection.LTR ? '36px' : '88px',
    //    - LTR -> left: 36px;
    //    - RTL -> right: 88px;
    //
    // It's because we're changing the value of this attribute based on ContentDirection but the attribute itself is getting flipped by rtl-css-js.
    // We're doing this to adjust the spacing of the # sign as it should always stay on the left of the input in both LTR and RTL.
  })
);

const SwatchTile = styled(ColorSwatch)({
  position: 'absolute',
  top: 0,
  left: spacing.xxs,
  marginTop: '10px', // Fix vertical alignment on IE11
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
  pointerEvents: 'none',
});

export default class ColorInput extends React.Component<ColorInputProps> {
  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      placeholder = 'FFFFFF',
      value = '',
      showCheck,
      onChange,
      onValidColorChange,
      inputRef,
      disabled,
      error,
      grow,
      ...elemProps
    } = this.props;
    const formattedValue = this.formatValue(value);

    return (
      <ColorInputContainer grow={grow}>
        <CustomHexInput
          dir="ltr"
          inputRef={inputRef}
          onChange={this.handleChange}
          type="text"
          placeholder={placeholder}
          value={formattedValue}
          error={error}
          spellCheck={false}
          disabled={disabled}
          grow={grow}
          maxLength={7} // 7 to allow pasting with a hash
          {...elemProps}
        />
        <SwatchTile
          showCheck={showCheck}
          color={this.isValidHex(formattedValue) ? `#${formattedValue}` : ''}
        />
        <PoundSignPrefix disabled={disabled}>#</PoundSignPrefix>
      </ColorInputContainer>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = this.formatValue(e.currentTarget.value);

    if (this.props.onChange) {
      this.props.onChange(e);
    }

    if (this.isValidHex(value) && this.props.onValidColorChange) {
      this.props.onValidColorChange(`#${expandHex(value)}`);
    }
  };

  private isValidHex = (value: string) => {
    return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
  };

  private formatValue = (value: string) => {
    return value.replace(/#/g, '').substring(0, 6);
  };
}
