import {Meta, StoryObj} from '@storybook/react';

import {BodyText} from '@workday/canvas-kit-react/text';

import mdxDoc from './BodyText.mdx';
import {Basic as BasicExample} from './examples/BodyText/Basic';

export default {
  title: 'Components/Text/Body Text',
  component: BodyText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof BodyText>;

type Story = StoryObj<typeof BodyText>;

export const Basic: Story = {
  render: BasicExample,
};
