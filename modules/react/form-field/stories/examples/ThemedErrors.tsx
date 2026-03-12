import React from 'react';

import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const formFieldHintStyles = createStyles({
  paddingTop: system.padding.xs,
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
          focusOutline: cssVar(base.green600),
        },
        error: {
          main: cssVar(base.magenta700),
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
