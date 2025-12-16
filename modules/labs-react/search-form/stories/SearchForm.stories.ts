import {Meta, StoryObj} from '@storybook/react';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import mdxDoc from './SearchForm.mdx';
// examples
import {Basic as BasicExample} from './examples/Basic';
import {Collapsed as CollapsedExample} from './examples/Collapsed';
import {CustomStyles as CustomStylesExample} from './examples/CustomStyles';
import {CustomTheme as CustomThemeExample} from './examples/CustomTheme';
import {Grow as GrowExample} from './examples/Grow';
import {RTL as RTLExample} from './examples/RTL';
import {Theming as ThemingExample} from './examples/Theming';

const meta: Meta<typeof SearchForm> = {
  title: 'Labs/Search Form (deprecated)',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Basic: Story = {
  render: BasicExample,
};
export const CustomTheme: Story = {
  render: CustomThemeExample,
};
export const Grow: Story = {
  render: GrowExample,
};
export const RTL: Story = {
  render: RTLExample,
};
export const Theming: Story = {
  render: ThemingExample,
};

export const Collapsed: Story = {
  render: CollapsedExample,
};
export const CustomStyles: Story = {
  render: CustomStylesExample,
};
