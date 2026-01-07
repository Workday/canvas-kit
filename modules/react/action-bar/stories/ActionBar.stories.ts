import {Meta, StoryObj} from '@storybook/react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';

import mdxDoc from './ActionBar.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {DeleteAction as DeleteActionExample} from './examples/DeleteAction';
import {Icons as IconsExample} from './examples/Icons';
import {OverflowActionBar as OverflowActionBarExample} from './examples/OverflowActionBar';
import {OverflowActionBarCustomButtonCount as OverflowActionBarCustomButtonCountExample} from './examples/OverflowActionBarCustomButtonCount';

export default {
  title: 'Components/Buttons/Action Bar',
  component: ActionBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof ActionBar>;

type Story = StoryObj<typeof ActionBar>;

export const Basic: Story = {
  render: BasicExample,
};
export const Icons: Story = {
  render: IconsExample,
};
export const DeleteAction: Story = {
  render: DeleteActionExample,
};
export const OverflowActionBar: Story = {
  render: OverflowActionBarExample,
};
export const OverflowActionBarCustomButtonCount: Story = {
  render: OverflowActionBarCustomButtonCountExample,
};
