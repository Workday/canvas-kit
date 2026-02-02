import {Meta} from '@storybook/react';

import mdxDoc from './Tokens.mdx';

import {
  BorderRadius as BorderRadiusExample,
  Space as SpaceExample,
  Depth as DepthExample,
  Colors as ColorsExample,
  Type as TypeExample,
} from './examples/Tokens';
import {Overview} from './examples/Overview';

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
