import {Meta, StoryObj} from '@storybook/react';

import {Grid} from '@workday/canvas-kit-react/layout';

import mdxDoc from './Grid.mdx';
// examples
import {Basic as BasicExample} from './examples/Grid/Basic';
import {GridLayout as GridLayoutExample} from './examples/Grid/GridLayout';
import {GridLayoutInteractive as GridLayoutInteractiveExample} from './examples/Grid/GridLayoutInteractive';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  render: BasicExample,
};
export const GridLayout: Story = {
  render: GridLayoutExample,
};
export const GridLayoutInteractive: Story = {
  render: GridLayoutInteractiveExample,
};
