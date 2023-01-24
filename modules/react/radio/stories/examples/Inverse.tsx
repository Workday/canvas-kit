import React from 'react';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Box} from '@workday/canvas-kit-react/layout';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Box backgroundColor="blueberry400" padding="s">
      <RadioGroup name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio variant="inverse" label="Deep dish" value="deep-dish" />
        <Radio variant="inverse" label="Thin" value="thin" />
        <Radio variant="inverse" label="Gluten free" value="gluten-free" />
        <Radio variant="inverse" label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </Box>
  );
};
