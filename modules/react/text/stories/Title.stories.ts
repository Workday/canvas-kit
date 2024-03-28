import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './BodyText.mdx';

import {Title} from '@workday/canvas-kit-react/text';

import {Basic as BasicExample} from './examples/Title/Basic';

export default {
  title: 'Components/Text/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Basic: Story = {
  render: BasicExample,
};
