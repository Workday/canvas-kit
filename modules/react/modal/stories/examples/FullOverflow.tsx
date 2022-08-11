import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const FullOverflow = () => {
  const handleClose = () => {
    console.log('Deleted item');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open Modal</Modal.Target>
      <Modal.OverflowOverlay>
        <Modal.Card maxHeight="inherit" height="inherit">
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Modal Heading</Modal.Heading>
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
          <Modal.Footer>
            <Modal.CloseButton as={PrimaryButton} onClick={handleClose}>
              Close
            </Modal.CloseButton>
            <Modal.CloseButton>Secondary Action</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Card>
      </Modal.OverflowOverlay>
    </Modal>
  );
};
