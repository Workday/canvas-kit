import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export default {
  title: 'Labs/Container/Expandable/React',
  component: Expandable,
};

export const Default = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      Additional Information
    </Expandable.Target>
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

export const EndChevron = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.Title>Title</Expandable.Title>
      <Expandable.EndChevron />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

export const AvatarExample = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      <Expandable.Title>
        <Expandable.Avatar />
        Title
      </Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
