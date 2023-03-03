import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField, useFormFieldOrientation} from '@workday/canvas-kit-preview-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useTextInputModel} from './hooks';
import {TextInputField} from './TextInputField';

export interface TextInputProps extends ExtractProps<typeof FormField, never> {
  /**
   * Children of the Text Input. Should contain a `<TextInput.Field>`, a `<TextInput.Label>` and an optional `<TextInput.Hint>`
   */
  children: React.ReactNode;
}

export const TextInput = createContainer('div')({
  displayName: 'TextInput',
  modelHook: useTextInputModel,
  subComponents: {
    Field: TextInputField,
    Label: FormField.Label,
    Hint: FormField.Hint,
  },
})<ExtractProps<typeof FormField, never>>(({children, orientation, ...elemProps}, Element) => {
  const layoutProps = useFormFieldOrientation(orientation);

  return (
    <Flex as={Element} {...layoutProps} {...elemProps}>
      {children}
    </Flex>
  );
});
