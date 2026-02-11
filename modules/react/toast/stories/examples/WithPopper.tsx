import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Toast} from '@workday/canvas-kit-react/toast';
import {colors} from '@workday/canvas-kit-react/tokens';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const WithPopper = () => {
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
      <SecondaryButton onClick={handleOpen}>Show Toast</SecondaryButton>
      <Popper placement="bottom-end" open={open} anchorElement={containerRef}>
        <Toast mode="dialog" aria-label="notification">
          <Toast.Icon icon={checkIcon} color="greenApple400" />
          <Toast.Body>
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          </Toast.Body>
          <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
