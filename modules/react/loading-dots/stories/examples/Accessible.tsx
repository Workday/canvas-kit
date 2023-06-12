import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

export const Accessible = () => {
  return <LoadingDots aria-live="polite" aria-label="Loading Users" />;
};
