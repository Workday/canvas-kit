/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Common} from '@workday/canvas-kit-labs-react-common';
import {Button} from '@workday/canvas-kit-react-button';
import README from '../README.md';

export default {
  title: 'Labs/Common/React',
  decorators: [withReadme(README)],
  component: Common,
};

export const Default = () => (
  <Common>
    <Common.Target as={Button}>Toggle</Common.Target>
    <Common.Content>Content</Common.Content>
  </Common>
);
