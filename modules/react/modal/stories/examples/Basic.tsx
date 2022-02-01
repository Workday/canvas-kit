import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {HStack, Box} from '@workday/canvas-kit-labs-react';

export const Basic = () => {
  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginTop={0} marginBottom="m">
              Are you sure you want to delete the item?
            </Box>
            <HStack spacing="s">
              <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
