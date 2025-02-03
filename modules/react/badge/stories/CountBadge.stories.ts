import {Meta} from '@storybook/react';

import mdxDoc from './CountBadge.mdx';

export {Basic} from './examples/Basic';
export {CustomLimit} from './examples/CustomLimit';
export {NotificationBadge} from './examples/NotificationBadge';

export default {
  title: 'Components/Indicators/CountBadge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
