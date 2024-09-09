import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

const styleOverrides = createStyles({
  gap: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
});

export const Inverse = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Flex cs={styleOverrides}>
      <FormField>
        <FormField.Label>Confirm</FormField.Label>
        <FormField.Field>
          <FormField.Input
            as={Checkbox}
            variant="inverse"
            checked={checked}
            label="I agree to the terms"
            onChange={handleChange}
          />
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
