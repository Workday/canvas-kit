import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

export const LabelPositionHorizontal = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <HStack spacing="l" alignItems="center">
      <TextInput>
        <TextInput.Label>Email</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} />
      </TextInput>
    </HStack>
  );
};
