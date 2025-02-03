import {Meta} from '@storybook/react';

import mdxDoc from './Popup.mdx';

export {Basic} from './examples/Basic';
export {InitialFocus} from './examples/InitialFocus';
export {MultiplePopups} from './examples/MultiplePopups';
export {NestedPopups} from './examples/NestedPopups';
export {FocusRedirect} from './examples/FocusRedirect';
export {FocusTrap} from './examples/FocusTrap';
export {RTL} from './examples/RTL';
export {CustomTarget} from './examples/CustomTarget';
export {FullScreen} from './examples/FullScreen';

export default {
  title: 'Components/Popups/Popup',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
