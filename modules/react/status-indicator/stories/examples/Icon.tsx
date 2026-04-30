import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => {
  return (
    <StatusIndicator icon={cloudArrowUpIcon} label="published" type={StatusIndicator.Type.Green} />
  );
};
