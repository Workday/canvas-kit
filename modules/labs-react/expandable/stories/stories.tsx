import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
import {CanvasProvider, ContentDirection, Flex, space, styled} from '@workday/canvas-kit-react';

export default {
  title: 'Labs/Container/Expandable/React',
  component: Expandable,
};

export const Default = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>
    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

export const NoTitle = () => (
  <Expandable>
    <Expandable.Target headingLevel="h1">
      <Expandable.StartChevron />
      Additional Information
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

export const Avatar = () => (
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

export const RTLStartChevron = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };

  return (
    <CanvasProvider theme={theme}>
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
    </CanvasProvider>
  );
};

export const RTLEndChevron = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <Expandable>
        <Expandable.Target headingLevel="h1">
          <Expandable.Title>
            <Expandable.Avatar />
            Title
          </Expandable.Title>
          <Expandable.EndChevron />
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};

export const StyledExpandable = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.LTR,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <Expandable borderRadius="m" depth={3} margin={space.xxxs} padding={space.xs}>
        <Expandable.Target headingLevel="h1">
          <Expandable.Title>Additional Information</Expandable.Title>
          <Expandable.EndChevron />
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};
