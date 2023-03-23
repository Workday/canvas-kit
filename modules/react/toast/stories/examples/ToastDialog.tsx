import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {Popper} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const ToastDialog = () => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div ref={containerRef}>
      <SecondaryButton onClick={handleOpen}>Show Dialog Toast</SecondaryButton>
      <Popper placement="top" open={open} anchorElement={containerRef}>
        <Toast mode="dialog" aria-label="notification">
          <Toast.Icon icon={checkIcon} color="greenApple400" />
          <Toast.Body>
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
            <Toast.Link href="#hreflink">Custom Link</Toast.Link>
          </Toast.Body>
          <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
