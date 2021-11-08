import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';

export const LabelPositionVertical = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput orientation='vertical' spacing='m'>
      <TextInput.Label>Email</TextInput.Label>
      <TextInput.Field onChange={handleChange} value={value} />
    </TextInput>
  );
};
