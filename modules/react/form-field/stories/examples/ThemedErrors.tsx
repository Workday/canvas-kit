import React from 'react';

import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const formFieldHintStyles = createStyles({
  paddingTop: system.space.x2,
});

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
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          <FormField.Hint cs={formFieldHintStyles}>
            {!value && 'Please enter an email.'}
          </FormField.Hint>
        </FormField.Field>
      </FormField>
    </CanvasProvider>
  );
};
