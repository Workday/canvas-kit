import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {HStack, VStack} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  return (
    <VStack spacing="m">
      <HStack spacing="s">
        <StatusIndicator emphasis="high">
          <StatusIndicator.Icon icon={uploadCloudIcon} />
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="orange">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="blue">
          <StatusIndicator.Label>Lorem ipsum dolor akjfg adfkjndsf sdf;kjn </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="green">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="red">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
      </HStack>
      <HStack spacing="s">
        <StatusIndicator emphasis="low">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="low" variant="orange">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="low" variant="blue">
          <StatusIndicator.Label>Lorem ipsum dolor akjfg adfkjndsf sdf;kjn </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="low" variant="green">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="low" variant="red">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="low" variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
      </HStack>
    </VStack>
  );
};
