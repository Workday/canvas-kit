import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput>
      <TextInput.Label isVisuallyHidden={true}>Email</TextInput.Label>
      <TextInput.Field onChange={handleChange} value={value} />
    </TextInput>
  );
};
