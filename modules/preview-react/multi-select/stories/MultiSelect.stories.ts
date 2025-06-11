import {Meta} from '@storybook/react';

import mdxDoc from './MultiSelect.mdx';

export {Basic } from './examples/Basic';
export {Disabled } from './examples/Disabled';
export {Error } from './examples/Error';
export {Icons } from './examples/Icons';
export {Complex } from './examples/Complex';
export {Controlled } from './examples/Controlled';
export {Searching } from './examples/Searching';

export default {
  title: 'Preview/MultiSelect',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
