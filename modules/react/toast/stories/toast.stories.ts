import {Meta} from '@storybook/react';

import mdxDoc from './toast.mdx';

export {Basic} from './examples/Basic';
export {ToastAlert} from './examples/ToastAlert';
export {ToastDialog} from './examples/ToastDialog';
export {WithActionLinkAndCloseIcon} from './examples/WithActionLinkAndCloseIcon';
export {WithPopper} from './examples/WithPopper';
export {RTL} from './examples/RTL';

export default {
  title: 'Components/Popups/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
