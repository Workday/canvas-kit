import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DelayedTooltip = () => {
  return (
    <React.Fragment>
      <Tooltip type="describe" title="Tooltip Text" showDelay={2000} hideDelay={1000}>
        <SecondaryButton>
          Tooltip appears after 2 seconds and disappears after 1 second
        </SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};
