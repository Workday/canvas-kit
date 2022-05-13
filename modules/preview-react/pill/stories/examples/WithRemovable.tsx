import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {HStack} from '@workday/canvas-kit-react';

export const RemovablePill = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill variant="removable">
      Pink Shirts
      <Pill.IconButton onClick={() => console.warn('clicked')} />
    </Pill>
    <Pill variant="removable">
      <Pill.Avatar url={testAvatar}></Pill.Avatar>
      Carolyn Grimaldi
      <Pill.IconButton onClick={() => console.warn('clicked')} />
    </Pill>

    <Pill variant="removable" disabled>
      <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
      <Pill.IconButton />
    </Pill>
  </HStack>
);
