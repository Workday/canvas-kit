import React from 'react';
import {FormField, TextInput, Flex, Dialog, PrimaryButton} from '@workday/canvas-kit-react/';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };
  return (
    <Dialog>
      <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon aria-label="Close" />
          <Dialog.Heading paddingTop="m">Sign Up for 15% Off Your Next Order</Dialog.Heading>
          <Dialog.Body>
            <FormField label="Email">
              <TextInput onChange={handleChange} value={value} />
            </FormField>
          </Dialog.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
              Submit
            </Dialog.CloseButton>
            <Dialog.CloseButton>Cancel</Dialog.CloseButton>
          </Flex>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};
