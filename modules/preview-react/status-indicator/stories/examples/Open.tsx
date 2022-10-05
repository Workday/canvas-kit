import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

export const Open = () => {
  const [active, setActive] = React.useState(true);

  return (
    <StatusIndicator
      initialOpen={true}
      onOpen={() => setActive(true)}
      onClose={() => setActive(false)}
    >
      <StatusIndicator.Target variant={active ? 'inverse' : null}>Toggle</StatusIndicator.Target>
      <StatusIndicator.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StatusIndicator.Content>
    </StatusIndicator>
  );
};
