import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          disabled={true}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};
