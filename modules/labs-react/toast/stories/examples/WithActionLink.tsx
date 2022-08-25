import React from 'react';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react';

export const WithActionLink = () => {
  return (
    <Toast mode="dialog">
      <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        <Toast.Link href="#hreflink">Custom Link</Toast.Link>
      </Toast.Body>
    </Toast>
  );
};
