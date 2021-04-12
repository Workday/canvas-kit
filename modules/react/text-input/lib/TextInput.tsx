import * as React from 'react';
import {
  GrowthBehavior,
  ErrorType,
  errorRing,
  styled,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {borderRadius, inputColors, spaceNumbers, type} from '@workday/canvas-kit-react/tokens';

export interface TextInputProps
  extends Themeable,
    GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The type of error associated with the TextInput (if applicable).
   */
  error?: ErrorType;
  /**
   * The ref to the inner text input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
}

const Input = styled('input')<Pick<TextInputProps, 'error' | 'grow' | 'width' | 'theme'>>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: 40,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spaceNumbers.xxs, // Compensate for border
    margin: 0, // Fix Safari
    '&::placeholder': {
      color: inputColors.placeholder,
    },
    '&:hover': {
      borderColor: inputColors.hoverBorder,
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
    '::-ms-clear': {
      display: 'none',
    },
  },
  ({width}) => ({
    minWidth: width || 280,
    width,
  }),
  ({grow}) =>
    grow && {
      width: '100%',
    },
  ({theme, error}) => {
    return {
      '&:focus:not([disabled])': {
        borderColor: theme.canvas.palette.common.focusOutline,
        boxShadow: `inset 0 0 0 1px ${theme.canvas.palette.common.focusOutline}`,
        outline: 'none',
      },
      ...errorRing(error, theme),
    };
  }
);

class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  render() {
    // TODO: Standardize on prop spread location (see #150)
    const {inputRef, grow, error, ...inputProps} = this.props;

    return <Input type="text" ref={inputRef} grow={grow} error={error} {...inputProps} />;
  }
}

TextInput.ErrorType = ErrorType;

export default TextInput;
