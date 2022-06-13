import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.StartIcon />
          <Expandable.Avatar />
          <Expandable.Title>Expandable Title</Expandable.Title>
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};
