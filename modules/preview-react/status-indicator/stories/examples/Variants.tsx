import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Variants = () => {
  return (
    <Flex gap="s" flexDirection="column">
      <Flex gap="s">
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
      </Flex>
      <Flex gap="s">
        <StatusIndicator emphasis="high">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="orange">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="blue">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
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
      </Flex>
    </Flex>
  );
};
