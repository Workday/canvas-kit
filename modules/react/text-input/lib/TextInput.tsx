import {ErrorType, GrowthBehavior, createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    fontFamily: system.fontFamily.default,
    fontSize: system.legacy.fontSize.subtext.lg,
    fontWeight: system.fontWeight.normal,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    display: 'block',
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
    backgroundColor: system.legacy.color.surface.default,
    borderRadius: system.shape.lg,
    height: system.legacy.size.md,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: system.legacy.padding.xs, // Compensate for border
    margin: 0, // Fix Safari
    width,
    minWidth: cssVar(width, px2rem(280)),
    color: system.color.fg.default,
    textOverflow: 'ellipsis', // Always show ellipsis for long text inputs as long as it doesn't have focus

    '::-ms-clear': {
      display: 'none',
    },
    '&::placeholder': {
      color: system.color.fg.muted.default,
    },
    '&:is(:hover, .hover):where(:not([disabled], .disabled))': {
      borderColor: system.legacy.color.border.input.hover,
    },
    '&:is(:focus-visible, .focus):where(:not([disabled]))': {
      borderColor: system.legacy.color.brand.focus.primary,
      boxShadow: `inset 0 0 0 1px ${system.legacy.color.brand.focus.primary}`,
      outline: `${px2rem(2)} solid transparent`,
    },
    '&:is(:disabled, .disabled)': {
      opacity: system.opacity.disabled,
      '&::placeholder': {
        opacity: system.opacity.disabled,
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
        borderColor: system.legacy.color.brand.border.critical,
        // borderWidth: px2rem(2),
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.border.critical}`,
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            borderColor: system.legacy.color.brand.border.critical,
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.border.critical},
        0 0 0 2px ${system.legacy.color.focus.inverse},
        0 0 0 4px ${system.legacy.color.brand.border.primary}`,
          outlineOffset: px2rem(2),
        },
      },
      caution: {
        borderColor: system.legacy.color.brand.border.caution,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.focus.caution.inner}`,
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            borderColor: system.legacy.color.brand.border.caution,
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.focus.caution.inner},
        0 0 0 2px ${system.legacy.color.focus.inverse},
        0 0 0 4px ${system.legacy.color.brand.border.primary}`,
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
