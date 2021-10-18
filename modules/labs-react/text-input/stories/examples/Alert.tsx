import React from 'react';
import {TextInput} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {styled} from '@workday/canvas-kit-react/common';
import {useThemedRing} from '@workday/canvas-kit-labs-react/common';
import {CSSProperties, space} from '@workday/canvas-kit-react/tokens';

const StyledField = styled(TextInput.Field)<{alertStyles?: CSSProperties}>(
  ({alertStyles}) => alertStyles
);

export const Alert = () => {
  const [value, setValue] = React.useState('foo');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const alertStyles = useThemedRing(
    value.length < 3 ? 'error' : value.length < 5 ? 'alert' : 'success'
  );

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput>
        <TextInput.Label>Password</TextInput.Label>
        <StyledField
          alertStyles={alertStyles}
          onChange={handleChange}
          value={value}
          type="password"
        />
        <TextInput.Hint paddingTop={space.xxs}>
          <strong>Password Strength: </strong>
          {value.length < 3 ? (
            <span>Weak</span>
          ) : value.length < 5 ? (
            <span>Average</span>
          ) : (
            <span>Strong</span>
          )}
        </TextInput.Hint>
      </TextInput>
    </VStack>
  );
};
