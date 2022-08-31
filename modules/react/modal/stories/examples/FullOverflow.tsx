import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';

export const FullOverflow = () => {
  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.OverflowOverlay>
        <Modal.Card maxHeight="inherit" height="inherit">
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body paddingBottom="zero">
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
            <p>Are you sure you want to delete the item?</p>
          </Modal.Body>
          <HStack spacing="s" paddingX="l" paddingBottom="l">
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.OverflowOverlay>
    </Modal>
  );
};
