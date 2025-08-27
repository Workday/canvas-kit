import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please select a background color.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
