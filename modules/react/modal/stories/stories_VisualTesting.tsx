import React from 'react';
import ReactDOM from 'react-dom';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {ContentDirection, CanvasProvider, useTheme} from '@workday/canvas-kit-react/common';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

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
            <Modal.Heading>Small Width Modal</Modal.Heading>
            <Modal.Body>
              <Box as="p" marginY="zero">
                This modal should appear on the bottom of the screen for mobile devices. Chromatic
                uses a version of Chrome that makes it appear on the top and is a known issue.
              </Box>
            </Modal.Body>
            <HStack spacing="s" padding="xxs" marginTop="xxs">
              <Modal.CloseButton as={PrimaryButton}>Close</Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </HStack>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};

export const ModalSmallWidth = withSnapshotsEnabled(() => <TestModal />);
ModalSmallWidth.parameters.chromatic.viewports = [320, 1200];

export const ModalRTL = withSnapshotsEnabled(() => {
  const theme = useTheme({canvas: {direction: ContentDirection.RTL}});
  const model = useModalModel({
    initialVisibility: 'visible',
  });
  return (
    <CanvasProvider theme={theme}>
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
