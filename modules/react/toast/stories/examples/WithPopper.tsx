import * as React from 'react';
import {Button} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Toast} from '@workday/canvas-kit-react/toast';

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
      <Button onClick={handleOpen}>Show Toast</Button>
      <Popper placement="bottom-end" open={open} anchorElement={containerRef}>
        <Toast onClose={handleClose}>Your workbook was successfully processed.</Toast>
      </Popper>
    </div>
  );
};
