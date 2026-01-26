import {
  ErrorType,
  GrowthBehavior,
  createComponent,
  forwardFitTokens,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    borderRadius: cssVar(system.shape.md, system.shape.x1Half),
    height: forwardFitTokens.system.size.md,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: cssVar(system.padding.xs, system.space.x2), // Compensate for border
    margin: system.padding.none, // Fix Safari
    width,
    color: forwardFitTokens.system.color.fg.default,
    textOverflow: 'ellipsis', // Always show ellipsis for long text inputs as long as it doesn't have focus

    '::-ms-clear': {
      display: 'none',
    },
    '&::placeholder': {
      color: forwardFitTokens.system.color.fg.muted.default,
    },
    '&:is(:hover, .hover)': {
      borderColor: forwardFitTokens.system.color.border.input.hover,
    },
    '&:is(:focus-visible, .focus):where(:not([disabled]))': {
      borderColor: forwardFitTokens.system.color.brand.border.primary,
      boxShadow: `inset 0 0 0 1px ${forwardFitTokens.system.color.brand.border.primary}`,
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
        borderColor: brand.common.errorInner,
        borderWidth: px2rem(2),
        backgroundColor: brand.error.lightest,
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            borderColor: brand.common.errorInner,
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          boxShadow: `0 0 0 2px ${system.color.border.inverse.default}, 0 0 0 4px ${brand.common.focusOutline}`,
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
        0 0 0 2px ${system.color.border.inverse.default},
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
