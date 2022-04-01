import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
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
    <Pill variant="interactive">California</Pill>
    <Pill>
      <Pill.Avatar />
      California
    </Pill>
    <Pill variant="readOnly">
      <Pill.Count>4</Pill.Count>
      <Pill.Avatar />
      California
    </Pill>

    <Pill variant="removable">
      <Pill.Avatar />
      California
      <Pill.Icon icon={xIcon} />
    </Pill>
    <Pill>Some super long pill that should show a tooltip</Pill>
    <Pill>
      Add a skill <Pill.Icon icon={plusIcon} />
    </Pill>
    <Pill>
      <Pill.Avatar url={testAvatar} />
      Regina Skeltor
    </Pill>
  </HStack>
);
