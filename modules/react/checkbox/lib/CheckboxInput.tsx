import * as React from 'react';
import {createComponent, focusRing, ErrorType} from '@workday/canvas-kit-react/common';

import {
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
  CSProps,
} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {inputVars} from './CheckboxContainer';

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
   * The HTML `id` of the underlying checkbox input element. This is required if `label` is defined as a non-empty string.
   * @default {useUniqueId}
   */
  id?: string;
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
   * The type of error associated with the Checkbox (if applicable).
   */
  error?: ErrorType;
  /**
   * If true, set the Checkbox to an indeterminate state. Use this on a Checkbox with nested child Checkboxes to denote that some (but not all) child Checkboxes are checked.
   * @default false
   */
  indeterminate?: boolean;
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
    marginLeft: calc.negate(px2rem(3)),
    position: 'absolute',
    opacity: 0,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:where(:hover, .hover) ~ span:first-of-type': {
      boxShadow: `0 0 0 ${px2rem(7)} ${base.soap200}`,
    },

    // Disabled State
    '&:not(:where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
      {
        borderColor: base.licorice500,
      },

    '&:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.base,
      backgroundColor: brand.primary.base,
    },

    '&:disabled ~ div:first-of-type': {
      borderColor: base.licorice100,
      backgroundColor: base.soap100,
      opacity: 1,
    },

    '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.light,
      backgroundColor: brand.primary.light,
    },

    // Focus State
    '&:where(:focus, :active, .focus, .active)': {
      outline: 'none',
    },

    '&:where(:focus, .focus) ~ div:first-of-type': {
      borderColor: brand.primary.base,
      borderWidth: px2rem(2),
      boxShadow: 'none',
      ...focusRing({
        width: 0,
        separation: 0,
        animate: false,
      }),
    },
    // not selecting by below
    // '&:where(:checked, :indeterminate):where(:focus, .focus) ~ div:first-of-type':
    '&:checked:focus ~ div:first-of-type, &:indeterminate:focus ~ div:first-of-type, &:checked.focus ~ div:first-of-type, &:indeterminate.focus ~ div:first-of-type':
      {
        ...focusRing({
          width: 2,
          separation: 2,
          animate: false,
          outerColor: cssVar(brand.common.focusOutline),
        }),
        borderColor: brand.primary.base,
        borderWidth: px2rem(2),
        span: {
          marginLeft: calc.negate(px2rem(7)),
        },
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '& ~ div:first-of-type': {
          borderColor: base.soap300,
        },
        // Disabled State for inverse variant
        '&:not(:where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: base.soap300,
          },

        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: base.soap300,
          backgroundColor: base.frenchVanilla100,
        },

        '&:disabled ~ div:first-of-type': {
          backgroundColor: base.soap300,
          opacity: system.opacity.disabled,
        },

        '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: base.soap300,
          backgroundColor: base.soap300,
        },

        // Focus state for inverse variant
        '&:where(:focus, .focus) ~ div:first-of-type': {
          borderColor: base.blackPepper400,
          ...focusRing({
            width: 2,
            separation: 0,
            animate: false,
            innerColor: cssVar(base.blackPepper400),
            outerColor: cssVar(base.frenchVanilla100),
          }),
        },
        '&:checked:focus ~ div:first-of-type, &:checked.focus ~ div:first-of-type, &:indeterminate:focus ~ div:first-of-type, &:indeterminate.focus ~ div:first-of-type':
          {
            ...focusRing({
              width: 2,
              separation: 2,
              animate: false,
              innerColor: cssVar(base.blackPepper400),
              outerColor: cssVar(base.frenchVanilla100),
            }),
            borderColor: base.frenchVanilla100,
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
      error: {
        '&:not(:where(:focus, .focus)) ~ div:first-of-type': {
          border: `1px solid ${inputVars.errorInner}`,
          boxShadow: `0 0 0 1px ${inputVars.errorInner}, 0 0 0 2px ${inputVars.errorOuter}`,
        },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: 'transparent',
          boxShadow: `
          0 0 0 2px ${base.frenchVanilla100},
          0 0 0 4px ${inputVars.errorInner},
          0 0 0 5px ${inputVars.errorOuter}`,
        },
        '&:not(:where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: inputVars.errorInner,
          },
      },
      alert: {
        '&:not(:where(:focus, .focus)) ~ div:first-of-type': {
          border: `1px solid ${inputVars.alertInner}`,
          boxShadow: `0 0 0 1px ${inputVars.alertInner}, 0 0 0 2px ${inputVars.alertOuter}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: inputVars.alertInner,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: 'transparent',
          boxShadow: `
                0 0 0 2px ${base.frenchVanilla100},
                0 0 0 4px ${inputVars.alertInner},
                0 0 0 5px ${inputVars.alertOuter}`,
        },
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: 'error'},
      styles: {
        '&:not(:where(:focus, .focus)) ~ div:first-of-type': {
          border: `1px solid ${base.soap300}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: base.soap300,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: base.soap300,
        },
      },
    },
    {
      modifiers: {variant: 'inverse', error: 'alert'},
      styles: {
        '&:not(:where(:focus, .focus)) ~ div:first-of-type': {
          border: `1px solid ${base.soap300}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: base.soap300,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: base.soap300,
        },
      },
    },
  ],
});

export const CheckboxInput = createComponent('input')({
  displayName: 'CheckboxInput',
  Component: ({variant, error, ...elemProps}: CheckboxProps, ref, Element) => {
    const {checked, disabled, indeterminate} = elemProps;

    return (
      <Element
        type="checkbox"
        ref={ref}
        aria-checked={indeterminate ? 'mixed' : checked}
        {...handleCsProp(elemProps, [checkboxInputStencil({variant, disabled, error})])}
      />
    );
  },
});
