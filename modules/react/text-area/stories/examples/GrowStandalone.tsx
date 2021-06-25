import React from 'react';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const GrowStandalone = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return <TextArea grow={true} onChange={handleChange} value={value} />;
};
