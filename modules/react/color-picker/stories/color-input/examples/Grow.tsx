import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField cs={{width: '100%'}}>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input
          cs={{width: '100%'}}
          as={ColorInput}
          onChange={handleChange}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};
