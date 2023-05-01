import React from 'react';

import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Basic as Input} from '../../../text-input/stories/examples/Basic';

export const Basic = () => {
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
            <Input />
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
