import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {Popup} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const OpenWithoutModel = () => {
  return (
    <>
      <Popup.Card width={400} padding="s" aria-labelledby="popup-heading">
        <Popup.CloseIcon aria-label="Close" />
        <Popup.Heading id="popup-heading">Delete Item</Popup.Heading>
        <Popup.Body>
          <Box as="p" marginBottom="m">
            Are you sure you'd like to delete the item titled 'My Item'?
          </Box>
          <HStack spacing="s">
            <DeleteButton>Delete</DeleteButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </HStack>
        </Popup.Body>
      </Popup.Card>
    </>
  );
};
