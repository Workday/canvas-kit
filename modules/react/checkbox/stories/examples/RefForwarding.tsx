import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const boxStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <Box cs={boxStyles}>
        <FormFieldGroup>
          <FormFieldGroup.Label>Confirm</FormFieldGroup.Label>
          <FormFieldGroup.Field>
            <FormFieldGroup.Input
              as={Checkbox}
              checked={checked}
              label="I agree to the terms"
              onChange={handleChange}
              ref={ref}
            />
          </FormFieldGroup.Field>
        </FormFieldGroup>
      </Box>
      <PrimaryButton onClick={handleClick}>Check Agreement to Terms</PrimaryButton>
    </>
  );
};
