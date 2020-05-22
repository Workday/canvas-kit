/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {Popper, Popup} from '@workday/canvas-kit-react-popup';

import README from '../README.md';
import {useOutsideClick} from '../lib/useOutsideClick';
import {useEscapeKey} from '../lib/useEscapeKey';

export default {
  title: 'Components|Popups/Popup/React',
  component: Popup,
  decorators: [withReadme(README)],
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const onClose = () => setOpen(false);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  useOutsideClick(popupRef, onClose);
  useEscapeKey(popupRef, onClose);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <DeleteButton onClick={onButtonClick}>Delete Item</DeleteButton>
      <Popper placement={'bottom'} open={open} anchorElement={anchorEl} ref={popupRef}>
        <Popup width={400} heading={'Delete Item'} padding={Popup.Padding.s} handleClose={onClose}>
          <div style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </div>

          <DeleteButton style={{marginRight: '16px'}} onClick={onClose}>
            Delete
          </DeleteButton>
          <Button onClick={onClose}>Cancel</Button>
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
