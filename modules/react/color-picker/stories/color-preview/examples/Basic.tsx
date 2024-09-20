import React from 'react';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export const Basic = () => {
  return (
    <FormField>
      <FormField.Label>Current Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorPreview} value="#00ffcc" />
      </FormField.Field>
    </FormField>
  );
};
