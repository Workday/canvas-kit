/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {TextArea} from '@workday/canvas-kit-labs-react/text-area';
import { accessibleHide } from '@workday/canvas-kit-react/common';

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextArea orientation='vertical' spacing='zero'>
      <TextArea.Label css={{...accessibleHide}}>Email</TextArea.Label>
      <TextArea.Field onChange={handleChange} value={value} />
    </TextArea>
  );
};
