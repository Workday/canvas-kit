import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Labs/Radio/React',
  component: RadioGroup,
};

export const Default = () => {
  const [value, setValue] = React.useState<string | number>('oyester');
  const handleChange = (value: string | number) => {
    setValue(value);
  };
  return (
    <RadioGroup onChange={handleChange} value={value} name="sea-food">
      <RadioGroup.Button disabled value="fish" label="Fish" />
      <RadioGroup.Button value="prawns" label="Prawns" />
      <RadioGroup.Button value="lobster" label="Lobster" />
      <RadioGroup.Button value="salmon" label="Salmon" />
      <RadioGroup.Button value="oyester" label="Oyester" />
    </RadioGroup>
  );
};
