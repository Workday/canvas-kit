import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack, VStack} from '@workday/canvas-kit-react/layout';

export const Variants = () => {
  return (
    <HStack spacing="s">
      <StatusIndicator>
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="orange">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="blue">
        <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="green">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="red">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
      <StatusIndicator variant="transparent">
        <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
      </StatusIndicator>
    </HStack>
  );
};
