import React from 'react';

import {List} from '@workday/canvas-kit-react/list';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Components/Navigation/List/React',
  component: List,
};

export const Default = () => (
  <List>
    <List.Target as={SecondaryButton}>Toggle</List.Target>
    <List.Content>Content</List.Content>
  </List>
);