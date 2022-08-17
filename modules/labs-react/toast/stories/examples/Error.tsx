import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Error = () => (
  <Toast>
    <Toast.Body>
      <Toast.Icon icon={exclamationCircleIcon} color={colors.cinnamon500} />
      There was an error with your workbook.
    </Toast.Body>
  </Toast>
);
