import * as React from 'react';
import {styled, Themeable} from '@workday/canvas-kit-labs-react-core';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {borderRadius, inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';

export interface TextInputProps
  extends Themeable,
    GrowthBehavior,
    React.InputHTMLAttributes<HTMLInputElement> {
  error?: ErrorType;
  inputRef?: React.Ref<HTMLInputElement>;
}

const Input = styled('input')<Pick<TextInputProps, 'error' | 'grow' | 'theme'>>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: borderRadius.m,
    boxSizing: 'border-box',
    height: 40,
    minWidth: 280,
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
  ({grow}) =>
    grow && {
      width: '100%',
    },
  ({theme, error}) => {
    return {
      '&:hover': {
        borderColor: theme.palette.neutral.main,
      },
      '&:focus:not([disabled])': {
        borderColor: theme.palette.common.focusOutline,
        boxShadow: `inset 0 0 0 1px ${theme.palette.common.focusOutline}`,
        outline: 'none',
      },
      '&:disabled': {
        backgroundColor: theme.palette.neutral.light,
        borderColor: theme.palette.neutral.dark,
        color: theme.palette.neutral.main,
        '&::placeholder': {
          color: theme.palette.neutral.main,
        },
      },
      ...errorRing(error, theme),
    };
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
