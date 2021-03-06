/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Flex} from '@workday/canvas-kit-labs-react-common';
import README from '../README.md';

export default {
  title: 'Labs/Common/Flex/React',
  decorators: [withReadme(README)],
  component: Flex,
};

export const FlexLayout = () => (
  <Flex p="s">
    <Flex p="s" borderRadius="s" depth="inset" m="s" flex={1} justifyContent="center">-1</Flex>
    <Flex p="s" borderRadius="circle" m="s" flex={1} justifyContent="center">0</Flex>
    <Flex p="s" borderRadius="circle" depth={1} m="s" flex={1} justifyContent="center">1</Flex>
    <Flex p="s" borderRadius="circle" depth={2} m="s" flex={1} justifyContent="center">2</Flex>
    <Flex p="s" borderRadius="circle" depth={3} m="s" flex={1} justifyContent="center">3</Flex>
  </Flex>
);
