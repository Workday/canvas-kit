import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput>
        <TextInput.Label isRequiredLabel={'required'}>Email</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} required />
      </TextInput>
    </VStack>
  );
};
