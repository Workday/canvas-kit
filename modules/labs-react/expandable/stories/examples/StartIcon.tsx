import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const StartIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.StartIcon />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
