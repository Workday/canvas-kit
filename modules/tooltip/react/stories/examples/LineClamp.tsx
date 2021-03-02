import React from 'react';

import {OverflowTooltip} from '@workday/canvas-kit-react-tooltip';
import {spacing} from '@workday/canvas-kit-react-core';

export const LineClamp = () => {
  return (
    <OverflowTooltip>
      <div
        tabIndex={0}
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          marginTop: spacing.xs,
          maxWidth: 200,
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
        }}
      >
        Super Mega Ultra Long Content With Max Width. Super Mega Ultra Long Content With Max Width.
      </div>
    </OverflowTooltip>
  );
};
