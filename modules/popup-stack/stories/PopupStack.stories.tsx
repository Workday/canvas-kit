import {Meta} from '@storybook/react';

import mdxDoc from './PopupStack.mdx';

export {Basic} from './examples/Basic';

export default {
  title: 'Components/Popups/Popup Stack',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
