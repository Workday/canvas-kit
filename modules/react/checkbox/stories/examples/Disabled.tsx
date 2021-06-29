import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField label="Terms">
      <Checkbox
        checked={checked}
        disabled={true}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </FormField>
  );
};
