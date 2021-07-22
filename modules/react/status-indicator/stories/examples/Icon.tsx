import React from 'react';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => {
  return (
    <StatusIndicator icon={uploadCloudIcon} label="published" type={StatusIndicator.Type.Green} />
  );
};
