import {Meta} from '@storybook/react';

import mdxDoc from './Radio.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Disabled} from './examples/Disabled';
export {Inverse} from './examples/Inverse';
export {Error} from './examples/Error';
export {LabelPosition} from './examples/LabelPosition';
export {NoValue} from './examples/NoValue';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';

export default {
  title: 'Components/Inputs/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
