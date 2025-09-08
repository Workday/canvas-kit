import * as React from 'react';
import {createComponent, focusRing, ErrorType} from '@workday/canvas-kit-react/common';

import {calc, createStencil, handleCsProp, px2rem, CSProps} from '@workday/canvas-kit-styling';
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
    borderRadius: system.shape.half,
    width: system.space.x6,
    height: system.space.x6,
    margin: system.space.zero,
    marginTop: calc.negate(px2rem(3)),
    marginInlineStart: calc.negate(px2rem(3)),
    position: 'absolute',
    opacity: system.opacity.zero,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:where(:hover,.hover) ~ span:first-of-type': {
      boxShadow: `0 0 0 ${px2rem(7)} ${system.color.bg.alt.soft}`,
    },

    // Disabled State
    '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
      {
        borderColor: system.color.border.input.strong,
      },
    '&:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.base,
      backgroundColor: brand.primary.base,
    },
    '&:disabled ~ div:first-of-type': {
      borderColor: system.color.border.input.disabled,
      backgroundColor: system.color.bg.alt.softer,
      opacity: system.opacity.full,
    },
    '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.light,
      backgroundColor: brand.primary.light,
    },

    // Focus State
    '&:where(:focus-visible, :active, .focus, .active)': {
      outline: 'none',
    },
    '&:where(:focus-visible, .focus) ~ div:first-of-type': {
      borderColor: brand.primary.base,
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
            outerColor: brand.common.focusOutline,
          }),
          borderColor: brand.primary.base,
          borderWidth: px2rem(2),
          span: {
            marginInlineStart: calc.negate(px2rem(7)),
          },
        },
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '& ~ span:first-of-type': {
          opacity: system.opacity.disabled,
        },

        '& ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
        },

        // Disabled State for inverse variant
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: system.color.border.input.inverse,
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
            outerColor: system.color.border.inverse,
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
                outerColor: system.color.border.inverse,
              }),
              borderColor: system.color.border.inverse,
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
            0 0 0 ${px2rem(2)} ${system.color.border.inverse},
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
          border: `${px2rem(1)} solid ${system.color.border.input.inverse}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: system.color.border.input.inverse,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
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
