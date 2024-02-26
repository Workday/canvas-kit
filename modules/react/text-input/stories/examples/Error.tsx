import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Error = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Email</FormField.Label>
      <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      <FormField.Hint>Please enter a valid email.</FormField.Hint>
    </FormField>
  );
};
