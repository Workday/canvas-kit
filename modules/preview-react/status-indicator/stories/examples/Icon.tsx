import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
});

export const Icon = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator>
        <StatusIndicator.Icon aria-label="unpublished" icon={uploadCloudIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="positive">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon aria-label="published" icon={uploadCloudIcon} />
      </StatusIndicator>
    </Flex>
  );
};
