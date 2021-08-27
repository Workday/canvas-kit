import React from 'react';
import {Banner} from '@workday/canvas-kit-react/banner';

export const Error = () => {
  return <Banner error={Banner.ErrorType.Error} label="3 Errors" />;
};
