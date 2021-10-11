/** @jsx jsx */
import {jsx} from '@emotion/core';

import {
  borderRadius,
  CSSProperties,
  inputColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {useThemedRing, useThemeRTL} from '@workday/canvas-kit-labs-react/common';

import {TextInputModelContext} from './TextInput';
import {FormField, FormFieldModel} from '@workday/canvas-kit-labs-react/form-field';
import {useTextInputField} from './hooks/useTextInputField';

export interface TextInputFieldProps extends ExtractProps<typeof FormField.Input, never> {
  model?: FormFieldModel;
}

const baseStyles: CSSProperties = {
  ...type.levels.subtext.large,
  padding: space.xxs,
  margin: 0,
  minWidth: '280px',
  border: `1px solid ${inputColors.border}`,
  backgroundColor: inputColors.background,
  borderRadius: borderRadius.m,
  display: 'block',
  height: '40px',
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

    const {themeRTL, theme} = useThemeRTL();
    const errorRing = useThemedRing('error');

    const focusStyles = localModel.state.hasError
      ? errorRing
      : themeRTL({
          '&:focus:not([disabled])': {
            borderColor: theme.canvas.palette.common.focusOutline,
            boxShadow: `inset 0 0 0 1px ${theme.canvas.palette.common.focusOutline}`,
          },
        });

    return <FormField.Input as="input" css={[themeRTL(baseStyles), focusStyles]} {...props} />;
  },
});
