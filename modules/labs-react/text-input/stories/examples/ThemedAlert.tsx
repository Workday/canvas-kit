import React from 'react';
import {TextInput, useTextInputModel} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {
  CanvasProvider,
  ErrorType,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export const ThemedAlert = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useTextInputModel({initialError: ErrorType.Alert});

  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: colors.grapeSoda300,
        },
        alert: {
          main: colors.kiwi500,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <VStack spacing="xxxs" alignItems="flex-start">
        <TextInput model={model}>
          <TextInput.Label>Email</TextInput.Label>
          <TextInput.Field onChange={handleChange} value={value} />
          <TextInput.Hint paddingTop={space.xxs}>Please enter a valid email.</TextInput.Hint>
        </TextInput>
      </VStack>
    </CanvasProvider>
  );
};
