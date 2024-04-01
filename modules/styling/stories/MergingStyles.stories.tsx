import {Meta, StoryObj} from '@storybook/react';
import {StylePropsTable} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../utils/storybook';

import mdxDoc from './MergingStyles.mdx';

// examples
import {StylingOverrides} from './examples/StylingOverrides';

export default {
  title: 'Styling/Mergiing Styles',
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

export const Docs: StoryObj = {
  render: StylingOverrides,
};
