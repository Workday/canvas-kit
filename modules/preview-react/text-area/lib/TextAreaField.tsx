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
import {useTextInputModel} from '@workday/canvas-kit-preview-react/text-input';

const baseStyles: CSSProperties = {
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
    borderColor: colors.licorice100,
    color: inputColors.disabled.text,
    '&::placeholder': {
      color: inputColors.disabled.text,
    },
  },
};

/**
 * @deprecated ⚠️ `TextAreaField` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField`](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-form-field--docs) in Preview instead.
 */
export const TextAreaField = createSubcomponent('textarea')({
  displayName: 'TextArea.Field',
  modelHook: useTextInputModel,
})<ExtractProps<typeof FormField.Input, never>>(({...elemProps}, Element, model) => {
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
      as={Element}
      {...type.levels.subtext.large}
      cs={[baseStyles, focusStyles]}
      {...elemProps}
      border={`1px solid ${inputColors.border}`}
      display="block"
      backgroundColor={inputColors.background}
      borderRadius={borderRadius.m}
      minHeight={64}
      minWidth={280}
      padding={space.xxs} // Compensate for border
      margin={0} // Fix Safari
    />
  );
});
