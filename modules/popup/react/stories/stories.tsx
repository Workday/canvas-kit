/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {
  Popper,
  Popup,
  usePopup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
} from '@workday/canvas-kit-react-popup';

import README from '../README.md';

export default {
  title: 'Components|Popups/Popup/React',
  component: Popup,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const {targetProps, closePopup, popperProps, stackRef} = usePopup();

  useCloseOnOutsideClick(stackRef, closePopup);
  useCloseOnEscape(stackRef, closePopup);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} {...popperProps}>
        <Popup
          width={400}
          heading={'Delete Item'}
          padding={Popup.Padding.s}
          handleClose={closePopup}
        >
          <div style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </div>

          <DeleteButton style={{marginRight: '16px'}} onClick={closePopup}>
            Delete
          </DeleteButton>
          <Button onClick={closePopup}>Cancel</Button>
        </Popup>
      </Popper>
    </div>
  );
};

export const Open = () => {
  return (
    <Popup width={400} heading={'Delete Item'} padding={Popup.Padding.s} handleClose={() => null}>
      <div style={{marginBottom: '24px'}}>
        Are you sure you'd like to delete the item titled 'My Item'?
      </div>

      <DeleteButton style={{marginRight: '16px'}} onClick={() => null}>
        Delete
      </DeleteButton>
      <Button onClick={() => null}>Cancel</Button>
    </Popup>
  );
};
