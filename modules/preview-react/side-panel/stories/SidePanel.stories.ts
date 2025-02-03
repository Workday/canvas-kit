import {Meta} from '@storybook/react';

import mdxDoc from './SidePanel.mdx';

export {Basic} from './examples/Basic';
export {HiddenName} from './examples/HiddenName';
export {AlternatePanel} from './examples/Variant';
export {ExternalControl} from './examples/ExternalControl';
export {RightOrigin} from './examples/RightOrigin';
export {AlwaysOpen} from './examples/AlwaysOpen';
export {OnExpandedChange} from './examples/OnExpandedChange';
export {OnStateTransition} from './examples/OnStateTransition';

export default {
  title: 'Preview/Side Panel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
