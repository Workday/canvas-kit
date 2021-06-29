import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <FormField label="Terms">
        <Checkbox
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
          ref={ref}
        />
      </FormField>
      <PrimaryButton onClick={handleClick}>Check Agreement to Terms</PrimaryButton>
    </>
  );
};
