import {Meta} from '@storybook/react';

import {Dialog} from '@workday/canvas-kit-react/dialog';

import mdxDoc from './Dialog.mdx';

export {Basic} from './examples/Basic';
export {Focus} from './examples/Focus';

export default {
  title: 'Components/Popups/Dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
