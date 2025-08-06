import {Meta, StoryObj} from '@storybook/react';

import mdxDoc from './Avatar.mdx';

import {Avatar} from '@workday/canvas-kit-preview-react/avatar';

import {Basic as BasicExample} from './examples/Basic';
import {Image as ImageExample} from './examples/Image';
import {Size as SizeExample} from './examples/Size';
import {Variant as VariantExample} from './examples/Variant';
import {CustomColor as CustomColorExample} from './examples/CustomColor';
import {Custom as CustomExample} from './examples/Custom';

export default {
  title: 'Preview/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: BasicExample,
};

export const Image: Story = {
  render: ImageExample,
};

export const Size: Story = {
  render: SizeExample,
};

export const Variant: Story = {
  render: VariantExample,
};

export const CustomColor: Story = {
  render: CustomColorExample,
};

export const Custom: Story = {
  render: CustomExample,
};
