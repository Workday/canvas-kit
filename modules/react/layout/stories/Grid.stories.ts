import {Meta} from '@storybook/react';

import mdxDoc from './Grid.mdx';

export {Basic} from './examples/Grid/Basic';
export {GridLayout} from './examples/Grid/GridLayout';
export {GridLayoutInteractive} from './examples/Grid/GridLayoutInteractive';

export default {
  title: 'Components/Layout/Grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
