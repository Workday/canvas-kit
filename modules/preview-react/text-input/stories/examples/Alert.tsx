/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

export const Alert = () => {
  const [value, setValue] = React.useState('foo');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const alertStyles = useThemedRing(
    value.length < 3 ? 'error' : value.length < 5 ? 'alert' : 'success'
  );

  return (
    <TextInput orientation='vertical'>
      <TextInput.Label>Password</TextInput.Label>
      <TextInput.Field
        css={alertStyles}
        onChange={handleChange}
        value={value}
        type="password"
      />
      <TextInput.Hint paddingTop={space.xxs}>
        <strong>Password Strength: </strong>
        {value.length < 3 ? (
          <span>Weak</span>
        ) : value.length < 5 ? (
          <span>Average</span>
        ) : (
          <span>Strong</span>
        )}
      </TextInput.Hint>
    </TextInput>
  );
};
