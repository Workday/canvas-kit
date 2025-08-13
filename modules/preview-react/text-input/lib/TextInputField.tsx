import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {brand} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

import {useTextInputField, useTextInputModel} from './hooks';
import {TextInput, textInputStencil} from '@workday/canvas-kit-react/text-input';

const textInputFieldStencil = createStencil({
  extends: textInputStencil,
  base: {},
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
  return (
    <FormField.Input
      as={TextInput}
      {...mergeStyles(elemProps, [textInputFieldStencil({error: model.state.error})])}
    />
  );
});
