import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    gap: system.space.x4,
    flexDirection: 'column',
  }),
  innerContainerStyles: createStyles({
    gap: system.space.x4,
  }),
};

export const Variants = () => {
  return (
    <Flex cs={styleOverrides.parentContainerStyles}>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator>
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
      </Flex>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator emphasis="high">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="critical">
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
