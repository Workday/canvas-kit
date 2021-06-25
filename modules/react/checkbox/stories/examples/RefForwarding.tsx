import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';

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
      <Checkbox checked={checked} label="I agree to the terms" onChange={handleChange} ref={ref} />
      <PrimaryButton onClick={handleClick}>Check Agreement to Terms</PrimaryButton>
    </>
  );
};
