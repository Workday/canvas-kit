import * as React from 'react';
import {
  createComponent,
  expandHex,
  GrowthBehavior,
  ErrorType,
} from '@workday/canvas-kit-react/common';
import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';
import {ColorSwatch} from './parts/ColorSwatch';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Subtext} from '@workday/canvas-kit-react/text';

export interface ColorInputProps extends TextInputProps, GrowthBehavior {
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
   * If true, set the ColorInput to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The function called when the ColorInput state changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The function called when a valid hex value is entered in the ColorInput. The `color` argument passed to the callback function is prefixed with a hash and expanded if necessary (e.g., `03F` is converted to `#0033FF`).
   */
  onValidColorChange?: (color: string) => void;
}

export const colorPickerHexInputStencil = createStencil({
  vars: {
    width: '',
  },
  parts: {
    input: 'color-picker-hex-input',
    poundSign: 'color-picker-hex-input-pound-sign',
    swatch: 'color-picker-hex-input-swatch',
  },
  base: ({inputPart, poundSignPart, swatchPart, width}) => ({
    [width]: px2rem(116),
    position: 'relative',
    width,

    [inputPart]: {
      minWidth: width,
      width,
      fontFamily: system.fontFamily.mono,
      paddingInlineStart: calc.subtract('100%', px2rem(86)),

      '&:focus::placeholder': {
        color: 'transparent',
      },
    },

    [poundSignPart]: {
      position: 'absolute',
      top: px2rem(10),
      left: px2rem(88),
      fontFamily: system.fontFamily.mono,
    },

    [swatchPart]: {
      position: 'absolute',
      top: px2rem(10),
      left: system.space.x2,
      boxShadow: `inset 0 0 0 ${px2rem(1)} rgba(0,0,0,0.25)`,
      pointerEvents: 'none',
    },

    ':dir(ltr)': {
      [inputPart]: {
        paddingInlineStart: px2rem(46),
      },
      [poundSignPart]: {
        left: px2rem(36),
      },
    },
  }),
  modifiers: {
    grow: {
      true: ({width}) => ({
        [width]: '100%',
      }),
    },
    disabled: {
      true: ({inputPart, poundSignPart}) => ({
        [inputPart]: {
          borderColor: system.color.border.input.disabled,
          backgroundColor: system.color.bg.alt.soft,
          color: system.color.text.disabled,
        },
        [poundSignPart]: {
          color: system.color.text.disabled,
        },
      }),
    },
  },
});

const isValidHex = (value: string) => {
  return /(^#?[0-9A-F]{3}$)|(^#?[0-9A-F]{6}$)/i.test(value);
};

const formatValue = (value: string) => {
  return value.replace(/#/g, '').substring(0, 6);
};

export const ColorInput = createComponent('input')({
  displayName: 'ColorInput',
  Component: (
    {
      placeholder = 'FFFFFF',
      value = '',
      showCheck,
      onChange,
      onValidColorChange,
      disabled,
      error,
      grow,
      width,
      ...elemProps
    }: ColorInputProps,
    ref,
    Element
  ) => {
    const formattedValue = formatValue(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = formatValue(e.currentTarget.value);

      if (onChange) {
        onChange(e);
      }

      if (isValidHex(value) && onValidColorChange) {
        onValidColorChange(`#${expandHex(value)}`);
      }
    };

    return (
      <div
        {...colorPickerHexInputStencil({
          grow,
          disabled,
          width: typeof width === 'number' ? px2rem(width) : width,
        })}
      >
        <TextInput
          dir="ltr"
          ref={ref}
          as={Element}
          onChange={handleChange}
          type="text"
          placeholder={value ? undefined : placeholder}
          value={formattedValue}
          disabled={disabled}
          error={error}
          spellCheck={false}
          maxLength={7} // 7 to allow pasting with a hash
          {...colorPickerHexInputStencil.parts.input}
          {...handleCsProp(elemProps)}
        />
        <ColorSwatch
          showCheck={showCheck}
          color={isValidHex(formattedValue) ? `#${formattedValue}` : ''}
          {...colorPickerHexInputStencil.parts.swatch}
        />
        <Subtext
          as="span"
          size="large"
          aria-hidden={true}
          {...colorPickerHexInputStencil.parts.poundSign}
        >
          #
        </Subtext>
      </div>
    );
  },
});
