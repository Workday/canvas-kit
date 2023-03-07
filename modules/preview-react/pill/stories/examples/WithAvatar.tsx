import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {Flex} from '@workday/canvas-kit-react/layout';

export const WithAvatar = () => {
  return (
    <Flex gap="xxs">
      <Pill onClick={() => console.warn('clicked')}>
        <Pill.Avatar url={testAvatar} />
        Regina Skeltor
      </Pill>
      <Pill onClick={() => console.warn('clicked')} disabled maxWidth={50}>
        <Pill.Avatar url={testAvatar} />
        Regina Skeltor
      </Pill>
    </Flex>
  );
};
