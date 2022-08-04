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
          <Expandable.Icon iconPosition="start" />
          <Expandable.Avatar />
          <Expandable.Title>Title</Expandable.Title>
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.Avatar />
          <Expandable.Title>Title</Expandable.Title>
          <Expandable.Icon iconPosition="end" />
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};
