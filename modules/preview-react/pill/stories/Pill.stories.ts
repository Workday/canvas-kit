import {Meta} from '@storybook/react';

import mdxDoc from './Pill.mdx';

export {WithReadOnly} from './examples/WithReadOnly';
export {WithAvatar} from './examples/WithAvatar';
export {Basic} from './examples/Basic';
export {WithCount} from './examples/WithCount';
export {WithRemovable} from './examples/WithRemovable';
export {WithList} from './examples/WithList';

export default {
  title: 'Preview/Pill',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
