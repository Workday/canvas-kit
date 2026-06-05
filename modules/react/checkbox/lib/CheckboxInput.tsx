import * as React from 'react';

import {ErrorType, createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  handleCsProp,
  px2rem,
  withCornerShape,
} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {checkboxBackgroundStencil} from './CheckBackground';
import {checkboxRippleStencil} from './CheckboxRipple';

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
    ...withCornerShape(system.legacy.shape.sm),
    width: base.legacy.size300,
    height: base.legacy.size300,
    margin: 0,
    marginBlockStart: calc.negate(px2rem(3)),
    marginInlineStart: calc.negate(px2rem(3)),
    position: 'absolute',
    opacity: system.opacity.zero,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    [`&:where(:hover,.hover) ~ [data-part="${checkboxRippleStencil.parts.ripple['data-part']}"]`]: {
      boxShadow: `0 0 0 ${px2rem(7)} ${system.legacy.color.surface.overlay.hover.default}`,
    },

    // Hover state and not disabled
    [`&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
      {
        borderColor: system.legacy.color.border.input.hover,
      },

    [`&:where(:checked, :indeterminate) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
      {
        borderColor: system.legacy.color.brand.accent.primary,
        backgroundColor: system.legacy.color.brand.accent.primary,
      },

    [`&:where(:disabled, .disabled) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
      {
        opacity: system.opacity.disabled,
      },

    // Focus State
    '&:where(:focus-visible, :active, .focus, .active)': {
      outline: 'none',
    },
    // When not checked, the border is within the input
    [`&:where(:focus-visible, .focus) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
      {
        borderColor: system.legacy.color.brand.border.primary,
        borderWidth: px2rem(2),
        ...focusRing({
          width: 0,
          separation: 0,
          animate: false,
        }),
      },
    // When checked, the border is outside the input
    '&:checked:focus-visible, &:indeterminate:focus-visible, &:checked.focus, &:indeterminate.focus':
      {
        [`& ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]: {
          ...focusRing({
            width: 2,
            separation: 2,
            animate: false,
            outerColor: system.legacy.color.brand.border.primary,
          }),
          borderColor: system.legacy.color.brand.accent.primary,
          borderWidth: px2rem(2),
        },
      },
  },
  modifiers: {
    variant: {
      inverse: {
        [`& ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]: {
          borderColor: system.legacy.color.focus.inverse,
        },

        // Hover state and not disabled
        [`&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
          {
            borderColor: system.legacy.color.focus.inverse,
          },
        [`&:where(:hover,.hover) ~ [data-part="${checkboxRippleStencil.parts.ripple['data-part']}"]`]:
          {
            boxShadow: `0 0 0 ${px2rem(7)} ${system.legacy.color.surface.overlay.hover.inverse}`,
          },
        [`&:where(:checked, :indeterminate):not(:disabled):not(.disabled) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
          {
            borderColor: system.legacy.color.focus.inverse,
            backgroundColor: system.legacy.color.surface.inverse,
          },
        // Disabled State for inverse variant (applies to all disabled states: unchecked, checked, and indeterminate)
        [`&:disabled ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]: {
          opacity: system.opacity.disabled,
        },
        // Disabled + checked/indeterminate state for inverse variant
        [`&:where(:checked, :indeterminate):where(:disabled, .disabled) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
          {
            backgroundColor: system.legacy.color.surface.inverse,
          },

        // Focus state for inverse variant
        [`&:where(:focus-visible, .focus) ~ [data-part="${checkboxBackgroundStencil.parts.background['data-part']}"]`]:
          {
            borderColor: system.color.border.contrast.default,
            boxShadow: `0 0 0 ${px2rem(0)}  ${system.color.border.contrast.default} ,0 0 0 ${px2rem(2)}  ${system.legacy.color.focus.inverse} `,
          },
        '&:checked:focus-visible, &:checked.focus, &:indeterminate:focus-visible, &:indeterminate.focus':
          {
            '& ~ div:first-of-type': {
              boxShadow: `0 0 0 ${px2rem(2)}  ${system.color.border.contrast.default} ,0 0 0 ${px2rem(4)}  ${system.legacy.color.focus.inverse} `,
              borderColor: system.legacy.color.focus.inverse,
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
            0 0 0 ${px2rem(2)} ${system.legacy.color.focus.inverse},
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
          border: `${px2rem(1)} solid ${system.legacy.color.focus.inverse}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: system.legacy.color.focus.inverse,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.legacy.color.focus.inverse,
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
