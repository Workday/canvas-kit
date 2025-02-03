import {Meta} from '@storybook/react';

import mdxDoc from './pagination.mdx';

export {Basic} from './examples/Basic';
export {CustomRange} from './examples/CustomRange';
export {JumpControls} from './examples/JumpControls';
export {GoToForm} from './examples/GoToForm';
export {HoistedModel} from './examples/HoistedModel';
export {ResponsiveRange} from './examples/ResponsiveRange';
export {RTL} from './examples/RTL';

export default {
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
