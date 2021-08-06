import React from 'react';
import {TextInput, useTextInputModel} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';

export const Password = () => {
  const [value, setValue] = React.useState('SuperSecret1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useTextInputModel();

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput model={model}>
        <TextInput.Label>Password</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} model={model} type="password" />
      </TextInput>
    </VStack>
  );
};
