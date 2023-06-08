import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box backgroundColor="blueberry400" padding="s">
      <RadioGroup name="crust" onChange={handleChange} initialValue={value}>
        <RadioGroup.Radio variant="inverse" value="deep-dish">
          Deep Dish
        </RadioGroup.Radio>
        <RadioGroup.Radio variant="inverse" value="thin">
          Thin
        </RadioGroup.Radio>
        <RadioGroup.Radio variant="inverse" value="gluten-free">
          Gluten Free
        </RadioGroup.Radio>
        <RadioGroup.Radio variant="inverse" value="cauliflower">
          Cauliflower
        </RadioGroup.Radio>
      </RadioGroup>
    </Box>
  );
};
