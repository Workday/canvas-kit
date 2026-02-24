import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Toast} from '@workday/canvas-kit-react/toast';
import {colors} from '@workday/canvas-kit-react/tokens';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const RTL = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <CanvasProvider dir="rtl">
      <Toast>
        <Toast.Icon icon={checkIcon} color="greenApple400" />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
        <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
      </Toast>
    </CanvasProvider>
  );
};
