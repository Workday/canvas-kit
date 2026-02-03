import {ErrorType, GrowthBehavior, createComponent} from '@workday/canvas-kit-react/common';
import {formFieldStencil} from '@workday/canvas-kit-react/form-field';
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.md, system.shape.x1Half),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.md, system.space.x10),
    transition: '0.2s box-shadow, 0.2s border-color',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xs, system.space.x2), // Compensate for border
    margin: system.padding.none, // Fix Safari
    width: cssVar(width, px2rem(280)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.default, system.color.text.default),
    textOverflow: 'ellipsis', // Always show ellipsis for long text inputs as long as it doesn't have focus

    '::-ms-clear': {
      display: 'none',
    },
    '&::placeholder': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.muted.default, system.color.text.hint),
    },
    '&:is(:hover, .hover):where(:not([disabled], .disabled))': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.border.input.hover, system.color.border.input.strong),
    },
    '&:is(:focus-visible, .focus):where(:not([disabled]))': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.brand.focus.primary, brand.common.focusOutline),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      boxShadow: `inset 0 0 0 1px ${cssVar(system.color.brand.focus.primary, brand.common.focusOutline)}`,
      outline: `${px2rem(2)} solid transparent`,
    },
    '&:is(:disabled, .disabled)': {
      // TODO: Revisit this, we use different styles
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
    },

    error: {
      error: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderColor: cssVar(system.color.brand.border.critical, brand.common.errorInner),
        // borderWidth: px2rem(2),
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.border.critical, brand.common.errorInner)}`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            borderColor: cssVar(system.color.brand.border.critical, brand.common.errorInner),
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.border.critical, brand.common.errorInner)},
        0 0 0 2px ${cssVar(system.color.focus.inverse, system.color.border.inverse.default)},
        0 0 0 4px ${cssVar(system.color.brand.border.primary, brand.common.focusOutline)}`,
          outlineOffset: px2rem(2),
        },
      },
      caution: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderColor: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.caution.inner)}`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
        '&:is(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled]), .focus:not([disabled]))':
          {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            borderColor: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
          },
        '&:is(:focus-visible, .focus):not([disabled])': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.caution.inner, brand.common.alertInner)},
        0 0 0 2px ${cssVar(system.color.focus.inverse, system.color.border.inverse.default)},
        0 0 0 4px ${cssVar(system.color.brand.border.primary, brand.common.focusOutline)}`,
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
