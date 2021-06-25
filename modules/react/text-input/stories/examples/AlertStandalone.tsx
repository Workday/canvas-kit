import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const AlertStandalone = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextInput error={TextInput.ErrorType.Alert} onChange={handleChange} value={value} />;
};
