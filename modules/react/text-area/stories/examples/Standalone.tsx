import React from 'react';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Standalone = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return <TextArea onChange={handleChange} value={value} />;
};
