import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack, VStack} from '@workday/canvas-kit-react/layout';

export const Emphasis = () => {
  return (
    <HStack spacing="s">
      <StatusIndicator emphasis="high">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>High Emphasis</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>Low Emphasis</StatusIndicator.Label>
      </StatusIndicator>
    </HStack>
  );
};
