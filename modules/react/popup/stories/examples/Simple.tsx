import React from 'react';

import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  useCloseOnEscape,
  useCloseOnOutsideClick,
  Popup,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';

export const Simple = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);

  return (
    <Popup model={model}>
      <Popup.Target as={DeleteButton}>Delete Item</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card width={400} padding="16px">
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Delete Item</Popup.Heading>
          <Popup.Body>
            <p>Are you sure you'd like to delete the item titled 'My Item'?</p>

            <Popup.CloseButton as={DeleteButton}>Delete</Popup.CloseButton>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
