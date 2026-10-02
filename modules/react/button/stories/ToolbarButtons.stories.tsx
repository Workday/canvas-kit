import {Meta, StoryObj} from '@storybook/react';

import {ToolbarIconButton} from '@workday/canvas-kit-react/button';

import mdxDoc from './Toolbar.mdx';
import {TextFormattingToolbar} from './examples/TextFormattingToolbar';

const meta: Meta<typeof ToolbarIconButton> = {
  title: 'Components/Buttons/Toolbar',
  component: ToolbarIconButton,
  tags: ['autodocs'],
  parameters: {
    ReadmePath: 'react/button',
    docs: {
      page: mdxDoc,
    },
  },
};

export default meta;

export const TextFormatting: StoryObj = {
  render: TextFormattingToolbar,
};
