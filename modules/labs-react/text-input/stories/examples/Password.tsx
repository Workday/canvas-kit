import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';

export const Password = () => {
  const [value, setValue] = React.useState('SuperSecret1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput orientation='vertical'>
      <TextInput.Label>Password</TextInput.Label>
      <TextInput.Field onChange={handleChange} value={value} type="password" />
    </TextInput>
  );
};
