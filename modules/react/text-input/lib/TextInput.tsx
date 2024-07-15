import * as React from 'react';
import {
  createComponent,
  GrowthBehavior,
  ErrorType,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem, calc} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '../../layout';

export interface TextInputProps extends Themeable, GrowthBehavior {
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
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    height: system.space.x10,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: system.space.x2, // Compensate for border
    margin: px2rem(0), // Fix Safari
    width: cssVar(width),
    minWidth: cssVar(width, calc.add(calc.multiply(system.space.x20, 3), system.space.x10)),
    color: system.color.text.default,
    '::-ms-clear': {
      display: 'none',
    },
    '&::placeholder': {
      color: system.color.text.hint,
    },
    '&:hover': {
      borderColor: system.color.border.input.strong,
    },
    '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
      borderColor: brand.common.focusOutline,
      boxShadow: `inset 0 0 0 1px ${cssVar(brand.common.focusOutline)}`,
      outline: 'none',
    },
    '&:disabled, .disabled': {
      backgroundColor: system.color.bg.alt.softer,
      borderColor: system.color.border.input.strong,
      color: system.color.text.disabled,
      '&::placeholder': {
        color: system.color.text.disabled,
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
        borderColor: brand.error.base,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.error.base}`,
        '&:hover, &.hover': {
          borderColor: brand.error.base,
        },
        '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
          borderColor: brand.error.base,
          boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.error.base},
        0 0 0 2px ${system.color.border.inverse},
        0 0 0 4px ${brand.common.focusOutline}`,
        },
      },
      alert: {
        borderColor: brand.alert.darkest,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.alert.base}`,
        '&:hover, &.hover': {
          borderColor: brand.alert.darkest,
        },
        '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
          borderColor: brand.alert.darkest,
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.alert.base},
        0 0 0 2px ${system.color.border.inverse},
        0 0 0 4px ${brand.common.focusOutline}`,
        },
      },
    },
  },
});

export const TextInput = createComponent('input')({
  displayName: 'TextInput',
  Component: ({grow, error, width, ...elemProps}: TextInputProps, ref, Element) => (
    <Element
      type="text"
      ref={ref}
      {...mergeStyles(
        elemProps,
        textInputStencil({width: typeof width === 'number' ? px2rem(width) : width, grow, error})
      )}
    />
  ),
  subComponents: {
    ErrorType,
  },
});
