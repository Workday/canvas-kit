import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './Heading.mdx';

import {Heading} from '@workday/canvas-kit-react/text';

import {Basic as BasicExample} from './examples/Heading/Basic';

export default {
  title: 'Components/Text/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {
  render: BasicExample,
};
