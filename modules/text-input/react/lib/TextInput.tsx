import styled from '@emotion/styled';
import {errorRing, ErrorType, GrowthBehavior} from '@workday/canvas-kit-react-common';
import {borderRadius, inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';
import * as React from 'react';

export interface TextInputProps
  extends GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: ErrorType;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
  width?: number;
  min?: number;
  max?: number;
}

const Input = styled('input')<TextInputProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: 40,
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
  },
  ({error}) => ({
    ...errorRing(error),
  }),
  ({width}) => ({
    minWidth: width || 280,
    width: width || 280,
  }),
  ({grow}) =>
    grow && {
      width: '100%',
    }
);

export default class TextInput extends React.Component<TextInputProps> {
  static ErrorType = ErrorType;

  static defaultProps = {
    type: 'text',
  };

  render() {
    // TODO: Standardize on prop spread location (see #150)
    const {grow, inputRef, error, ...inputProps} = this.props;

    return <Input ref={inputRef} grow={grow} error={error} {...inputProps} />;
  }
}
