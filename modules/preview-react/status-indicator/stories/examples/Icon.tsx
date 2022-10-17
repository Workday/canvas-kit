import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack} from '@workday/canvas-kit-react/layout';

export const Icon = () => {
  return (
    <HStack spacing="s">
      <StatusIndicator>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="green">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
    </HStack>
  );
};
