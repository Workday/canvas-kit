import {createComponent, GrowthBehavior, ErrorType} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem, calc, CSProps} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface TextInputProps extends GrowthBehavior, CSProps {
  /**
   * The type of error associated with the TextInput (if applicable).
   */
  error?: ErrorType;
  /**
   * The width of the TextInput.
   */
  width?: number | string;
}

export const textInputStencil = createStencil({
  vars: {
    width: '',
  },
  base: ({width}) => ({
    ...system.type.subtext.large,
    display: 'block',
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1Half,
    boxSizing: 'border-box',
    height: system.space.x10,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: system.space.x2, // Compensate for border
    margin: px2rem(0), // Fix Safari
    width,
    minWidth: cssVar(width, calc.add(calc.multiply(system.space.x20, 3), system.space.x10)),
    color: system.color.text.default,
    textOverflow: 'ellipsis', // Always show ellipsis for long text inputs as long as it doesn't have focus

    '::-ms-clear': {
      display: 'none',
    },
    '&::placeholder': {
      color: system.color.text.hint,
    },
    '&:is(:hover, .hover)': {
      borderColor: system.color.border.input.strong,
    },
    '&:is(:focus-visible, .focus):where(:not([disabled]))': {
      borderColor: brand.common.focusOutline,
      boxShadow: `inset 0 0 0 1px ${cssVar(brand.common.focusOutline)}`,
      outline: `${px2rem(2)} solid transparent`,
    },
    '&:is(:disabled, .disabled)': {
      backgroundColor: system.color.bg.alt.softer,
      borderColor: system.color.border.input.disabled,
      color: system.color.fg.disabled,
      '&::placeholder': {
        color: system.color.fg.disabled,
      },
    },
  }),
  modifiers: {
    grow: {
      true: {
        width: '100%',
        resize: 'vertical',
      },
      false: {
        width: 'initial',
      },
    },

    error: {
      error: {
        borderColor: brand.common.errorInner,
        borderWidth: px2rem(2),
        backgroundColor: brand.error.lightest,
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            borderColor: brand.common.errorInner,
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          boxShadow: `0 0 0 2px ${system.color.border.inverse}, 0 0 0 4px ${brand.common.focusOutline}`,
          outlineOffset: px2rem(2),
        },
      },
      caution: {
        borderColor: brand.common.alertOuter,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.common.alertInner}`,
        backgroundColor: brand.alert.lightest,
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            borderColor: brand.common.alertOuter,
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.common.alertInner},
        0 0 0 2px ${system.color.border.inverse},
        0 0 0 4px ${brand.common.focusOutline}`,
        },
        outlineOffset: px2rem(2),
      },
    },
  },
  defaultModifiers: {
    grow: 'false',
  },
});

export const TextInput = createComponent('input')({
  displayName: 'TextInput',
  Component: ({grow, error, width, ...elemProps}: TextInputProps, ref, Element) => {
    return (
      <Element
        type="text"
        ref={ref}
        {...mergeStyles(
          elemProps,
          textInputStencil({width: typeof width === 'number' ? px2rem(width) : width, grow, error})
        )}
      />
    );
  },
  subComponents: {
    ErrorType,
  },
});
