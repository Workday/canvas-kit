import React from 'react';

import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormFieldGroup error="caution">
      <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.Input
          as={Checkbox}
          checked={checked}
          error={Checkbox.ErrorType.Caution}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormFieldGroup.Hint>You must agree to the terms before proceeding</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};
