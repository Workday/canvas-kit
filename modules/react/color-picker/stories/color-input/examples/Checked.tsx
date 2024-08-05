import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Checked = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Input as={ColorInput} onChange={handleChange} showCheck={true} value={value} />
    </FormField>
  );
};
