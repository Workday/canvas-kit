import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Popper} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

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
        <Toast mode="dialog">
          <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
          <Toast.Body>
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          </Toast.Body>
          <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
