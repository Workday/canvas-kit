import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './BodyText.mdx';

import {BodyText} from '@workday/canvas-kit-react/text';

import {Basic as BasicExample} from './examples/BodyText/Basic';

export default {
  title: 'Components/Text/Body Text',
  component: BodyText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock},
    },
  },
} as Meta<typeof BodyText>;

type Story = StoryObj<typeof BodyText>;

export const Basic: Story = {
  render: BasicExample,
};
