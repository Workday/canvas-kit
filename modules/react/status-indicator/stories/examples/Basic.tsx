import React from 'react';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';

export const Basic = () => {
  return <StatusIndicator label="Submitted" type={StatusIndicator.Type.Green} />;
};
