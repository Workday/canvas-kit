import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const ActionText = () => {
  return (
    <Banner>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.Action>Show Details</Banner.Action>
    </Banner>
  );
};
