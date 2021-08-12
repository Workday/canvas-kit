import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {
  CanvasProvider,
  ErrorType,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export const ThemedError = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: colors.grapeSoda300,
        },
        error: {
          main: colors.islandPunch400,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <VStack spacing="xxxs" alignItems="flex-start">
        <TextInput hasError={!value}>
          <TextInput.Label isRequiredLabel="A Valid Email is required">Email</TextInput.Label>
          <TextInput.Field onChange={handleChange} value={value} />
          <TextInput.Hint paddingTop={space.xxs}>
            {!value && 'Please enter an email.'}
          </TextInput.Hint>
        </TextInput>
      </VStack>
    </CanvasProvider>
  );
};
