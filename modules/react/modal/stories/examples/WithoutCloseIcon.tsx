import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useFocusTrap,
  useAssistiveHideSiblings,
  useDisableBodyScroll,
} from '@workday/canvas-kit-react/popup';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack, Box} from '@workday/canvas-kit-react/layout';

export const WithoutCloseIcon = () => {
  const model = usePopupModel();

  // disable useCloseOnEscape and useCloseOnOverlayClick
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useDisableBodyScroll(model);
  const handleClose = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={PrimaryButton}>Open Modal</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body paddingBottom="zero">
            <Box as="p" marginTop={0} marginBottom="m">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Modal.Footer paddingTop="zero">
            <Modal.CloseButton as={PrimaryButton} onClick={handleClose}>
              Close
            </Modal.CloseButton>
            <Modal.CloseButton>Secondary Action</Modal.CloseButton>
          </Modal.Footer>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
