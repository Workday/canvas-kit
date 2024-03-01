import React from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
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
      <FormField error={!value ? 'error' : undefined} isRequired={true} orientation="vertical">
        <FormField.Label>Email</FormField.Label>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
        <FormField.Hint paddingTop={space.xxs}>{!value && 'Please enter an email.'}</FormField.Hint>
      </FormField>
    </CanvasProvider>
  );
};
