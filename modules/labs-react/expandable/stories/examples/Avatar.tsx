import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const Avatar = () => (
  <Expandable>
    <Expandable.Target headingLevel="h3">
      <Expandable.StartChevron />
      <Expandable.Title>
        <Expandable.Avatar />
        Title
      </Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
