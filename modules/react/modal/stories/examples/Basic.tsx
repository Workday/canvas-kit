import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const handleClose = () => {
    console.log('Close modal');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open Modal</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Modal Heading</Modal.Heading>
          <Modal.Body paddingBottom="xxs">
            <Box as="p" marginTop={0} marginBottom="xxs">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Modal.Footer paddingTop={'xxs'}>
            <Modal.CloseButton as={PrimaryButton} onClick={handleClose}>
              Primary Action
            </Modal.CloseButton>
            <Modal.CloseButton>Secondary Action</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
