import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react';

export const RTL = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Toast mode="dialog">
        <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
        <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
      </Toast>
    </CanvasProvider>
  );
};
