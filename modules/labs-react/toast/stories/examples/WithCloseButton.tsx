import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {action} from '@storybook/addon-actions';

export const WithCloseButton = () => {
  const handleClose = () => action('close button clicked');

  return (
    <Toast mode="interactive">
      <Toast.Content>
        <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Content>
      <Toast.Close aria-label="Close" onClick={handleClose} />
    </Toast>
  );
};
