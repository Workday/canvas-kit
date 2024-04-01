import {Meta} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';

import mdxDoc from './Responsive.mdx';

import {ResponsiveContainer as ResponsiveContainerExample} from './examples/ResponsiveStyles';
import {ResponsiveViewport as ResponsiveViewportExample} from './examples/ResponsiveViewport';

export default {
  title: 'Features/Responsive Styling',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
      },
    },
  },
} as Meta;

export const ResponsiveContainer = {
  render: ResponsiveContainerExample,
};

export const ResponsiveViewport = {
  render: ResponsiveViewportExample,
};
