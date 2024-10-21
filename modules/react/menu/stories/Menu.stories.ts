import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Menu.mdx';
import {Menu} from '@workday/canvas-kit-react/menu';

import {Basic as BasicExample} from './examples/Basic';
import {ContextMenu as ContextMenuExample} from './examples/ContextMenu';
import {Icons as IconsExample} from './examples/Icons';
import {SelectableMenu as SelectableMenuExample} from './examples/SelectableMenu';

export default {
  title: 'Components/Popups/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: BasicExample,
};
export const ContextMenu: Story = {
  render: ContextMenuExample,
};
export const Icons: Story = {
  render: IconsExample,
};
export const SelectableMenu: Story = {
  render: SelectableMenuExample,
};
