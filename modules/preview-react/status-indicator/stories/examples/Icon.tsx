import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Icon = () => {
  return (
    <Flex gap="s">
      <StatusIndicator>
        <StatusIndicator.Icon aria-label="unpublished" icon={uploadCloudIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="green">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon aria-label="published" icon={uploadCloudIcon} />
      </StatusIndicator>
    </Flex>
  );
};
