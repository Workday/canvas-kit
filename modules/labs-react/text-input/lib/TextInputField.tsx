import React from 'react';

import {borderRadius, inputColors, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  errorRing,
  ErrorType,
  ExtractProps,
  styled,
  StyledType,
  Themeable,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {TextInputModelContext} from './TextInput';
import {TextInputModel} from './useTextInputModel';

export interface TextInputFieldProps extends ExtractProps<typeof Box, never>, Themeable {
  model?: TextInputModel;
}

const StyledBox = styled(Box as typeof TextInputField)<
  Pick<TextInputFieldProps, 'theme'> & Pick<TextInputModel['state'], 'hasError'> & StyledType
>(
  {
    ...type.levels.subtext.large,
    transition: '0.2s box-shadow, 0.2s border-color',
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
  ({theme, hasError}) => {
    return {
      '&:focus:not([disabled])': {
        borderColor: theme.canvas.palette.common.focusOutline,
        boxShadow: `inset 0 0 0 1px ${theme.canvas.palette.common.focusOutline}`,
        outline: 'none',
      },
      ...errorRing(hasError, theme),
    };
  }
);

export const TextInputField = createComponent('input')({
  displayName: 'TextInput.Field',
  Component: ({model, theme, ...elemProps}: TextInputFieldProps, ref) => {
    const {state} = useModelContext(TextInputModelContext, model);

    return (
      <StyledBox
        as="input"
        ref={ref}
        type="text"
        hasError={state.hasError}
        theme={theme}
        aria-invalid={state.hasError === ErrorType.Error ? true : undefined}
        aria-describedby={state.hintId}
        id={state.inputId}
        padding={space.xxs}
        margin={0}
        minWidth="280px"
        border={`1px solid ${inputColors.border}`}
        backgroundColor={inputColors.background}
        borderRadius={borderRadius.m}
        display="block"
        height="40px"
        {...elemProps}
      />
    );
  },
});
