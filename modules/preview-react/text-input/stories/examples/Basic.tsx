import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput gap="xxxs" orientation="vertical">
      <TextInput.Label>Email</TextInput.Label>
      <TextInput.Field onChange={handleChange} value={value} />
    </TextInput>
  );
};
