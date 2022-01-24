/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: colors.grapeSoda300,
        },
        alert: {
          main: colors.kiwi200,
          darkest: colors.kiwi600,
        },
      },
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <AlertInput />
    </CanvasProvider>
  );
};

const AlertInput = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const alertStyles = useThemedRing('alert');

  return (
    <TextInput orientation="vertical">
      <TextInput.Label>Email</TextInput.Label>
      <TextInput.Field css={alertStyles} onChange={handleChange} value={value} />
      <TextInput.Hint paddingTop={space.xxs}>Please enter a valid email.</TextInput.Hint>
    </TextInput>
  );
};
