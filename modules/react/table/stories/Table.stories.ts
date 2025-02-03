import {Meta} from '@storybook/react';

import mdxDoc from './Table.mdx';

export {Basic} from './examples/Basic';
export {BasicWithHeading} from './examples/BasicWithHeading';
export {FixedColumn} from './examples/FixedColumn';
export {RightToLeft} from './examples/RightToLeft';

export default {
  title: 'Components/Containers/Table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
