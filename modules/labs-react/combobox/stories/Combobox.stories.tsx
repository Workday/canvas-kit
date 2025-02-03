import {Meta} from '@storybook/react';

import mdxDoc from './Combobox.mdx';

export {Basic as Autocomplete} from './examples/Basic';
export {DisabledItem} from './examples/DisabledItem';
export {GroupOfResult} from './examples/GroupOfResult';
export {Grow} from './examples/Grow';
export {NoClearButton} from './examples/NoClearButton';
export {RTL} from './examples/RTL';

export default {
  title: 'Labs/Combobox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
