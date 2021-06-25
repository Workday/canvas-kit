import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Standalone = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextInput onChange={handleChange} value={value} />;
};
