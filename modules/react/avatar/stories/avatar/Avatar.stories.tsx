import {Meta} from '@storybook/react';
import mdxDoc from './Avatar.mdx';

import {Basic as BasicExample} from './examples/Basic';
import {Button as ButtonExample} from './examples/Button';
import {CustomStyles as CustomStylesExample} from './examples/CustomStyles';
import {Image as ImageExample} from './examples/Image';
import {LazyLoad as LazyLoadExample} from './examples/LazyLoad';
import {ObjectFit as ObjectFitExample} from './examples/ObjectFit';
import {Variant as VariantExample} from './examples/Variant';

export default {
  title: 'Components/Indicators/Avatar (deprecated)',
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

export const Button = {
  render: ButtonExample,
};

export const CustomStyles = {
  render: CustomStylesExample,
};

export const Image = {
  render: ImageExample,
};

export const LazyLoad = {
  render: LazyLoadExample,
};

export const ObjectFit = {
  render: ObjectFitExample,
};

export const Variant = {
  render: VariantExample,
};
