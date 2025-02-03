import {Meta} from '@storybook/react';

import mdxDoc from './ActionBar.mdx';

export {Basic} from './examples/Basic';
export {Icons} from './examples/Icons';
export {DeleteAction} from './examples/DeleteAction';
export {OverflowActionBar} from './examples/OverflowActionBar';
export {OverflowActionBarCustomButtonCount} from './examples/OverflowActionBarCustomButtonCount';

export default {
  title: 'Components/Buttons/Action Bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
