import React from 'react';

import {Pill, ReadyOnlyPill, InteractivePill, RemovablePill} from '@workday/canvas-kit-react/pill';
import {Stack} from '@workday/canvas-kit-react/layout';
import {xIcon, plusIcon} from '@workday/canvas-system-icons-web';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export default {
  title: 'Components/Indicators/Pill/React',
  component: Pill,
};

export const Default = () => (
  <Stack spacing="s" flexDirection="column">
    {/* <ReadyOnlyPill>Ready Only Pill</ReadyOnlyPill>
    <InteractivePill icon={plusIcon}>Interactive Pill</InteractivePill>

    <InteractivePill showAvatar avatarProps={{url: testAvatar}}>
      Rudy Skeltor
    </InteractivePill>

    <InteractivePill count={4}>California</InteractivePill>

    <RemovablePill>Removable</RemovablePill>
    <RemovablePill showAvatar avatarProps={{url: testAvatar}}>
      This person needs to be removed from the data base
    </RemovablePill> */}
    <Pill variant="readOnly">Testing</Pill>
  </Stack>
);
