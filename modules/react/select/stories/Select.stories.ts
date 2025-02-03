import {Meta} from '@storybook/react';

import mdxDoc from './Select.mdx';

export {Alert} from './examples/Alert';
export {Basic} from './examples/Basic';
export {Complex} from './examples/Complex';
export {Controlled} from './examples/Controlled';
export {Disabled} from './examples/Disabled';
export {DisabledOptions} from './examples/DisabledOption';
export {Error} from './examples/Error';
export {Grow} from './examples/Grow';
export {LabelPosition} from './examples/LabelPosition';
export {WithIcons} from './examples/WithIcons';
export {Required} from './examples/Required';
export {MenuHeight} from './examples/MenuHeight';
export {HoistedModel} from './examples/HoistedModel';
export {RefForwarding} from './examples/RefForwarding';
export {FetchingDynamicItems} from './examples/FetchingDynamicItems';
export {Placeholder} from './examples/Placeholder';
export {InitialSelectedItem} from './examples/InitialSelectedItem';

export default {
  title: 'Components/Inputs/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
