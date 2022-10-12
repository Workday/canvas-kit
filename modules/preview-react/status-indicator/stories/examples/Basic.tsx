import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  return (
    <HStack spacing="s">
      <StatusIndicator emphasis="high">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="blue" emphasis="low">
        <StatusIndicator.Label>Lorem ipsum dolor akjfg adfkjndsf sdf;kjn </StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
    </HStack>
  );
};
