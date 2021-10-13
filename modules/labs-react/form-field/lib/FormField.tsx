import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  useFormFieldModel,
  FormFieldModel,
  FormFieldModelConfig,
} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';

export const FormFieldModelContext = React.createContext<FormFieldModel>({} as any);

export interface FormFieldProps extends FormFieldModelConfig {
  model?: FormFieldModel;
  /**
   * Children of the Text Input. Should contain a `<FormField.Input>`, a `<FormField.Label>` and an optional `<FormField.Hint>`
   */
  children: React.ReactNode;
}

export const FormField = createComponent()({
  displayName: 'FormField',
  Component: ({children, model, ...config}: FormFieldProps) => {
    const value = useDefaultModel(model, config, useFormFieldModel);

    return (
      <FormFieldModelContext.Provider value={value}>{children}</FormFieldModelContext.Provider>
    );
  },
  subComponents: {
    Input: FormFieldInput,
    Label: FormFieldLabel,
    Hint: FormFieldHint,
  },
});
