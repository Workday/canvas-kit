import {Meta} from '@storybook/react';

import mdxDoc from './Tokens.mdx';
import {Overview} from './examples/Overview';
import {
  BorderRadius as BorderRadiusExample,
  Colors as ColorsExample,
  Depth as DepthExample,
  Space as SpaceExample,
  Type as TypeExample,
} from './examples/Tokens';

export default {
  title: 'Tokens/Tokens (deprecated)',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Docs = {
  render: Overview,
};

export const BorderRadius = {
  render: BorderRadiusExample,
};

export const Space = {
  render: SpaceExample,
};
export const Depth = {
  render: DepthExample,
};
export const Colors = {
  render: ColorsExample,
};
export const Type = {
  render: TypeExample,
};
