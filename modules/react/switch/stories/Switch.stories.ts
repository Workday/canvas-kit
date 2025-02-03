import {Meta} from '@storybook/react';

import mdxDoc from './Switch.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Disabled} from './examples/Disabled';
export {Error} from './examples/Error';
export {LabelPosition} from './examples/LabelPosition';
export {RefForwarding} from './examples/RefForwarding';

export default {
  title: 'Components/Inputs/Switch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
