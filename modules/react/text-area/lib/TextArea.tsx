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
import {borderRadius, inputColors, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

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
  resize?: TextAreaResizeDirection;
  /**
   * The value of the TextArea.
   */
  value?: any;
}

export enum TextAreaResizeDirection {
  None = 'none',
  Both = 'both',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

const StyledTextArea = styled('textarea')<TextAreaProps & StyledType>(
  ({theme, error}) => ({
    ...type.levels.subtext.large,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    minHeight: 64,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spaceNumbers.xxs, // Compensate for border
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

export default TextArea;
