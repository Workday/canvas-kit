import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {HStack} from '@workday/canvas-kit-react';

export const RemovablePill = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill onDelete={() => console.warn('clicked')}>
      Pink Shirts
      <Pill.IconButton />
    </Pill>
    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar}></Pill.Avatar>
      Carolyn Grimaldi
      <Pill.IconButton />
    </Pill>

    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Label>This is a category that should not exist because it is too long</Pill.Label>
      <Pill.IconButton onClick={e => console.warn('click event on icon button', e)} />
    </Pill>
  </HStack>
);
