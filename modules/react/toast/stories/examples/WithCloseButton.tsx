import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const WithCloseButton = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <Toast>
      <Toast.Icon icon={checkIcon} color="greenApple400" />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
      <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
    </Toast>
  );
};
