import React from 'react';

import {Pill} from '@workday/canvas-kit-preview-react/pill';
import {plusIcon, xIcon} from '@workday/canvas-system-icons-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
import {HStack} from '@workday/canvas-kit-react';

export default {
  title: 'Preview/Pill/React',
  component: Pill,
};

export const Default = () => (
  <HStack shouldWrapChildren spacing="xxs">
    <Pill>Ready Only</Pill>
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar} />
      Regina Skeltor
    </Pill>
    <Pill onClick={() => console.warn('clicked')}>
      <Pill.Icon icon={plusIcon} />
      Regina Skeltor
    </Pill>
    <Pill onClick={() => console.warn('clicked')}>
      Category
      <Pill.Count>30</Pill.Count>
    </Pill>
    <Pill onDelete={() => console.warn('clicked')}>
      Pink Shirts
      <Pill.Icon icon={xIcon} />
    </Pill>
    <Pill onDelete={() => console.warn('clicked')}>
      <Pill.Avatar url={testAvatar}></Pill.Avatar>
      Carolyn Grimaldi
      <Pill.Icon icon={xIcon} />
    </Pill>
  </HStack>
);
