import {Meta, StoryObj} from '@storybook/react';

import {ToolbarIconButton} from '@workday/canvas-kit-react/button';

import {TextFormattingToolbar} from './examples/TextFormattingToolbar';

const meta: Meta<typeof ToolbarIconButton> = {
  title: 'Components/Buttons/Toolbar',
  component: ToolbarIconButton,
  parameters: {
    ReadmePath: 'react/button',
  },
};

export default meta;

export const TextFormatting: StoryObj = {
  render: TextFormattingToolbar,
};
