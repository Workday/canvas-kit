import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Alert = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField
      error={FormField.ErrorType.Alert}
      hintId="hint-alert"
      hintText="Please enter a valid email."
      label="Email"
    >
      <TextInput onChange={handleChange} value={value} />
    </FormField>
  );
};
