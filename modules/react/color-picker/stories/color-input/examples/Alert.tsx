import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Alert = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField
      error={FormField.ErrorType.Alert}
      hintId="hint-alert"
      hintText="Please select a background color."
      label="Background Color"
    >
      <ColorInput onChange={handleChange} value={value} />
    </FormField>
  );
};
