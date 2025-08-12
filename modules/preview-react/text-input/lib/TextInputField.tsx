import {
  createSubcomponent,
  ExtractProps,
  useTheme,
  useThemedRing,
} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {brand, system} from '@workday/canvas-tokens-web';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

import {useTextInputField, useTextInputModel} from './hooks';

const textInputFieldStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    transition: '0.2s box-shadow, 0.2s border-color',
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    padding: system.space.x2,
    margin: 0,
    display: 'block',
    height: system.space.x10,
    minWidth: px2rem(280),
    borderRadius: system.shape.x1,
    backgroundColor: system.color.bg.default,
    '&::placeholder': {
      color: system.color.text.default,
    },
    '&:hover': {
      borderColor: system.color.border.input.strong,
    },
    '&:focus:not([disabled])': {
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: system.color.bg.alt.softer,
      borderColor: system.color.border.input.disabled,
      color: system.color.fg.disabled,
      '&::placeholder': {
        color: system.color.fg.disabled,
      },
    },
    '::-ms-clear': {
      display: 'none',
    },
  },
  modifiers: {
    error: {
      error: {
        backgroundColor: brand.error.lightest,
      },
      alert: {
        backgroundColor: brand.alert.lightest,
      },
    },
  },
});

/**
 * @deprecated ⚠️ `TextInputField` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-form-field--docs) instead.
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
  console.log(model.state.error);
  return (
    <FormField.Input
      as="input"
      {...mergeStyles(elemProps, [textInputFieldStencil({error: model.state.error}), focusStyles])}
    />
  );
});
