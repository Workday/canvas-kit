import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {HStack} from '@workday/canvas-kit-react';

export const ClickablePillWithIcon = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
    <Pill onClick={() => console.warn('clicked')} disabled>
      <Pill.Icon />
      <Pill.Label>Regina Skeltor</Pill.Label>
    </Pill>
  </HStack>
);
