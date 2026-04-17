import React from 'react';

import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Checked = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} showCheck={true} value={value} />
      </FormField.Field>
    </FormField>
  );
};
