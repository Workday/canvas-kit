import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs">
      <TextInput>
        <TextInput.Label>Street Address</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} />
      </TextInput>
    </VStack>
  );
};
