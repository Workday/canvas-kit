/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {TestComponent} from '@workday/canvas-kit-labs-react-test-component';
import {Button} from '@workday/canvas-kit-react-button';
import README from '../README.md';

export default {
  title: 'Labs|Test Component/React',
  decorators: [withReadme(README)],
  component: TestComponent,
};

export const Default = () => (
  <TestComponent>
    <TestComponent.Target as={Button}>Toggle</TestComponent.Target>
    <TestComponent.Content>Content</TestComponent.Content>
  </TestComponent>
);