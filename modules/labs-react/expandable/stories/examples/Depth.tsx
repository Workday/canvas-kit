import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {space} from '@workday/canvas-kit-react/tokens';

export const Depth = () => {
  return (
    <Expandable borderRadius="l" depth={3} margin="xxxs" padding="xs">
      <Expandable.Target headingLevel="h4">
        <Expandable.Title>Additional Information</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>This Expandable Container has a depth of 3.</Expandable.Content>
    </Expandable>
  );
};
