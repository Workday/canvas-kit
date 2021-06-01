import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {Popup} from '@workday/canvas-kit-react/popup';

export const OpenWithoutModel = () => {
  return (
    <>
      <Popup.Card width={400} padding="s" aria-labelledby="popup-heading">
        <Popup.CloseIcon aria-label="Close" />
        <Popup.Heading id="popup-heading">Delete Item</Popup.Heading>
        <Popup.Body>
          <p style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </p>

          <DeleteButton style={{marginRight: '16px'}}>Delete</DeleteButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </Popup.Body>
      </Popup.Card>
    </>
  );
};
