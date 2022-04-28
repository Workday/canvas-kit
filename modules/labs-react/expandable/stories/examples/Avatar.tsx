import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const Avatar = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.StartIcon />
      <Expandable.Avatar />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
