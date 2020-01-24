import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {errorRing, ErrorType, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {borderRadius, inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import * as React from 'react';

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

const Input = styled('input')<Pick<TextInputProps, 'error' | 'grow' | 'width' | 'height'>>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
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
  ({error}) => ({
    ...errorRing(error),
  }),
  ({width}) => ({
    minWidth: width || 280,
    width: width || 280,
  }),
  ({height}) => ({
    height: height || 40,
  }),
  ({grow}) =>
    grow && {
      width: '100%',
    }
);

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    inputRef: React.createRef<HTMLInputElement>(),
  };

  render() {
    // TODO: Standardize on prop spread location (see #150)
    const {grow, inputRef, error, ...inputProps} = this.props;

    return <Input type="text" ref={inputRef} grow={grow} error={error} {...inputProps} />;
  }
}
