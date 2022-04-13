import React from 'react';

import {ExpandableContainer} from '@workday/canvas-kit-labs-react/expandable-container';

export default {
  title: 'Labs/Expandable Container/React',
  component: ExpandableContainer,
};

export const Default = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button>Hello</ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);

export const RightChevron = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button rightChevron={true}>Hello</ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);
