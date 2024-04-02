import {Meta, StoryObj} from '@storybook/react';
import {StylePropsTable} from '@workday/canvas-kit-docs';
import {ExampleCodeBlock} from '../../../utils/storybook';

import mdxDoc from './MergingStyles.mdx';

// examples
import {StylingOverrides as StylingOverridesExample} from './examples/StylingOverrides';

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

export const StylingOverrides: StoryObj = {
  render: StylingOverridesExample,
};
