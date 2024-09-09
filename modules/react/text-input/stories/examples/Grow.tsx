import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField width="100%">
      <FormField.Label>Street Address</FormField.Label>
      <FormField.Field>
        <FormField.Input width="100%" as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
