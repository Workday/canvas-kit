import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {
  Avatar,
  PrimaryButton,
  styled,
  SystemIcon,
  TertiaryButton,
  type,
} from '@workday/canvas-kit-react';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '../../layout/lib/Flex';

export default {
  title: 'Labs/Container/Expandable/React',
  component: Expandable,
};

export const Default = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">Additional Information</Expandable.Target>
    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

export const SingleLineHeader = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

export const SingleLineHeaderEndChevron = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.Title>Title</Expandable.Title>
      <Expandable.EndChevron />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
