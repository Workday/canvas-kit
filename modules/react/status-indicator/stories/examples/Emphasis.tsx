import React from 'react';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';

export const Emphasis = () => {
  return (
    <StatusIndicator
      emphasis={StatusIndicator.Emphasis.Low}
      label="Submitted"
      type={StatusIndicator.Type.Green}
    />
  );
};
