import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  useFormFieldModel,
  FormFieldModel,
  FormFieldModelConfig,
  FormFieldModelContext,
} from '@workday/canvas-kit-labs-react/form-field';
import {TextInputField} from './TextInputField';
import {TextInputLabel} from './TextInputLabel';
import {TextInputHint} from './TextInputHint';

export const TextInputModelContext = FormFieldModelContext;

export interface TextInputProps extends FormFieldModelConfig {
  model?: FormFieldModel;
  /**
   * Children of the Text Input. Should contain a `<TextInput.Field>`, a `<TextInput.Label>` and an optional `<TextInput.Hint>`
   */
  children: React.ReactNode;
}

export const TextInput = createComponent()({
  displayName: 'TextInput',
  Component: ({children, model, ...config}: TextInputProps) => {
    const value = useDefaultModel(model, config, useFormFieldModel);

    return (
      <TextInputModelContext.Provider value={value}>{children}</TextInputModelContext.Provider>
    );
  },
  subComponents: {
    Field: TextInputField,
    Label: TextInputLabel,
    Hint: TextInputHint,
  },
});
