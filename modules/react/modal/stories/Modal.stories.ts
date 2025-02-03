import {Meta} from '@storybook/react';

import mdxDoc from './Modal.mdx';

export {Basic} from './examples/Basic';
export {WithoutCloseIcon} from './examples/WithoutCloseIcon';
export {CustomFocus} from './examples/CustomFocus';
export {ReturnFocus} from './examples/ReturnFocus';
export {CustomTarget} from './examples/CustomTarget';
export {BodyOverflow} from './examples/BodyOverflow';
export {FullOverflow} from './examples/FullOverflow';
export {FormModal} from './examples/FormModal';
export {IframeTest} from './examples/IframeTest';

export default {
  title: 'Components/Popups/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
