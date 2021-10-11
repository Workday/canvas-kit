/** @jsx jsx */
import {jsx} from '@emotion/core';

import {
  borderRadius,
  CSSProperties,
  inputColors,
  spaceNumbers,
  type,
} from '@workday/canvas-kit-react/tokens';
import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {useThemedRing, useThemeRTL} from '@workday/canvas-kit-labs-react/common';

import {TextAreaModelContext} from './TextArea';
import {FormFieldModel, FormField, useFormFieldInput} from '@workday/canvas-kit-labs-react/form-field';

export interface TextAreaFieldProps extends ExtractProps<typeof FormField.Input, never> {
  model?: FormFieldModel;
}

const baseStyles: CSSProperties = {
  ...type.levels.subtext.large,
  border: `1px solid ${inputColors.border}`,
  display: 'block',
  backgroundColor: inputColors.background,
  borderRadius: borderRadius.m,
  boxSizing: 'border-box',
  minHeight: 64,
  minWidth: 280,
  transition: '0.2s box-shadow, 0.2s border-color',
  padding: spaceNumbers.xxs, // Compensate for border
  margin: 0, // Fix Safari
  resize: 'both',
  '&::webkit-resizer': {
    display: 'none',
  },
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
};

export const TextAreaField = createComponent('textarea')({
  displayName: 'TextArea.Field',
  Component: ({model, ...elemProps}: TextAreaFieldProps, ref) => {
    const localModel = useModelContext(TextAreaModelContext, model);

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

    return <FormField.Input as="textarea" ref={ref} css={[themeRTL(baseStyles), focusStyles]} {...elemProps} />;
  },
});
