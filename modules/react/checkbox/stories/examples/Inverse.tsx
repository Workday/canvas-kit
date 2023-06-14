import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Inverse = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Flex gap="s" backgroundColor="blueberry400" padding="s">
      <Checkbox
        variant="inverse"
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </Flex>
  );
};
