import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
});

export const Emphasis = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator emphasis="high">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>High Emphasis</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>Low Emphasis</StatusIndicator.Label>
      </StatusIndicator>
    </Flex>
  );
};
