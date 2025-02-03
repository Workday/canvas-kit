import {Meta} from '@storybook/react';

import mdxDoc from './Checkbox.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Inverse} from './examples/Inverse';
export {Disabled} from './examples/Disabled';
export {Error} from './examples/Error';
export {Indeterminate} from './examples/Indeterminate';
export {LabelPosition} from './examples/LabelPosition';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';

export default {
  title: 'Components/Inputs/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
