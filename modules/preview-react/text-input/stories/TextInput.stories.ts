import {Meta} from '@storybook/react';

import mdxDoc from './TextInput.mdx';

export {Basic} from './examples/Basic';
export {Disabled} from './examples/Disabled';
export {Grow} from './examples/Grow';
export {LabelPositionHorizontal} from './examples/LabelPositionHorizontal';
export {LabelPositionVertical} from './examples/LabelPositionVertical';
export {Placeholder} from './examples/Placeholder';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';
export {Hidden} from './examples/Hidden';
export {ReadOnly} from './examples/ReadOnly';
export {Password} from './examples/Password';
export {HiddenLabel} from './examples/HiddenLabel';
export {ThemedAlert} from './examples/ThemedAlert';
export {ThemedError} from './examples/ThemedError';
export {Error} from './examples/Error';
export {Alert} from './examples/Alert';

export default {
  title: 'Preview/Inputs/Text Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
