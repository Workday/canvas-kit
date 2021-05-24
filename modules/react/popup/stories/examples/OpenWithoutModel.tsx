import React from 'react';

import {Button, DeleteButton} from '@workday/canvas-kit-react/button';
import {Popup, PopupOld} from '@workday/canvas-kit-react/popup';

export const OpenWithoutModel = () => {
  return (
    <>
      <PopupOld
        width={400}
        heading={'Delete Item'}
        padding={PopupOld.Padding.s}
        handleClose={() => null}
      >
        <div style={{marginBottom: '24px'}}>
          Are you sure you'd like to delete the item titled 'My Item'?
        </div>

        <DeleteButton style={{marginRight: '16px'}}>Delete</DeleteButton>
        <Button>Cancel</Button>
      </PopupOld>
      <Popup.Card width={400} padding={Popup.Padding.s} aria-labelledby="popup-heading">
        <Popup.CloseIcon aria-label="Close" />
        <Popup.Heading id="popup-heading">Delete Item</Popup.Heading>
        <Popup.Body>
          <p style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </p>

          <DeleteButton style={{marginRight: '16px'}}>Delete</DeleteButton>
          <Button>Cancel</Button>
        </Popup.Body>
      </Popup.Card>
    </>
  );
};
