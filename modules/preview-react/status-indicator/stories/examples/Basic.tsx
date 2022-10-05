import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  return (
    <StatusIndicator>
      <StatusIndicator.Target as={SecondaryButton}>Toggle</StatusIndicator.Target>
      <StatusIndicator.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StatusIndicator.Content>
    </StatusIndicator>
  );
};
