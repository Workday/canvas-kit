import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const ErrorStandalone = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextInput error={TextInput.ErrorType.Error} onChange={handleChange} value={value} />;
};
