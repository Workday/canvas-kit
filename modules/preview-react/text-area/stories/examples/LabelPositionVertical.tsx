import React from 'react';
import {TextArea} from '@workday/canvas-kit-preview-react/text-area';

export const LabelPositionVertical = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea orientation="vertical" gap="xxxs">
      <TextArea.Label>Leave a review</TextArea.Label>
      <TextArea.Field onChange={handleChange} value={value} />
    </TextArea>
  );
};
