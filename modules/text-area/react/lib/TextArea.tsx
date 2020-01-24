import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {borderRadius, inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';

export interface TextAreaProps
  extends Themeable,
    GrowthBehavior,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
   * The ref to the inner textarea element.
   */
  inputRef?: React.Ref<HTMLTextAreaElement>;
  /**
   * The function called when the TextArea state changes.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
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
  resize: TextAreaResizeDirection;
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

const TextAreaContainer = styled('textarea')<TextAreaProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    minHeight: 64,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
    margin: 0, // Fix Safari
    '&::webkit-resizer': {
      display: 'none',
    },
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:focus:not([disabled])': {
      borderColor: inputColors.focusBorder,
      boxShadow: `inset 0 0 0 1px ${inputColors.focusBorder}`,
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
  },
  ({error}) => ({
    ...errorRing(error),
  }),
  ({resize, grow}) => ({
    width: grow ? '100%' : undefined,
    resize: grow ? TextAreaResizeDirection.Vertical : resize,
  })
);

export default class TextArea extends React.Component<TextAreaProps> {
  static ErrorType = ErrorType;
  static ResizeDirection = TextAreaResizeDirection;

  static defaultProps = {
    resize: TextAreaResizeDirection.Both,
  };

  render() {
    const {grow, inputRef, resize, ...inputProps} = this.props;

    return <TextAreaContainer ref={inputRef} grow={grow} resize={resize} {...inputProps} />;
  }
}
