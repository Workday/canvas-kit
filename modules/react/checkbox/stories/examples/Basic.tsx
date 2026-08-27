import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup>
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
