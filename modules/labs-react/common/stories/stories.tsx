/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Box} from '@workday/canvas-kit-labs-react/common';
import README from '../README.md';

export default {
  title: 'Labs/Common/React',
  decorators: [withReadme(README)],
  component: Box,
};

export const Default = () => <Box>Hello, Box!</Box>;
