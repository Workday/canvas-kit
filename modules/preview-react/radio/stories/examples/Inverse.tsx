import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  containerStyles: createStyles({
    backgroundColor: system.color.bg.primary.default,
    padding: system.space.x4,
  }),
  formFieldStyles: createStyles({
    legend: {
      color: system.color.text.inverse,
    },
  }),
};

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box cs={styleOverrides.containerStyles}>
      <RadioGroup name="crust-inverse" onChange={handleChange} value={value}>
        <RadioGroup.RadioButton variant="inverse" value="deep-dish">
          Deep dish
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="thin">
          Thin
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="gluten-free">
          Gluten free
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="cauliflower">
          Cauliflower
        </RadioGroup.RadioButton>
      </RadioGroup>
    </Box>
  );
};
