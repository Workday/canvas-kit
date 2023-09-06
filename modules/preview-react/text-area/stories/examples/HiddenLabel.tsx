import React from 'react';
import {TextArea} from '@workday/canvas-kit-preview-react/text-area';
import {accessibleHide, styled} from '@workday/canvas-kit-react/common';

const StyledTextAreaLabel = styled(TextArea.Label)({
  ...accessibleHide,
});

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea orientation="vertical" gap="zero">
      <StyledTextAreaLabel>Email</StyledTextAreaLabel>
      <TextArea.Field onChange={handleChange} value={value} />
    </TextArea>
  );
};
