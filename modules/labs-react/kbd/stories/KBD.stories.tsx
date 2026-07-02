import {Meta} from '@storybook/react';

import mdxDoc from './KBD.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {Items as ItemsExample} from './examples/Items';
import {RTL as RTLExample} from './examples/RTL';
import {Size as SizeExample} from './examples/Size';
import {Variant as VariantExample} from './examples/Variant';

export default {
  title: 'Labs/KBD',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Basic = {
  render: BasicExample,
};

export const RTL = {
  render: RTLExample,
};

export const Size = {
  render: SizeExample,
};

export const Variant = {
  render: VariantExample,
};

export const Items = {
  render: ItemsExample,
};
