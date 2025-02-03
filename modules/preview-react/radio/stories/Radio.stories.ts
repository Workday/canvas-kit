import {Meta} from '@storybook/react';

import mdxDoc from './Radio.mdx';

export {Basic} from './examples/Basic';
export {Alert} from './examples/Alert';
export {Error} from './examples/Error';
export {Inverse} from './examples/Inverse';
export {LabelPosition} from './examples/LabelPosition';
export {NoValue} from './examples/NoValue';
export {RefForwarding} from './examples/RefForwarding';
export {Disabled} from './examples/Disabled';
export {Required} from './examples/Required';
export {Custom} from './examples/Custom';
export {StandaloneRadio} from './examples/StandaloneRadio';

export default {
  title: 'Preview/Inputs/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
