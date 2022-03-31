import React from 'react';

import {Pill} from '@workday/canvas-kit-react/pill';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Components/Indicators/Pill/React',
  component: Pill,
};

export const Default = () => (
  <HStack spacing="s">
    <Pill>
      California
      {/* <Pill.Target as={SecondaryButton}>Toggle</Pill.Target>
    <Pill.Content>Content</Pill.Content> */}
    </Pill>
    <Pill>
      <Pill.Avatar />
      California
      {/* <Pill.Target as={SecondaryButton}>Toggle</Pill.Target>
    <Pill.Content>Content</Pill.Content> */}
    </Pill>
    <Pill>
      <Pill.Count>4</Pill.Count>
      <Pill.Avatar />
      California
    </Pill>
  </HStack>
);
