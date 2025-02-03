import {Meta} from '@storybook/react';

import mdxDoc from './TextArea.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Disabled} from './examples/Disabled';
export {Error} from './examples/Error';
export {Grow} from './examples/Grow';
export {LabelPosition} from './examples/LabelPosition';
export {Placeholder} from './examples/Placeholder';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';
export {ResizeConstraints} from './examples/ResizeConstraints';

export default {
  title: 'Components/Inputs/TextArea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
