import {Meta} from '@storybook/react';

import mdxDoc from './Breadcrumbs.mdx';
import {Basic as BasicExample} from './examples/Basic';
import {CurrentItemTruncation as CurrentItemTruncationExample} from './examples/CurrentItemTruncation';
import {LinkTruncation as LinkTruncationExample} from './examples/LinkTruncation';
import {OverflowBreadcrumbs as OverflowBreadcrumbsExample} from './examples/Overflow';
import {RTLOverflowList as RTLOverflowListExample} from './examples/RTL';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
