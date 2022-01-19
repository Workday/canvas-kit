/** @jsx jsx */
import {jsx} from '@emotion/core';

import {
  borderRadius,
  CSSProperties,
  inputColors,
  spaceNumbers,
  type,
} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  ExtractProps,
  useModelContext,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

import {TextAreaModelContext} from './TextArea';
import {TextAreaModel} from './hooks';

export interface TextAreaFieldProps extends ExtractProps<typeof FormField.Input, never> {
  model?: TextAreaModel;
}

const baseStyles: CSSProperties = {
  ...type.levels.subtext.large,
  transition: '0.2s box-shadow, 0.2s border-color',
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
        as="textarea"
        ref={ref}
        css={[baseStyles, focusStyles]}
        {...elemProps}
        border={`1px solid ${inputColors.border}`}
        display="block"
        backgroundColor={inputColors.background}
        borderRadius={borderRadius.m}
        minHeight={64}
        minWidth={280}
        padding={spaceNumbers.xxs} // Compensate for border
        margin={0} // Fix Safari
      />
    );
  },
});
