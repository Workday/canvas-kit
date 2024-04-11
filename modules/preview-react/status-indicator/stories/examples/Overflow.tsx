import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <StatusIndicator tabIndex={0} style={{maxWidth: '6rem'}}>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>
          Your workbook is currently in process of saving
        </StatusIndicator.Label>
      </StatusIndicator>
    </OverflowTooltip>
  );
};
