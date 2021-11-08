import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea orientation='vertical'>
      <TextArea.Label>Leave a review</TextArea.Label>
      <TextArea.Field
        placeholder="Let us know how we did!"
        onChange={handleChange}
        value={value}
      />
    </TextArea>
  );
};
