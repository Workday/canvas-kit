import {Meta} from '@storybook/react';

import mdxDoc from './ColorInput.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Checked} from './examples/Checked';
export {Disabled} from './examples/Disabled';
export {Error} from './examples/Error';
export {Grow} from './examples/Grow';
export {LabelPosition} from './examples/LabelPosition';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';
export {ValidColorChange} from './examples/ValidColorChange';

export default {
  title: 'Components/Inputs/Color Picker/Color Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
