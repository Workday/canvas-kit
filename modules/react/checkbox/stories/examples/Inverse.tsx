import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {HStack} from '@workday/canvas-kit-react/layout';

export const Inverse = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <HStack spacing="s" backgroundColor="blueberry400" padding="s">
      <Checkbox
        variant="inverse"
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </HStack>
  );
};
