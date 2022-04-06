import React from 'react';

import {Pill, ReadyOnlyPill, InteractivePill} from '@workday/canvas-kit-react/pill';
import {HStack} from '@workday/canvas-kit-react/layout';
import {xIcon, plusIcon} from '@workday/canvas-system-icons-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export default {
  title: 'Components/Indicators/Pill/React',
  component: Pill,
};

export const Default = () => (
  <HStack spacing="s">
    <ReadyOnlyPill>Ready Only Pill</ReadyOnlyPill>
    <InteractivePill icon={plusIcon}>Interactive Pill</InteractivePill>
    <InteractivePill count={4}>California</InteractivePill>
    {/* <Pill variant="interactive">California</Pill> */}
  </HStack>
);
