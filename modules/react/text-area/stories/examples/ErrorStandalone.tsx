import React from 'react';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const ErrorStandalone = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return <TextArea error={TextArea.ErrorType.Error} onChange={handleChange} value={value} />;
};
