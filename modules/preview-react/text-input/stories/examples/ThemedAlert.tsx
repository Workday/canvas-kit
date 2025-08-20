import React from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {
  CanvasProvider,
  PartialEmotionCanvasTheme,
  useThemedRing,
} from '@workday/canvas-kit-react/common';
import {base, system} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        caution: {
          lightest: cssVar(system.color.static.green.softer),
        },
        common: {
          focusOutline: cssVar(base.purple500),
          alertInner: cssVar(base.green400),
          alertOuter: cssVar(base.green500),
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
    <TextInput error="caution" orientation="vertical">
      <TextInput.Label>Email</TextInput.Label>
      <TextInput.Field cs={alertStyles} onChange={handleChange} value={value} />
      <TextInput.Hint cs={{paddingTop: cssVar(system.space.x2)}}>
        Please enter a valid email.
      </TextInput.Hint>
    </TextInput>
  );
};
