import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea orientation='vertical'>
      <TextArea.Label>Leave a review</TextArea.Label>
      <TextArea.Field disabled onChange={handleChange} value={value} />
    </TextArea>
  );
};
