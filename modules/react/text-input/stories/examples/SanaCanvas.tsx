import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const SanaCanvas = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField data-theme="sana-canvas">
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};
