import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack} from '@workday/canvas-kit-react/layout';

export const Overflow = () => {
  return (
    <StatusIndicator maxWidth={100}>
      <StatusIndicator.Label tooltipProps={{placement: 'right'}}>
        Your workbook is currently in process of saving
      </StatusIndicator.Label>
    </StatusIndicator>
  );
};
