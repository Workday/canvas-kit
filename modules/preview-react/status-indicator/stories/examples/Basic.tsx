import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  return (
    <StatusIndicator>
      <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
      <StatusIndicator.Icon icon={uploadCloudIcon} />
    </StatusIndicator>
  );
};
