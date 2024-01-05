import React from 'react';
import {LoadingSparkles} from '@workday/canvas-kit-preview-react/loading-sparkles';

export const Accessible = () => {
  return <LoadingSparkles aria-live="polite" aria-label="Loading Users" />;
};
