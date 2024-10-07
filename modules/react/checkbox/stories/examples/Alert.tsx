import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Alert = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="alert">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormField.Hint>You must agree to the terms before proceeding</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};
