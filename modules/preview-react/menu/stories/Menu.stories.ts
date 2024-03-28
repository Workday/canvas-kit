import {Meta, StoryObj} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';
import {DeprecatedMenu} from '@workday/canvas-kit-preview-react/menu';
import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import mdxDoc from './Menu.mdx';
// examples

import {Basic as BasicExample} from './examples/Basic';
import {ContextMenu as ContextMenuExample} from './examples/ContextMenu';
import {CustomMenuItem as CustomMenuItemExample} from './examples/CustomMenuItem';
import {Icons as IconsExample} from './examples/Icons';
import {Headers as HeadersExample} from './examples/Headers';
import {ManyItems as ManyItemsExample} from './examples/ManyItems';

export default {
  title: 'Preview/Menu',
  component: DeprecatedMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {ExampleCodeBlock, StatusIndicator},
    },
  },
} as Meta<typeof DeprecatedMenu>;

type Story = StoryObj<typeof DeprecatedMenu>;

export const Basic: Story = {
  render: BasicExample,
};
export const ContextMenu: Story = {
  render: ContextMenuExample,
};
export const CustomMenuItem: Story = {
  render: CustomMenuItemExample,
};
export const Icons: Story = {
  render: IconsExample,
};
export const Headers: Story = {
  render: HeadersExample,
};
export const ManyItems: Story = {
  render: ManyItemsExample,
};
