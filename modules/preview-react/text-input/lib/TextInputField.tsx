/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import {
  borderRadius,
  CSSProperties,
  inputColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  ExtractProps,
  useTheme,
  useThemedRing,
} from '@workday/canvas-kit-react/common';
import {FormField, useFormFieldModel} from '@workday/canvas-kit-preview-react/form-field';

import {useTextInputField} from './hooks';

const baseStyles: CSSProperties = {
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

export const TextInputField = createSubcomponent('input')({
  displayName: 'TextInput.Field',
  modelHook: useFormFieldModel,
  elemPropsHook: useTextInputField,
})<ExtractProps<typeof FormField.Input, never>>((elemProps, Element, model) => {
  const theme = useTheme();
  const errorRing = useThemedRing('error');

  const focusStyles = model.state.hasError
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
      {...type.levels.subtext.large}
      css={[baseStyles, focusStyles]}
      padding={space.xxs}
      margin={0}
      display="block"
      height="40px"
      minWidth="280px"
      border={`1px solid ${inputColors.border}`}
      backgroundColor={inputColors.background}
      borderRadius={borderRadius.m}
      {...elemProps}
    />
  );
});
