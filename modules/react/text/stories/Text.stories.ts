import {Meta, StoryObj} from '@storybook/react';

import {Text} from '@workday/canvas-kit-react/text';

import mdxDoc from './Text.mdx';
import {Basic as BasicExample} from './examples/Text/Basic';
import {TypeLevel as TypeLevelExample} from './examples/Text/TypeLevel';
import {Variant as VariantExample} from './examples/Text/Variant';

export default {
  title: 'Components/Text/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  render: BasicExample,
};
export const TypeLevel: Story = {
  render: TypeLevelExample,
};
export const Variant: Story = {
  render: VariantExample,
};
