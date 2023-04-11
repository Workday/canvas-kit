import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {accessibleHide, styled} from '@workday/canvas-kit-react/common';

const StyledTextAreaLabel = styled(TextInput.Label)({
  ...accessibleHide,
});

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput orientation="vertical" gap="zero">
      <StyledTextAreaLabel>Email</StyledTextAreaLabel>
      <TextInput.Field onChange={handleChange} value={value} />
    </TextInput>
  );
};
