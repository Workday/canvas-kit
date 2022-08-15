import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const handleClose = () => {
    console.log('Close modal');
  };

  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body paddingBottom="xxs">
            <Box as="p" marginTop={0} marginBottom="xxs">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Modal.Footer paddingTop={'xxs'}>
            <Modal.CloseButton as={DeleteButton} onClick={handleClose}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
