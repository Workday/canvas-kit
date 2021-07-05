import React from 'react';

import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

export const Square = () => (
  <IconButton icon={activityStreamIcon} aria-label="Activity Stream" variant="square" />
);
