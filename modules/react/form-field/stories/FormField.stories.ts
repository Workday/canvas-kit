import {Meta} from '@storybook/react';

import mdxDoc from './FormField.mdx';

export {Basic} from './examples/Basic';
export {Alert} from './examples/Alert';
export {Error} from './examples/Error';
export {Disabled} from './examples/Disabled';
export {HiddenLabel} from './examples/HiddenLabel';
export {LabelPositionHorizontalStart} from './examples/LabelPositionHorizontalStart';
export {LabelPositionHorizontalEnd} from './examples/LabelPositionHorizontalEnd';
export {RefForwarding} from './examples/RefForwarding';
export {Required} from './examples/Required';
export {Custom} from './examples/Custom';
export {CustomId} from './examples/CustomId';
export {AllFields} from './examples/AllFields';
export {Hint} from './examples/Hint';
export {Grow} from './examples/Grow';
export {ThemedError} from './examples/ThemedErrors';
export {GroupedInputs} from './examples/GroupedInputs';

export default {
  title: 'Components/Inputs/Form Field',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
