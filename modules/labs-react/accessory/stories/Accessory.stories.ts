import {Meta, StoryObj} from '@storybook/react';

import {Accessory} from '@workday/canvas-kit-labs-react/accessory';

import mdxDoc from './Accessory.mdx';
import {AccessibleName as AccessibleNameExample} from './examples/AccessibleName';
import {Basic as BasicExample} from './examples/Basic';
import {Custom as CustomExample} from './examples/Custom';
import {CustomColor as CustomColorExample} from './examples/CustomColor';
import {Image as ImageExample} from './examples/Image';
import {RTL as RTLExample} from './examples/RTL';
import {Sizes as SizesExample} from './examples/Sizes';
import {Variants as VariantsExample} from './examples/Variants';

export default {
  title: 'Labs/Accessory',
  component: Accessory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Accessory>;

type Story = StoryObj<typeof Accessory>;

export const Basic: Story = {
  render: BasicExample,
};

export const Image: Story = {
  render: ImageExample,
};

export const Custom: Story = {
  render: CustomExample,
};

export const CustomColor: Story = {
  render: CustomColorExample,
};

export const Sizes: Story = {
  render: SizesExample,
};

export const Variants: Story = {
  render: VariantsExample,
};

export const AccessibleName: Story = {
  render: AccessibleNameExample,
};

export const RTL: Story = {
  render: RTLExample,
};
