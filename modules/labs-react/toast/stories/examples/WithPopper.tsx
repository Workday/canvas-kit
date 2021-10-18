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
        <Toast>
          <Toast.Close onClose={handleClose} />
          <Toast.Content>
            <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          </Toast.Content>
        </Toast>
      </Popper>
    </div>
  );
};
