/// <reference path="../../../typings.d.ts" />
/** @jsx jsx */

import React from 'react';
import ReactDOM from 'react-dom';
import {css, jsx} from '@emotion/core';

import {Tooltip} from '@workday/canvas-kit-react-tooltip';

import {
  Popup,
  Popper,
  usePopupStack,
  useCloseOnOutsideClick,
  useBringToTopOnClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react-popup';
import {DeleteButton, Button} from '@workday/canvas-kit-react-button';

export default {
  title: 'Testing|React/Popups/Popup Stack',
};

interface WindowProps {
  top: number;
  left: number;
  heading: string;
  children: React.ReactNode;
}

const styles = css({
  position: 'absolute',
  width: 500,
});

const Window = ({children, heading, top, left}: WindowProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  usePopupStack(ref);
  useBringToTopOnClick(ref);

  return ReactDOM.createPortal(
    <Popup popupRef={ref} css={styles} heading={heading} style={{top, left}}>
      {children}
    </Popup>,
    document.body
  );
};

const TempPopup = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const onClose = () => setOpen(false);
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  useCloseOnOutsideClick(popupRef, onClose);
  useCloseOnEscape(popupRef, onClose);

  return (
    <div>
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

export const MixedPopupTypes = () => {
  return (
    <div>
      <Window heading="Window 1" top={50} left={50}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap">
          <span>Contents of Window 1</span>
        </Tooltip>
      </Window>
      <Window heading="Window 2" top={100} left={250}>
        <Tooltip title="Really long tooltip showing how popup stacks overlap">
          <span>Contents of Window 2</span>
        </Tooltip>
      </Window>
      <Window heading="Window 4" top={300} left={250}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap">
            <span>Contents of Window 4</span>
          </Tooltip>
        </div>
      </Window>
      <Window heading="Window 3" top={200} left={75}>
        <div>
          <Tooltip title="Really long tooltip showing how popup stacks overlap">
            <span onClick={() => console.log('clicked')}>Contents of Window 3</span>
          </Tooltip>
          <TempPopup />
        </div>
      </Window>
    </div>
  );
};
