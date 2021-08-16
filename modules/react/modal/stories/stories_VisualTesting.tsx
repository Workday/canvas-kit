import React from 'react';
import ReactDOM from 'react-dom';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {ContentDirection, CanvasProvider} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

const TestContent = () => {
  const content = (
    <div
      style={{
        color: 'white',
        zIndex: 1,
        position: 'relative',
      }}
    >
      This text should be invisible if the Modal is rendering correctly. It is white text on a white
      background. The Popup Stack should set up the zIndex of the Modal's overlay. If rendered
      incorrectly, the text will be visible on top of the overlay.
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

const TestModal = () => {
  const model = useModalModel({
    initialVisibility: 'visible',
  });
  return (
    <>
      <TestContent />
      <Modal model={model}>
        <Modal.Overlay style={{animation: 'none'}}>
          <Modal.Card style={{animation: 'none'}}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <HStack spacing="s">
                <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
                <Modal.CloseButton>Cancel</Modal.CloseButton>
              </HStack>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};

export const ModalSmallWidth = withSnapshotsEnabled(() => <TestModal />);

export const ModalRTL = withSnapshotsEnabled(() => {
  const model = useModalModel({
    initialVisibility: 'visible',
  });
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Modal model={model}>
        <Modal.Overlay style={{animation: 'none'}}>
          <Modal.Card style={{animation: 'none'}} width={300}>
            <Modal.CloseIcon aria-label="" />
            <Modal.Heading>למחוק פריט</Modal.Heading>
            <Modal.Body>האם ברצונך למחוק פריט זה</Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </CanvasProvider>
  );
});
