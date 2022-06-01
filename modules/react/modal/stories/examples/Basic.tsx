import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const handleAllow = () => {
    console.log('Allow notifications');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Edit Notification Settings</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Allow Notifications?</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginTop={0} marginBottom="m">
              Notifications may include alerts, sounds, and icon badges.
            </Box>
            <HStack spacing="s">
              <Modal.CloseButton as={PrimaryButton} onClick={handleAllow}>
                Allow
              </Modal.CloseButton>
              <Modal.CloseButton>Don't Allow</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
