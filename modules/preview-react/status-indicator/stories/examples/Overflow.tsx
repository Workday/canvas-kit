import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const statusIndicatorStyles = createStyles({
  maxWidth: calc.add(system.space.x20, system.space.x4),
});

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <StatusIndicator tabIndex={0} cs={statusIndicatorStyles}>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>
          Your workbook is currently in process of saving
        </StatusIndicator.Label>
      </StatusIndicator>
    </OverflowTooltip>
  );
};
