import React from 'react';

import {ExpandableContainer} from '@workday/canvas-kit-labs-react/expandable-container';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Labs/Expandable Container/React',
  component: ExpandableContainer,
};

export const Default = () => (
  <ExpandableContainer>
    <ExpandableContainer.Target as={SecondaryButton}>Toggle</ExpandableContainer.Target>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);
