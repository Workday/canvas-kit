import {Meta} from '@storybook/react';

import mdxDoc from './Menu.mdx';

export {Basic} from './examples/Basic';
export {ContextMenu} from './examples/ContextMenu';
export {CustomMenuItem} from './examples/CustomMenuItem';
export {Icons} from './examples/Icons';
export {Headers} from './examples/Headers';
export {ManyItems} from './examples/ManyItems';

export default {
  title: 'Preview/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
