import * as React from 'react';
import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const IframeTest = () => {
  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <Flex gap="s">
              <Modal.CloseButton>Cancel</Modal.CloseButton>
              <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
            </Flex>
            <iframe srcDoc="<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button>iframe button 2</button></body></html>" />
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
