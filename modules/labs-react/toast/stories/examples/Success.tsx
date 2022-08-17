import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Success = () => (
  <Toast>
    <Toast.Body>
      <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
      Your workbook was successfully processed.
    </Toast.Body>
  </Toast>
);
