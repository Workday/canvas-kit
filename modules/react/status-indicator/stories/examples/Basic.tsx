import styled from '@emotion/styled';
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {space} from '@workday/canvas-kit-react/tokens';
import {system} from '@workday/canvas-tokens-web';

const StatusIndicators = styled('div')({
  '& > *': {
    margin: system.gap.sm,
  },
});

export const Basic = () => {
  return (
    <StatusIndicators>
      <StatusIndicator label="unpublished" type={StatusIndicator.Type.Gray} />
      <StatusIndicator label="submitted" type={StatusIndicator.Type.Orange} />
      <StatusIndicator label="in progress" type={StatusIndicator.Type.Blue} />
      <StatusIndicator label="published" type={StatusIndicator.Type.Green} />
      <StatusIndicator label="failed" type={StatusIndicator.Type.Red} />
      <StatusIndicator label="normal" type={StatusIndicator.Type.Transparent} />
    </StatusIndicators>
  );
};
