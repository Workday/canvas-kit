import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {Popper, SecondaryButton} from '@workday/canvas-kit-react';

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
          <Toast.Body>
            <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
            Your workbook was successfully processed.
          </Toast.Body>
          <Toast.Close aria-label="Close" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};
