import React from 'react';

import {createComponent, ExtractProps, useDefaultModel} from '@workday/canvas-kit-react/common';
import {
  FormField,
  FormFieldModelContext,
  useFormFieldOrientation,
} from '@workday/canvas-kit-preview-react/form-field';
import {Stack} from '@workday/canvas-kit-react/layout';

import {useTextInputModel, TextInputModel} from './hooks';
import {TextInputField} from './TextInputField';
import {TextInputLabel} from './TextInputLabel';
import {TextInputHint} from './TextInputHint';

export const TextInputModelContext = FormFieldModelContext;

export interface TextInputProps extends ExtractProps<typeof FormField, never> {
  model?: TextInputModel;
  /**
   * Children of the Text Input. Should contain a `<TextInput.Field>`, a `<TextInput.Label>` and an optional `<TextInput.Hint>`
   */
  children: React.ReactNode;
}

export const TextInput = createComponent()({
  displayName: 'TextInput',
  Component: ({children, model, orientation, ...props}: TextInputProps, ref) => {
    const {hasError, id, isRequired, ...elemProps} = props;
    const value = useDefaultModel(model, {hasError, id, isRequired}, useTextInputModel);

    const layoutProps = useFormFieldOrientation(orientation);

    return (
      <TextInputModelContext.Provider value={value}>
        <Stack ref={ref} {...layoutProps} {...elemProps}>
          {children}
        </Stack>
      </TextInputModelContext.Provider>
    );
  },
  subComponents: {
    Field: TextInputField,
    Label: TextInputLabel,
    Hint: TextInputHint,
  },
});
