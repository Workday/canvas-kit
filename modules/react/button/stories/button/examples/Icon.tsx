import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {playCircleIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => (
  <SecondaryButton icon={playCircleIcon} iconPosition="right">
    Click Me
  </SecondaryButton>
);
