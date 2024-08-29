import {Meta} from '@storybook/react';
import mdxDoc from './Button.mdx';

import {Primary as PrimaryExample} from './examples/Primary';
import {PrimaryInverse as PrimaryInverseExample} from './examples/PrimaryInverse';
import {Secondary as SecondaryExample} from './examples/Secondary';
import {SecondaryInverse as SecondaryInverseExample} from './examples/SecondaryInverse';
import {Tertiary as TertiaryExample} from './examples/Tertiary';
import {TertiaryInverse as TertiaryInverseExample} from './examples/TertiaryInverse';
import {Delete as DeleteExample} from './examples/Delete';

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Primary = {
  render: PrimaryExample,
};
export const PrimaryInverse = {
  render: PrimaryInverseExample,
};
export const Secondary = {
  render: SecondaryExample,
};
export const SecondaryInverse = {
  render: SecondaryInverseExample,
};
export const Tertiary = {
  render: TertiaryExample,
};
export const TertiaryInverse = {
  render: TertiaryInverseExample,
};
export const Delete = {
  render: DeleteExample,
};
