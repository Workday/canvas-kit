import styled from '@emotion/styled';
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {space} from '@workday/canvas-kit-react/tokens';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

const StatusIndicators = styled('div')({
  '& > *': {
    margin: space.xxs,
  },
});

export const MaxWidth = () => {
  return (
    <StatusIndicators>
      <StatusIndicator
        label="Longer Than Normal Ellipsized Status"
        type={StatusIndicator.Type.Blue}
        maxWidth={250}
      />
      <OverflowTooltip>
        <StatusIndicator
          label="Overflow Tooltip On Hover/Focus Status"
          type={StatusIndicator.Type.Green}
          tabIndex={0}
        />
      </OverflowTooltip>
    </StatusIndicators>
  );
};
