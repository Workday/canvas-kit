import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButtonNew} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Default = () => {
  return (
    <Tooltip title="Close">
      <TertiaryButtonNew icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};
