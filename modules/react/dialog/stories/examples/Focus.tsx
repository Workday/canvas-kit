import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';

export const Focus = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };

  return (
    <Flex cs={{gap: system.gap.lg}}>
      <Dialog>
        <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card>
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading cs={{paddingBlockStart: system.padding.md}}>
              Sign Up for 15% Off Your Next Order
            </Dialog.Heading>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Email</FormField.Label>
                <FormField.Input as={TextInput} onChange={handleChange} value={value} />
              </FormField>
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
                Submit
              </Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
      <PrimaryButton>Focus #1</PrimaryButton>
      <PrimaryButton>Focus #2</PrimaryButton>
    </Flex>
  );
};
