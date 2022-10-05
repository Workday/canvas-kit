import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

import {useStatusIndicatorModel} from './hooks';
import {StatusIndicatorTarget} from './StatusIndicatorTarget';
import {StatusIndicatorContent} from './StatusIndicatorContent';

export interface StatusIndicatorProps extends ExtractProps<typeof Box, never> {
  /**
   * Children of the Status Indicator. Should contain a `<StatusIndicator.Target>`, a `<StatusIndicator.Content>`
   */
  children: React.ReactNode;
}

export const StatusIndicator = createContainer('div')({
  displayName: 'StatusIndicator',
  modelHook: useStatusIndicatorModel,
  subComponents: {
    Target: StatusIndicatorTarget,
    Content: StatusIndicatorContent,
  },
})<StatusIndicatorProps>(({children, ...elemProps}, Element) => {
  return (
    <Box as={Element} {...elemProps}>
      {children}
    </Box>
  );
});
