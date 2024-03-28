import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import mdxDoc from './LabelText.mdx';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {LabelText} from '@workday/canvas-kit-react/text';
import {Basic as BasicExample} from './examples/LabelText/Basic';
import {Cursor as CursorExample} from './examples/LabelText/Cursor';
import {Disabled as DisabledExample} from './examples/LabelText/Disabled';

export default {
  title: 'Components/Text/Label Text',
  component: LabelText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock, StatusIndicator},
    },
  },
} as Meta<typeof LabelText>;

type Story = StoryObj<typeof LabelText>;

export const Basic: Story = {
  render: BasicExample,
};

export const Cursor: Story = {
  render: CursorExample,
};
export const Disabled: Story = {
  render: DisabledExample,
};
