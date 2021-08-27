import * as React from 'react';
import {Toast} from '@workday/canvas-kit-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Error = () => {
  return (
    <Toast iconColor={colors.cinnamon500} icon={exclamationCircleIcon}>
      There was an error with your workbook.
    </Toast>
  );
};
