import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {CanvasProvider, PartialEmotionCanvasTheme, styled} from '@workday/canvas-kit-react/common';
import {colors, space} from '@workday/canvas-kit-react/tokens';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        common: {
          focusOutline: colors.grapeSoda300,
        },
        alert: {
          main: colors.kiwi500,
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

  const StyledField = styled(TextInput.Field)<{hasAlert?: boolean}>(({hasAlert}) =>
    hasAlert ? {...alertStyles} : {}
  );

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput>
        <TextInput.Label>Email</TextInput.Label>
        <StyledField hasAlert={true} onChange={handleChange} value={value} />
        <TextInput.Hint paddingTop={space.xxs}>Please enter a valid email.</TextInput.Hint>
      </TextInput>
    </VStack>
  );
};
