import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';

export const ToastAlert = () => {
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
      <SecondaryButton onClick={handleOpen}>Show Alert Toast</SecondaryButton>
      <Popper placement="top" open={open} anchorElement={containerRef}>
        <Toast mode="alert">
          <Toast.Icon icon={exclamationCircleIcon} color={colors.cinnamon500} />
          <Toast.Body>
            <Toast.Message>There was an error with your workbook.</Toast.Message>
          </Toast.Body>
          <Toast.CloseIcon onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
