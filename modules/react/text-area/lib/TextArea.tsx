import * as React from 'react';
import {
  createComponent,
  StyledType,
  GrowthBehavior,
  ErrorType,
  errorRing,
  styled,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {borderRadius, inputColors, space, type} from '@workday/canvas-kit-react/tokens';
import {system, brand} from '@workday/canvas-tokens-web';
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

const StyledTextArea = styled('textarea')<TextAreaProps & StyledType>(
  ({theme, error}) => ({
    ...type.levels.subtext.large,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    minHeight: space.xxl,
    minWidth: `calc((${space.xxxl} * 3) + ${space.xl})`,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: space.xxs, // Compensate for border
    margin: 0, // Fix Safari
    '&::webkit-resizer': {
      display: 'none',
    },
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:hover': {
      borderColor: inputColors.hoverBorder,
    },
    '&:focus:not([disabled])': {
      borderColor: theme.canvas.palette.common.focusOutline,
      boxShadow: `inset 0 0 0 1px ${theme.canvas.palette.common.focusOutline}`,
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: inputColors.disabled.background,
      borderColor: inputColors.disabled.border,
      color: inputColors.disabled.text,
      '&::placeholder': {
        color: inputColors.disabled.text,
      },
    },
    ...errorRing(error, theme),
  }),

  ({resize, grow}) => ({
    width: grow ? '100%' : undefined,
    resize: grow ? TextAreaResizeDirection.Vertical : resize,
  })
);

export const textAreaStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    display: 'block',
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    minHeight: system.space.x16,
    minWidth: `calc((${cssVar(system.space.x20)} * ${px2rem(3)}) + ${cssVar(system.space.x10)})`,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: system.space.x2, // Compensate for border
    margin: px2rem(0), // Fix Safari
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
      borderColor: brand.primary.base,
      boxShadow: `inset 0 0 0 1px ${cssVar(brand.primary.base)}`,
      outline: 'none',
    },
    '&:disabled, .disabled': {
      backgroundColor: inputColors.disabled.background,
      borderColor: system.color.border.input.strong,
      color: inputColors.disabled.text,
      '&::placeholder': {
        color: inputColors.disabled.text,
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
  },
});

export const TextArea = createComponent('textarea')({
  displayName: 'TextArea',
  Component: (
    {resize = TextAreaResizeDirection.Both, grow, ...elemProps}: TextAreaProps,
    ref,
    Element
  ) => <StyledTextArea ref={ref} as={Element} grow={grow} resize={resize} {...elemProps} />,
  subComponents: {
    ErrorType,
    ResizeDirection: TextAreaResizeDirection,
  },
});
