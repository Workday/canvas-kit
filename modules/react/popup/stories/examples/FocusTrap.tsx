import * as React from 'react';

import {DeleteButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusTrap,
  useInitialFocus,
  useReturnFocus,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Box, Flex} from '@workday/canvas-kit-react/layout';

export const FocusTrap = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);

  const handleDelete = () => {
    console.log('Delete Item');
  };

  const popupId = 'popup-test-id';
  const visible = model.state.visibility !== 'hidden';
  React.useLayoutEffect(() => {
    if (visible && model.state.stackRef.current) {
      model.state.stackRef.current.setAttribute('id', popupId);
    }
  }, [model.state.stackRef, visible]);

  return (
    <Popup model={model}>
      <Flex gap="s">
        <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
        <div aria-owns={popupId} style={{position: 'absolute'}} />
        <Popup.Popper>
          <Popup.Card width={400}>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Delete Item</Popup.Heading>
            <Popup.Body>
              <Box as="p" marginY="zero">
                Are you sure you'd like to delete the item titled 'My Item'?
              </Box>
            </Popup.Body>
            <Flex gap="s" padding="xxs">
              <Popup.CloseButton as={DeleteButton} onClick={handleDelete}>
                Delete
              </Popup.CloseButton>
              <Popup.CloseButton>Cancel</Popup.CloseButton>
            </Flex>
          </Popup.Card>
        </Popup.Popper>
        <SecondaryButton>Next Focusable Button</SecondaryButton>
        <SecondaryButton>Focusable Button After Popup</SecondaryButton>
      </Flex>
    </Popup>
  );
};
