import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow={true} label="Background Color">
      <ColorInput onChange={handleChange} value={value} />
    </FormField>
  );
};
