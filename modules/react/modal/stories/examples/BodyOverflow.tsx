import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack, VStack, Stack, Box} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

export const BodyOverflow = () => {
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
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
          </Modal.Body>
          <HStack spacing="s" paddingTop="s">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAllow}>
              Allow
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
