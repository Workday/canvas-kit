import {
  borderRadius,
  colors,
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
import {FormField} from '@workday/canvas-kit-react/form-field';

import {useTextInputField, useTextInputModel} from './hooks';

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
    borderColor: colors.licorice100,
    color: inputColors.disabled.text,
    '&::placeholder': {
      color: inputColors.disabled.text,
    },
  },
  '::-ms-clear': {
    display: 'none',
  },
};

/**
 * @deprecated ⚠️ `TextInputField` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
export const TextInputField = createSubcomponent('input')({
  displayName: 'TextInput.Field',
  modelHook: useTextInputModel,
  elemPropsHook: useTextInputField,
})<ExtractProps<typeof FormField.Input, never>>((elemProps, Element, model) => {
  const theme = useTheme();
  const errorRing = useThemedRing('error');

  const focusStyles =
    model.state.error === 'error'
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
      cs={[baseStyles, focusStyles]}
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
