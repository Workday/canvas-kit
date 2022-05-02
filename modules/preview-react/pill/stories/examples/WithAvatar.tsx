import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {HStack} from '@workday/canvas-kit-react';

export const ClickablePillWithAvatar = () => {
  return (
    <HStack shouldWrapChildren spacing="xxs">
      <Pill onClick={() => console.warn('clicked')}>
        <Pill.Avatar url={testAvatar} />
        Regina Skeltor
      </Pill>
      <Pill onClick={() => console.warn('clicked')} disabled maxWidth={100}>
        <Pill.Avatar url={testAvatar} />
        Regina Skeltor
      </Pill>
    </HStack>
  );
};
