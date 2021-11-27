import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';

export const Basic = () => {
  return (
    <Banner onClick={() => console.log('clicked banner')}>
      <Banner.Icon />
      <Banner.Label>3 Warnings</Banner.Label>
      <Banner.Action />
    </Banner>
  );
};
