import * as React from 'react';
import {
  createComponent,
  GrowthBehavior,
  ErrorType,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem, calc} from '@workday/canvas-kit-styling';
import {system, brand} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
export type ValueOf<T> = T[keyof T];

export interface TextAreaProps extends Themeable, GrowthBehavior {
  /**
   * If true, set the TextArea to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type of error associated with the TextArea (if applicable).
   */
  error?: ErrorType;
  /**
   * The function called when the TextArea state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * The placeholder text of the TextArea.
   */
  placeholder?: string;
  /**
   * If true, set the TextArea to read-only. The user will be unable to interact with the TextArea.
   * @default false
   */
  readOnly?: boolean;
  /**
   * The resize constraints of the TextArea.
   * @default TextArea.ResizeDirection.Both
   */
  resize?: ValueOf<typeof TextAreaResizeDirection>;
  /**
   * The value of the TextArea.
   */
  value?: any;
}

export const TextAreaResizeDirection = {
  None: 'none' as 'none',
  Both: 'both' as 'both',
  Horizontal: 'horizontal' as 'horizontal',
  Vertical: 'vertical' as 'vertical',
};

export const textAreaStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    display: 'block',
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    minHeight: system.space.x16,
    minWidth: calc.add(calc.multiply(system.space.x20, 3), system.space.x10),
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: system.space.x2, // Compensate for border
    margin: px2rem(0), // Fix Safari
    color: system.color.text.default,
    '&::webkit-resizer': {
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
  },
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
    resize: {
      both: {
        resize: 'both',
      },
      horizontal: {
        resize: 'horizontal',
      },
      vertical: {
        resize: 'vertical',
      },
      none: {
        resize: 'none',
      },
    },
  },
});

export const TextArea = createComponent('textarea')({
  displayName: 'TextArea',
  Component: (
    {resize = TextAreaResizeDirection.Both, grow, ...elemProps}: TextAreaProps,
    ref,
    Element
  ) => (
    <Element
      ref={ref}
      {...mergeStyles(elemProps, textAreaStencil({error: elemProps.error, grow, resize}))}
    />
  ),
  subComponents: {
    ErrorType,
    ResizeDirection: TextAreaResizeDirection,
  },
});
