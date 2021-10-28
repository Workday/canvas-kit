import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Error = () => (
  <Toast>
    <Toast.Content>
      <Toast.Icon icon={exclamationCircleIcon} iconColor={colors.cinnamon500} />
      <Toast.Message>There was an error with your workbook.</Toast.Message>
    </Toast.Content>
  </Toast>
);
