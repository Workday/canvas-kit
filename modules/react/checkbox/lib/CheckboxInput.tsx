import * as React from 'react';

import {ErrorType, createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {checkboxBackgroundStencil} from './CheckBackground';

export interface CheckboxProps extends CSProps {
  /**
   * If true, set the Checkbox to the checked state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Checkbox to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type of error associated with the Checkbox (if applicable).
   */
  error?: ErrorType;
  /**
   * The HTML `id` of the underlying checkbox input element. This is required if `label` is defined as a non-empty string.
   * @default {useUniqueId}
   */
  id?: string;
  /**
   * If true, set the Checkbox to an indeterminate state. Use this on a Checkbox with nested child Checkboxes to denote that some (but not all) child Checkboxes are checked.
   * @default false
   */
  indeterminate?: boolean;
  /**
   * The text of the Checkbox label.
   * @default ''
   */
  label?: string;
  /**
   * The function called when the Checkbox state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Checkbox.
   */
  value?: string;
  /**
   * The variant for the checkbox
   */
  variant?: 'inverse' | undefined;
}

const checkboxInputStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.sm, system.shape.half),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.size.xs, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.xs, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: cssVar(system.padding.none, system.space.zero),
    marginTop: calc.negate(px2rem(3)),
    marginInlineStart: calc.negate(px2rem(3)),
    position: 'absolute',
    opacity: system.opacity.zero,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:where(:hover,.hover) ~ span:first-of-type': {
      boxShadow: `0 0 0 ${px2rem(7)} ${cssVar(system.color.surface.overlay.hover.default, system.color.bg.alt.soft)}`,
    },

    // Disabled State
    '&:where(:checked, :indeterminate) ~ div:first-of-type': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.brand.border.primary, brand.primary.base),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base),
    },
    '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
      opacity: system.opacity.disabled,
    },

    // Focus State
    '&:where(:focus-visible, :active, .focus, .active)': {
      outline: 'none',
    },
    '&:where(:focus-visible, .focus) ~ div:first-of-type': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.brand.border.primary, brand.primary.base),
      borderWidth: px2rem(2),
      ...focusRing({
        width: 0,
        separation: 0,
        animate: false,
      }),
    },
    '&:checked:focus-visible, &:indeterminate:focus-visible, &:checked.focus, &:indeterminate.focus':
      {
        '& ~ div:first-of-type': {
          ...focusRing({
            width: 2,
            separation: 2,
            animate: false,
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            outerColor: cssVar(system.color.brand.border.primary, brand.common.focusOutline),
          }),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.brand.border.primary, brand.primary.base),
          borderWidth: px2rem(2),
        },
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '& ~ div:first-of-type': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.border.input.inverse, system.color.border.input.inverse),
        },

        // Disabled State for inverse variant
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: cssVar(system.color.focus.inverse, system.color.border.input.inverse),
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
          backgroundColor: system.color.bg.default,
        },
        '&:disabled ~ div:first-of-type': {
          backgroundColor: system.color.bg.alt.default,
          opacity: system.opacity.disabled,
        },
        '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
          backgroundColor: system.color.bg.default,
        },

        // Focus state for inverse variant
        '&:where(:focus-visible, .focus) ~ div:first-of-type': {
          borderColor: system.color.border.contrast.default,
          ...focusRing({
            width: 2,
            separation: 0,
            animate: false,
            innerColor: system.color.border.contrast.default,
            outerColor: system.color.focus.inverse,
          }),
        },
        '&:checked:focus-visible, &:checked.focus, &:indeterminate:focus-visible, &:indeterminate.focus':
          {
            '& ~ div:first-of-type': {
              ...focusRing({
                width: 2,
                separation: 2,
                animate: false,
                innerColor: system.color.border.contrast.default,
                outerColor: system.color.focus.inverse,
              }),
              borderColor: system.color.focus.inverse,
            },
          },
      },
    },
    disabled: {
      true: {
        '&:where(:hover, .hover) ~ span:first-of-type': {
          boxShadow: 'none',
        },
      },
    },
    error: {
      true: {
        '&:not(:where(:focus-visible, .focus)) ~ div:first-of-type': {
          borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          boxShadow: `
            0 0 0 ${px2rem(1)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(2)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: 'transparent',
          boxShadow: `
            0 0 0 ${px2rem(2)} ${system.color.focus.inverse},
            0 0 0 ${px2rem(4)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(5)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          },
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: true},
      styles: {
        '&:not(:where(:focus-visible, .focus)) ~ div:first-of-type': {
          borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(system.color.surface.inverse, system.color.bg.default),
          boxShadow: `
            0 0 0 ${px2rem(1)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(2)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          // Match non-inverse checked state with error
          borderColor: 'transparent',
          boxShadow: `
            0 0 0 ${px2rem(2)} ${system.color.focus.inverse},
            0 0 0 ${px2rem(4)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(5)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          },
      },
    },
  ],
});

export const CheckboxInput = createComponent('input')({
  displayName: 'CheckboxInput',
  Component: ({variant, error, indeterminate, ...elemProps}: CheckboxProps, ref, Element) => {
    const {checked, disabled} = elemProps;

    return (
      <Element
        type="checkbox"
        ref={ref}
        aria-checked={indeterminate ? 'mixed' : checked}
        {...handleCsProp(elemProps, checkboxInputStencil({variant, disabled, error: !!error}))}
      />
    );
  },
});
