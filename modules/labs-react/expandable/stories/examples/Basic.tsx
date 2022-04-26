import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const Basic = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      Title
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
