import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {styled} from '@workday/canvas-kit-react/common';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

export const Alert = () => {
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
        <TextInput.Hint paddingTop={space.xxs}>
          <strong>Alert: </strong>Please enter a valid email.
        </TextInput.Hint>
      </TextInput>
    </VStack>
  );
};
