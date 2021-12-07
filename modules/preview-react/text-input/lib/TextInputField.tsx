/** @jsx jsx */
import {jsx} from '@emotion/core';

import {
  borderRadius,
  CSSProperties,
  inputColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {createComponent, ExtractProps, useModelContext, useTheme} from '@workday/canvas-kit-react/common';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {TextInputModelContext} from './TextInput';
import {useTextInputField, TextInputModel} from './hooks';

export interface TextInputFieldProps extends ExtractProps<typeof FormField.Input, never> {
  model?: TextInputModel;
}

const baseStyles: CSSProperties = {
  ...type.levels.subtext.large,
  transition: '0.2s box-shadow, 0.2s border-color',
  '&::placeholder': {
    color: inputColors.placeholder,
  },
  '&:hover': {
    borderColor: inputColors.hoverBorder,
  },
  '&:focus:not([disabled])': {
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
};

export const TextInputField = createComponent('input')({
  displayName: 'TextInput.Field',
  Component: ({model, ...elemProps}: TextInputFieldProps, ref) => {
    const localModel = useModelContext(TextInputModelContext, model);
    const props = useTextInputField(localModel, elemProps, ref);

    const theme = useTheme();
    const errorRing = useThemedRing('error');

    const focusStyles = localModel.state.hasError
      ? errorRing
      : {
          '&:focus:not([disabled])': {
            borderColor: theme.canvas.palette.common.focusOutline,
            boxShadow: `inset 0 0 0 1px ${theme.canvas.palette.common.focusOutline}`,
          },
        };

    return (
      <FormField.Input
        as="input"
        css={[baseStyles, focusStyles]}
        padding={space.xxs}
        margin={0}
        display='block'
        height='40px'
        minWidth='280px'
        border={`1px solid ${inputColors.border}`}
        backgroundColor={inputColors.background}
        borderRadius={borderRadius.m}
        {...props}
      />
    );
  },
});
