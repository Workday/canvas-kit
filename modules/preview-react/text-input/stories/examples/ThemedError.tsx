import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {system, base} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export const ThemedError = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        error: {
          lightest: cssVar(base.purple100),
          main: cssVar(base.purple600),
        },
        common: {
          focusOutline: cssVar(system.color.static.green.default),
          errorInner: cssVar(base.purple600),
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <TextInput error={!value ? 'error' : undefined} isRequired={true} orientation="vertical">
        <TextInput.Label>Email</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} />
        <TextInput.Hint cs={{paddingTop: cssVar(system.space.x2)}}>
          {!value && 'Please enter an email.'}
        </TextInput.Hint>
      </TextInput>
    </CanvasProvider>
  );
};
