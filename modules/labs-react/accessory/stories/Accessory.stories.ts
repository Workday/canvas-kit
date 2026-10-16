import {Meta, StoryObj} from '@storybook/react';

import {Accessory} from '@workday/canvas-kit-labs-react/accessory';

import mdxDoc from './Accessory.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Calendar as CalendarExample} from './examples/Calendar';
import {Custom as CustomExample} from './examples/Custom';
import {Favicon as FaviconExample} from './examples/Favicon';
import {File as FileExample} from './examples/File';
import {Icon as IconExample} from './examples/Icon';
import {Media as MediaExample} from './examples/Media';
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

export const Icon: Story = {
  render: IconExample,
};

export const Media: Story = {
  render: MediaExample,
};

export const Favicon: Story = {
  render: FaviconExample,
};

export const File: Story = {
  render: FileExample,
};

export const Calendar: Story = {
  render: CalendarExample,
};

export const Custom: Story = {
  render: CustomExample,
};

export const Sizes: Story = {
  render: SizesExample,
};

export const Variants: Story = {
  render: VariantsExample,
};
