import {Meta} from '@storybook/react';

import mdxDoc from './Menu.mdx';

export {Basic} from './examples/Basic';
export {ContextMenu} from './examples/ContextMenu';
export {Icons} from './examples/Icons';
export {SelectableMenu} from './examples/SelectableMenu';

export default {
  title: 'Components/Popups/Menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
