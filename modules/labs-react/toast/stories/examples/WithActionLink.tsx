import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {action} from '@storybook/addon-actions';

export const WithActionLink = () => {
  const actionClick = () => action('action button clicked');

  return (
    <Toast>
      <Toast.Content>
        <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
        <Toast.Message>
          Your workbook was successfully processed.
          <Toast.Action onActionClick={actionClick}>Custom Action</Toast.Action>
        </Toast.Message>
      </Toast.Content>
    </Toast>
  );
};
