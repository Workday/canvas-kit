import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Error = () => (
  <Toast mode="alert">
    <Toast.Icon icon={exclamationCircleIcon} color={colors.cinnamon500} />
    <Toast.Body>There was an error with your workbook.</Toast.Body>
  </Toast>
);
