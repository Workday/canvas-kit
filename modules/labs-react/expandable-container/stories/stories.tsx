import React from 'react';

import {ExpandableContainer} from '@workday/canvas-kit-labs-react/expandable-container';
import {PrimaryButton} from '@workday/canvas-kit-react';

export default {
  title: 'Labs/Expandable Container/React',
  component: ExpandableContainer,
};

export const Default = () => (
  <ExpandableContainer>
    <ExpandableContainer.Header as={'h2'}>
      <ExpandableContainer.Button as={PrimaryButton}>
        Additional Information
      </ExpandableContainer.Button>
    </ExpandableContainer.Header>
    <ExpandableContainer.Content>Content</ExpandableContainer.Content>
  </ExpandableContainer>
);
