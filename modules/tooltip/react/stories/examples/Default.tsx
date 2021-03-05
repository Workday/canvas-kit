import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {IconButton} from '@workday/canvas-kit-react-button';
import {Tooltip} from '@workday/canvas-kit-react-tooltip';

export const Default = () => {
  return (
    <Tooltip title="Close">
      <IconButton variant={IconButton.Variant.Circle} icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};
