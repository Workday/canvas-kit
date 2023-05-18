import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {Flex} from '@workday/canvas-kit-react/layout';

export const Basic = () => (
  <Flex gap="xxs">
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
    <Pill onClick={() => console.warn('clicked')} disabled>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
  </Flex>
);
