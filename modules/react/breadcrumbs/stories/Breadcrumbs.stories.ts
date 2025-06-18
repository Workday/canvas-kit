import {Meta} from '@storybook/react';

import mdxDoc from './Breadcrumbs.mdx';

export {Basic} from './examples/Basic';
export {CurrentItemTruncation} from './examples/CurrentItemTruncation';
export {LinkTruncation} from './examples/LinkTruncation';
export {OverflowBreadcrumbs} from './examples/Overflow';
export {RTLOverflowList} from './examples/RTL';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
