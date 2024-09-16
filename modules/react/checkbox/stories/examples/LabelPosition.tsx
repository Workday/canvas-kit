import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Terms</FormField.Label>
      <FormField.Input
        as={Checkbox}
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </FormField>
  );
};
