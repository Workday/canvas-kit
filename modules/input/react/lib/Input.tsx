import * as React from 'react';
import styled from 'react-emotion';
import {GrowthBehavior, ErrorType, errorRing} from '@workday/canvas-kit-react-common';
import {inputColors, spacingNumbers, type} from '@workday/canvas-kit-react-core';

export interface InputProps extends GrowthBehavior, React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: ErrorType;
  hasIcon?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: any;
}

const StyledInput = styled('input')<InputProps>(
  {
    ...type.body,
    border: `1px solid ${inputColors.border}`,
    display: 'block',
    backgroundColor: inputColors.background,
    borderRadius: 4,
    boxSizing: 'border-box',
    height: 40,
    minWidth: 280,
    transition: '0.2s box-shadow, 0.2s border-color',
    padding: spacingNumbers.xxs, // Compensate for border
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
  ({hasIcon}) => {
    // Icon padding left + icon width + icon padding right
    const iconPadding = spacingNumbers.xxxs + spacingNumbers.m + spacingNumbers.xxs;

    return hasIcon ? {paddingRight: iconPadding} : {};
  },
  ({grow}) =>
    grow && {
      width: '100%',
    }
);

export default class Input extends React.Component<InputProps> {
  public render() {
    const {grow, inputRef, error, hasIcon, ...inputProps} = this.props;

    return (
      <StyledInput
        hasIcon={hasIcon}
        innerRef={inputRef}
        grow={grow}
        error={error}
        {...inputProps}
      />
    );
  }
}
