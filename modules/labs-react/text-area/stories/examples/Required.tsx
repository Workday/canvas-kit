import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea isRequired={true} orientation='vertical'>
      <TextArea.Label>Leave a review</TextArea.Label>
      <TextArea.Field onChange={handleChange} value={value} />
    </TextArea>
  );
};
