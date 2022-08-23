import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const WithActionLinkAndCloseIcon = () => {
  const handleClose = () => console.log('close button clicked');
  const handleActionClick = () => console.log('action button clicked');

  return (
    <Toast mode="interactive">
      <Toast.Body>
        <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
        <Toast.Message>
          Your workbook was successfully processed.
          <Toast.Action onClick={handleActionClick}>Custom Action</Toast.Action>
        </Toast.Message>
      </Toast.Body>
      <Toast.Close aria-label="Close" onClick={handleClose} />
    </Toast>
  );
};
