/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {accessibleHide} from '@workday/canvas-kit-react/common';

export const HiddenLabel = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextInput orientation="vertical" spacing="zero">
      <TextInput.Label css={{...accessibleHide}}>Email</TextInput.Label>
      <TextInput.Field onChange={handleChange} value={value} />
    </TextInput>
  );
};
