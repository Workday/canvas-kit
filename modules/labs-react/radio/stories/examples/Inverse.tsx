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
        <RadioGroup.Button variant="inverse">
          <RadioGroup.Input value="deep-dish" />
          <RadioGroup.Label>Deep Dish</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button variant="inverse">
          <RadioGroup.Input value="thin" />
          <RadioGroup.Label>Thin</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button variant="inverse">
          <RadioGroup.Input value="gluten-free" />
          <RadioGroup.Label>Gluten free (sold out)</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button variant="inverse">
          <RadioGroup.Input value="cauliflower" />
          <RadioGroup.Label>Cauliflower</RadioGroup.Label>
        </RadioGroup.Button>
      </RadioGroup>
    </Box>
  );
};
