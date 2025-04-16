import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField, useFormFieldModel, formFieldStencil} from '@workday/canvas-kit-react/form-field';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

import {TextInputField} from './TextInputField';

/**
 * @deprecated ⚠️ `TextInputProps` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
export interface TextInputProps extends ExtractProps<typeof FormField, never> {
  /**
   * Children of the Text Input. Should contain a `<TextInput.Field>`, a `<TextInput.Label>` and an optional `<TextInput.Hint>`
   */
  children: React.ReactNode;
}
/**
 * @stencil formFieldStencil
 * @deprecated ⚠️ `TextInput` in Preview has been deprecated and will be removed in a future major version. Please use [`FormField` in Preview](https://workday.github.io/canvas-kit/?path=/story/preview-inputs-form-field--basic) instead.
 */
export const TextInput = createContainer('div')({
  displayName: 'TextInput',
  modelHook: useFormFieldModel,
  subComponents: {
    Field: TextInputField,
    Label: FormField.Label,
    Hint: FormField.Hint,
  },
})<ExtractProps<typeof FormField, never>>(
  ({children, orientation, grow, ...elemProps}, Element, model) => {
    return (
      <Element
        {...mergeStyles(
          elemProps,
          formFieldStencil({
            grow,
            orientation: orientation,
            error: model.state.error,
            required: model.state.isRequired,
          })
        )}
      >
        {children}
      </Element>
    );
  }
);
