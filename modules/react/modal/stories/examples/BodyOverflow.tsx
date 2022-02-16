import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {HStack, VStack, Stack, Box} from '@workday/canvas-kit-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

export const BodyOverflow = () => {
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
          <HStack spacing="s" paddingTop="s">
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
